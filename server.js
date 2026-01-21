const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// MongoDB Connection String
const mongoURI = 'mongodb+srv://muvvadhanush007_db_user:1M0uBk6O2OvcKjOe@cluster0.1co2px1.mongodb.net/?appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('✓ Connected to MongoDB');
})
.catch((err) => {
    console.error('✗ MongoDB connection error:', err.message);
    process.exit(1);
});

// Define Contact Message Schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create Contact Model
const Contact = mongoose.model('Contact', contactSchema);

// Routes

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to handle contact form submission
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format',
            });
        }

        // Create new contact document
        const newContact = new Contact({
            name,
            email,
            subject,
            message,
        });

        // Save to MongoDB
        await newContact.save();

        console.log(`✓ Message saved from ${name} (${email})`);

        res.status(201).json({
            success: true,
            message: 'Your message has been sent successfully!',
            data: newContact,
        });
    } catch (error) {
        console.error('Error saving contact message:', error.message);
        res.status(500).json({
            success: false,
            message: 'Error sending message. Please try again later.',
            error: error.message,
        });
    }
});

// API endpoint to get all contact messages (optional, for admin)
app.get('/api/contact/all', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts,
        });
    } catch (error) {
        console.error('Error fetching contacts:', error.message);
        res.status(500).json({
            success: false,
            message: 'Error fetching contacts',
            error: error.message,
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📧 Contact API: POST http://localhost:${PORT}/api/contact`);
});
