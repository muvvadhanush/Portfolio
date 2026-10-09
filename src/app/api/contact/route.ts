import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, message: 'All fields (name, email, message) are required.' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        // 1. Save to Neon PostgreSQL DB
        const dbUrl = process.env.DATABASE_URL;
        if (dbUrl) {
            try {
                const sql = neon(dbUrl);
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
                console.log('✅ Message stored in Neon DB successfully.');
            } catch (dbErr: any) {
                console.error('⚠️ Neon DB insertion error:', dbErr?.message || dbErr);
            }
        } else {
            console.warn('⚠️ DATABASE_URL is missing in environment variables.');
        }

        // 2. Send email notification via Nodemailer
        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;
        if (emailUser && emailPass) {
            try {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: emailUser,
                        pass: emailPass,
                    },
                });

                await transporter.sendMail({
                    from: emailUser,
                    to: emailUser,
                    subject: `New Portfolio Message from ${name}`,
                    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #0f172a; color: #f8fafc;">
                            <h2 style="color: #6ee7f7; margin-top: 0;">New Contact Form Message</h2>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
                            <hr style="border-color: #334155; margin: 16px 0;" />
                            <p><strong>Message:</strong></p>
                            <p style="white-space: pre-wrap; background-color: #1e293b; padding: 14px; border-radius: 8px; color: #cbd5e1;">${message}</p>
                        </div>
                    `,
                });
                console.log('✅ Notification email dispatched via Nodemailer.');
            } catch (emailErr: any) {
                console.error('⚠️ Nodemailer dispatch error:', emailErr?.message || emailErr);
            }
        } else {
            console.warn('⚠️ EMAIL_USER or EMAIL_PASS missing in environment variables.');
        }

        return NextResponse.json({
            success: true,
            message: 'Your message has been sent successfully!',
        });
    } catch (err: any) {
        console.error('❌ Contact API endpoint error:', err);
        return NextResponse.json(
            { success: false, message: 'Server error. Failed to process your message.' },
            { status: 500 }
        );
    }
}
