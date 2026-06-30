const nodemailer = require('nodemailer');
const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

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

            // Create table if it doesn't exist yet
            await sql`
                CREATE TABLE IF NOT EXISTS messages (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL,
                    message TEXT NOT NULL,
                    created_at TIMESTAMPTZ DEFAULT NOW()
                )
            `;

            await sql`
                INSERT INTO messages (name, email, message)
                VALUES (${name}, ${email}, ${message})
            `;

            console.log('✅ Message saved to Neon DB');
        } catch (dbError) {
            console.error('⚠️  Neon DB error:', dbError.message);
            // Don't fail the request if only DB save fails
        }
    }

    // Send email notification
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        return res.status(500).json({ success: false, message: 'Email credentials missing on server' });
    }

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
            subject: `Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });

        return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Mail Error:', error);
        return res.status(500).json({ success: false, message: 'Failed to send message: ' + error.message });
    }
};
