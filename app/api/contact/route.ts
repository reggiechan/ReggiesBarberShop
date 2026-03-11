import { NextResponse } from "next/server";

// Gmail SMTP configuration would typically use Nodemailer
// For production, you would set up environment variables:
// GMAIL_USER, GMAIL_APP_PASSWORD

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, you would send the email using Nodemailer:
    // 
    // import nodemailer from 'nodemailer';
    // 
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.GMAIL_USER,
    //     pass: process.env.GMAIL_APP_PASSWORD,
    //   },
    // });
    // 
    // await transporter.sendMail({
    //   from: process.env.GMAIL_USER,
    //   to: 'info@gentlemanscut.com',
    //   subject: `[${subject}] New Contact Form Submission from ${name}`,
    //   text: `
    //     Name: ${name}
    //     Email: ${email}
    //     Phone: ${phone || 'Not provided'}
    //     Subject: ${subject}
    //     
    //     Message:
    //     ${message}
    //   `,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <hr />
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // For demo purposes, we'll log the submission and return success
    console.log("Contact form submission:", { name, email, phone, subject, message });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
