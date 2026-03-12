import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      serviceId,
      barberId,
      date,
      time,
      name,
      email,
      phone,
      notes,
    } = body;

    if (!serviceId || !barberId || !date || !time || !name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create transporter using Gmail SMTP. Set these in your environment:
    // GMAIL_USER=reggy.chan@gmail.com
    // GMAIL_APP_PASSWORD=<your-app-password>
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const shopEmail = process.env.SHOP_EMAIL || process.env.GMAIL_USER;

    const subject = `Booking Confirmation for ${name} - ${new Date(date).toLocaleDateString()}`;

    const text = `Booking Details:\n\nService: ${serviceId}\nBarber: ${barberId}\nDate: ${new Date(date).toLocaleString()}\nTime: ${time}\n\nCustomer:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nNotes:\n${notes || 'None'}`;

    const html = `
      <h2>Booking Confirmation</h2>
      <p><strong>Service:</strong> ${serviceId}</p>
      <p><strong>Barber:</strong> ${barberId}</p>
      <p><strong>Date:</strong> ${new Date(date).toLocaleString()}</p>
      <p><strong>Time:</strong> ${time}</p>
      <hr />
      <h3>Customer</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Notes:</strong> ${notes || 'None'}</p>
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: `${email}, ${shopEmail}`,
      subject,
      text,
      html,
    });

    console.log("Booking emailed:", { name, email, serviceId, barberId, date, time });

    return NextResponse.json({ success: true, message: "Booking confirmed" }, { status: 200 });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json({ error: "Failed to send booking" }, { status: 500 });
  }
}
