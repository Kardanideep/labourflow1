import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const EMAIL_FILE_PATH = path.join(process.cwd(), "email.json");

// Function to read emails from JSON file
function readEmails(): string[] {
  try {
    if (!fs.existsSync(EMAIL_FILE_PATH)) {
      fs.writeFileSync(EMAIL_FILE_PATH, JSON.stringify([]));
      return [];
    }
    const data = fs.readFileSync(EMAIL_FILE_PATH, "utf-8");
    return JSON.parse(data || "[]");
  } catch (error) {
    console.error("Error reading emails:", error);
    return [];
  }
}

// Function to save emails to JSON file
function saveEmail(email: string): void {
  try {
    const emails = readEmails();
    if (!emails.includes(email)) {
      emails.push(email);
      fs.writeFileSync(EMAIL_FILE_PATH, JSON.stringify(emails, null, 2));
    }
  } catch (error) {
    console.error("Error saving email:", error);
  }
}

// Function to send email via SMTP
async function sendEmail(email: string): Promise<void> {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Welcome to LabourFlow - You're on the Waitlist!",
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #fbfcfc 0%, #f6faf9 50%, #f4f8f7 100%);">
          
          <!-- Header with Logo -->
          <div style="background-color: #ffffff; padding: 30px 20px; text-align: center; border-bottom: 2px solid #128276;">
            <img src="https://labourflow.in/logo.png" alt="LabourFlow" style="height: 60px; width: auto; display: block; margin: 0 auto 15px;">
            <h1 style="color: #0b223f; font-size: 28px; font-weight: 700; margin: 0; font-family: 'Manrope', sans-serif;">Labour<span style="color: #128276;">Flow</span></h1>
            <p style="color: #128276; font-size: 12px; margin: 8px 0 0; letter-spacing: 2px; font-weight: 600;">COMPLIANCE. SIMPLIFIED.</p>
          </div>

          <!-- Main Content -->
          <div style="background-color: #ffffff; padding: 40px 30px;">
            
            <h2 style="color: #0b223f; font-size: 22px; margin: 0 0 15px 0; font-family: 'Manrope', sans-serif;">Welcome to LabourFlow!</h2>
            
            <p style="color: #4b5563; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
              Hi there,
            </p>

            <p style="color: #4b5563; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
              Thank you for joining our waitlist! We're thrilled to have you on board. LabourFlow is coming soon to transform how labour law consultants manage compliance and clients.
            </p>

            <!-- Feature Highlight -->
            <div style="background: rgba(18, 130, 118, 0.08); border-left: 4px solid #128276; padding: 20px; margin: 30px 0; border-radius: 4px;">
              <p style="color: #128276; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">
                What's Coming:
              </p>
              <ul style="color: #4b5563; font-size: 14px; margin: 0; padding-left: 20px; line-height: 1.8;">
                <li>Streamlined compliance management</li>
                <li>Centralized client workspace</li>
                <li>Automated workflow solutions</li>
                <li>Expert labour law insights</li>
              </ul>
            </div>

            <p style="color: #4b5563; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
              We'll notify you as soon as LabourFlow launches. You'll be among the first to experience the next generation of compliance management.
            </p>

            <p style="color: #4b5563; font-size: 15px; line-height: 1.6; margin: 0 0 30px 0;">
              Stay tuned for updates!
            </p>

            <!-- Signature -->
            <p style="color: #0b223f; font-size: 14px; font-weight: 600; margin: 0;">
              The LabourFlow Team
            </p>

          </div>

          <!-- Footer -->
          <div style="background-color: #0b223f; color: #d1d5db; padding: 25px 30px; text-align: center; font-size: 12px; line-height: 1.6;">
            <p style="margin: 0 0 8px 0; color: #9ca3af;">
              Built for labour law consultants to manage compliance, clients, and their entire consultancy workflow.
            </p>
            <p style="margin: 0; color: #6b7280;">
              © ${new Date().getFullYear()} LabourFlow. All rights reserved.
            </p>
            <p style="margin: 8px 0 0 0; color: #6b7280;">
              <a href="https://labourflow.in" style="color: #128276; text-decoration: none;">labourflow.in</a>
            </p>
          </div>

        </div>
      `,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

// Function to send owner notification with email list
async function sendOwnerNotification(emails: string[]): Promise<void> {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const emailList = emails
      .map((email, index) => `<tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 12px; color: #374151; font-weight: 500;">${index + 1}</td><td style="padding: 12px; color: #374151;">${email}</td></tr>`)
      .join("");

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.OWNER_EMAIL || "kardanideep1@gmail.com",
      subject: `LabourFlow Waitlist Update - ${emails.length} Subscribers`,
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 700px; margin: 0 auto; background: linear-gradient(135deg, #fbfcfc 0%, #f6faf9 50%, #f4f8f7 100%);">
          
          <!-- Header with Logo -->
          <div style="background-color: #ffffff; padding: 30px 20px; text-align: center; border-bottom: 2px solid #128276;">
            <img src="https://labourflow.in/logo.png" alt="LabourFlow" style="height: 60px; width: auto; display: block; margin: 0 auto 15px;">
            <h1 style="color: #0b223f; font-size: 28px; font-weight: 700; margin: 0; font-family: 'Manrope', sans-serif;">Labour<span style="color: #128276;">Flow</span></h1>
            <p style="color: #128276; font-size: 12px; margin: 8px 0 0; letter-spacing: 2px; font-weight: 600;">COMPLIANCE. SIMPLIFIED.</p>
          </div>

          <!-- Main Content -->
          <div style="background-color: #ffffff; padding: 30px;">
            
            <h2 style="color: #0b223f; font-size: 20px; margin: 0 0 10px 0; font-family: 'Manrope', sans-serif;">Waitlist Update</h2>
            
            <p style="color: #718087; font-size: 14px; margin: 0 0 25px 0;">
              New submission received! Total subscribers: <strong style="color: #128276; font-size: 16px;">${emails.length}</strong>
            </p>

            <!-- Stats Box -->
            <div style="background: rgba(18, 130, 118, 0.1); padding: 20px; border-radius: 4px; margin-bottom: 25px; text-align: center; border: 1px solid rgba(18, 130, 118, 0.2);">
              <p style="color: #128276; font-size: 36px; font-weight: 700; margin: 0; font-family: 'Manrope', sans-serif;">
                ${emails.length}
              </p>
              <p style="color: #128276; font-size: 13px; margin: 8px 0 0 0; font-weight: 600;">Total Subscribers</p>
            </div>

            <!-- Table Header -->
            <p style="color: #0b223f; font-size: 14px; font-weight: 600; margin: 0 0 15px 0;">Waitlist:</p>

            <!-- Table -->
            <table style="width: 100%; border-collapse: collapse; background-color: #f7faf9; border: 1px solid rgba(11, 34, 63, 0.1); border-radius: 4px; overflow: hidden;">
              <thead>
                <tr style="background-color: #0b223f; color: white;">
                  <th style="padding: 12px; text-align: left; font-weight: 600; border-bottom: 2px solid #0b223f;">#</th>
                  <th style="padding: 12px; text-align: left; font-weight: 600; border-bottom: 2px solid #0b223f;">Email Address</th>
                </tr>
              </thead>
              <tbody>
                ${emailList}
              </tbody>
            </table>

            <p style="color: #718087; font-size: 12px; margin: 20px 0 0 0; text-align: center;">
              Automated notification from LabourFlow
            </p>

          </div>

          <!-- Footer -->
          <div style="background-color: #0b223f; color: #d1d5db; padding: 20px 30px; text-align: center; font-size: 11px; line-height: 1.6;">
            <p style="margin: 0;">
              © ${new Date().getFullYear()} LabourFlow. All rights reserved.
            </p>
          </div>

        </div>
      `,
    });
  } catch (error) {
    console.error("Error sending owner notification:", error);
    // Don't throw - this shouldn't block the submission
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.trim()) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();
    const existingEmails = readEmails();
    const emailExists = existingEmails.includes(trimmedEmail);

    // Save email to JSON file
    if (!emailExists) {
      saveEmail(trimmedEmail);
    }

    // Get updated emails list after saving
    const updatedEmails = readEmails();

    // Send confirmation email to subscriber (only if new email)
    if (!emailExists) {
      try {
        await sendEmail(trimmedEmail);
      } catch (emailError) {
        console.error("Failed to send email, but email was saved:", emailError);
      }

      // Send owner notification with current list (only for new emails)
      try {
        await sendOwnerNotification(updatedEmails);
      } catch (ownerEmailError) {
        console.error("Failed to send owner notification:", ownerEmailError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: emailExists ? "Email already on list" : "Email added successfully",
        isExisting: emailExists,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
