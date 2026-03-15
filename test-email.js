require('dotenv').config();
const nodemailer = require('nodemailer');

async function testEmail() {
    console.log('--- Email Credential Test ---');
    console.log('User:', process.env.EMAIL_USER);
    console.log('Pass Length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0, 'chars');

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('❌ Credentials missing in .env');
        return;
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER.trim(),
            pass: process.env.EMAIL_PASS.trim()
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    try {
        console.log('Verifying connection...');
        await transporter.verify();
        console.log('✅ SMTP connection verified successfully!');

        console.log('Sending test email...');
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'Portfolio Test Email',
            text: 'If you receive this, your email configuration is working!'
        });
        console.log('✅ Test email sent successfully!');
    } catch (error) {
        console.error('❌ Test failed:', error.message);
        if (error.responseCode === 535) {
            console.error('\nSUGGESTION: This is an Authentication Error (535).');
            console.error('1. Ensure 2-Step Verification is ON in your Google Account.');
            console.error('2. Generate a NEW App Password: https://myaccount.google.com/apppasswords');
            console.error('3. Make sure you use the 16-character code (no spaces).');
        }
    }
}

testEmail();
