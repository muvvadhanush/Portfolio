const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Track MongoDB connection status
let mongoConnected = false;

// MongoDB Connection String
const mongoURI = 'mongodb+srv://muvvadhanush007_db_user:1M0uBk6O2OvcKjOe@cluster0.1co2px1.mongodb.net/?appName=Cluster0';

// Connect to MongoDB with timeout settings
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 10000,
    retryWrites: true,
})
.then(() => {
    mongoConnected = true;
    console.log('✓ Connected to MongoDB');
})
.catch((err) => {
    mongoConnected = false;
    console.warn('⚠ MongoDB connection warning:', err.message);
    console.warn('ℹ Using local file storage as fallback');
    console.warn('ℹ To fix: Whitelist your IP at https://cloud.mongodb.com → Security → Network Access');
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

// Local file storage for contacts (fallback)
const contactsFilePath = path.join(__dirname, 'contacts.json');

function saveToLocalFile(contactData) {
    try {
        let contacts = [];
        if (fs.existsSync(contactsFilePath)) {
            const fileData = fs.readFileSync(contactsFilePath, 'utf8');
            contacts = JSON.parse(fileData);
        }
        contacts.push({
            ...contactData,
            createdAt: new Date().toISOString(),
            _id: Date.now().toString(),
        });
        fs.writeFileSync(contactsFilePath, JSON.stringify(contacts, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving to local file:', error.message);
        return false;
    }
}

function getLocalContacts() {
    try {
        if (fs.existsSync(contactsFilePath)) {
            const fileData = fs.readFileSync(contactsFilePath, 'utf8');
            return JSON.parse(fileData);
        }
        return [];
    } catch (error) {
        console.error('Error reading local file:', error.message);
        return [];
    }
}

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

        const contactData = { name, email, subject, message };

        // Try MongoDB first, fallback to local file
        if (mongoConnected) {
            try {
                const newContact = new Contact(contactData);
                await newContact.save();
                console.log(`✓ Message saved to MongoDB from ${name} (${email})`);
                
                res.status(201).json({
                    success: true,
                    message: 'Your message has been sent successfully!',
                    data: newContact,
                });
            } catch (mongoError) {
                console.error('MongoDB save error:', mongoError.message);
                // Fall back to local file
                const saved = saveToLocalFile(contactData);
                if (saved) {
                    console.log(`✓ Message saved to local storage from ${name} (${email})`);
                    res.status(201).json({
                        success: true,
                        message: 'Your message has been saved (offline mode)!',
                    });
                } else {
                    throw mongoError;
                }
            }
        } else {
            // Use local file storage
            const saved = saveToLocalFile(contactData);
            if (saved) {
                console.log(`✓ Message saved to local storage from ${name} (${email})`);
                res.status(201).json({
                    success: true,
                    message: 'Your message has been saved (offline mode)!',
                });
            } else {
                throw new Error('Failed to save message');
            }
        }
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
        let contacts = [];

        if (mongoConnected) {
            try {
                contacts = await Contact.find().sort({ createdAt: -1 });
            } catch (error) {
                console.warn('MongoDB fetch error, using local storage:', error.message);
                contacts = getLocalContacts();
            }
        } else {
            contacts = getLocalContacts();
        }

        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts,
            source: mongoConnected ? 'MongoDB' : 'Local Storage',
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
        mongoConnected: mongoConnected,
        storage: mongoConnected ? 'MongoDB' : 'Local File',
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📧 Contact API: POST http://localhost:${PORT}/api/contact`);
    console.log(`💾 Storage: ${mongoConnected ? 'MongoDB' : 'Local File (contacts.json)'}`);
});
