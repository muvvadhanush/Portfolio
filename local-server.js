const express = require('express');
const path = require('path');
const { neon } = require('@neondatabase/serverless');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Initialize Neon DB and create table on startup
async function initDB() {
    if (!process.env.DATABASE_URL) {
        console.warn('⚠️  DATABASE_URL not set — messages will not be saved to DB');
        return;
    }

    try {
        const sql = neon(process.env.DATABASE_URL);
        await sql`
            CREATE TABLE IF NOT EXISTS messages (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMPTZ DEFAULT NOW()
            )
        `;
        console.log('✅ Connected to Neon DB — messages table ready');
    } catch (err) {
        console.error('⚠️  Neon DB init failed (server will still run):', err.message);
    }
}

initDB();

// Serve index.html for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email address' });
    }

    // Save to Neon DB
    if (process.env.DATABASE_URL) {
        try {
            const sql = neon(process.env.DATABASE_URL);
            await sql`
                INSERT INTO messages (name, email, message)
                VALUES (${name}, ${email}, ${message})
            `;
            console.log('✅ Message saved to Neon DB');
        } catch (dbErr) {
            console.error('⚠️  Failed to save to Neon DB:', dbErr.message);
            // Don't block the response — email still goes out
        }
    }

    // Send email notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: `New Portfolio Message from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
            });
            console.log('✅ Email notification sent');
        } catch (emailErr) {
            console.error('⚠️  Failed to send email:', emailErr.message);
        }
    }

    return res.json({ success: true, message: 'Message sent successfully!' });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'Server is running',
        db: !!process.env.DATABASE_URL
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📄 Visit your portfolio at http://localhost:${PORT}`);
});
