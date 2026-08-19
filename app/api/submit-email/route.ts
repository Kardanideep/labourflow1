import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const GOOGLE_SHEET_WEBHOOK_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL;

// --------------------------------------------------
// Send confirmation email to subscriber
// --------------------------------------------------

async function sendEmail(email: string): Promise<void> {
  console.log("Sending welcome email to subscriber:", email);
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.verify();
    console.log("SMTP connection verified successfully");

    // Plain text version — critical for avoiding spam filters
    const plainText = `Welcome to LabourFlow!

Thank you for joining our waitlist. We're excited to have you with us.

LabourFlow is being built to help labour law consultants manage compliance, clients, and their entire consultancy workflow.

What's coming:
- Smarter compliance management
- Centralized client workspace
- Streamlined consultancy workflows
- Better compliance tracking

We'll notify you when LabourFlow launches.

Best regards,
The LabourFlow Team

Website: https://labourflow.in
${new Date().getFullYear()} LabourFlow - Compliance. Simplified.

If you did not sign up for this, please ignore this email.`;

    const mailResult = await transporter.sendMail({
      from: `"LabourFlow" <${process.env.SMTP_USER}>`,
      replyTo: process.env.SMTP_USER,
      to: email,
      subject: "Welcome to LabourFlow - You're on the Waitlist",
      headers: {
        "List-Unsubscribe": `<mailto:${process.env.SMTP_USER}?subject=Unsubscribe>`,
        Precedence: "bulk",
        "X-Mailer": "LabourFlow Notifications",
      },
      // Plain text version (important for spam filters)
      text: plainText,
      // HTML version
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#333333;">

          <div style="padding:24px;text-align:center;border-bottom:2px solid #128276;">
            <img src="https://labourflow.in/logo2.png" alt="LabourFlow" style="height:70px;width:auto;" />
          </div>

          <div style="padding:32px 24px;">

            <h2 style="color:#0b223f;font-size:20px;margin:0 0 16px;">
              Welcome to LabourFlow
            </h2>

            <p style="font-size:15px;line-height:1.6;margin:0 0 12px;">
              Thank you for joining our waitlist. We're excited to have you with us.
            </p>

            <p style="font-size:15px;line-height:1.6;margin:0 0 20px;">
              LabourFlow is being built to help labour law consultants manage
              compliance, clients, and their entire consultancy workflow.
            </p>

            <div style="border-left:3px solid #128276;padding:12px 16px;margin:20px 0;">
              <p style="color:#128276;font-weight:600;margin:0 0 8px;font-size:14px;">
                What's coming
              </p>
              <ul style="margin:0;padding-left:20px;line-height:1.8;font-size:14px;">
                <li>Smarter compliance management</li>
                <li>Centralized client workspace</li>
                <li>Streamlined consultancy workflows</li>
                <li>Better compliance tracking</li>
              </ul>
            </div>

            <p style="font-size:15px;line-height:1.6;margin:20px 0 12px;">
              We'll notify you when LabourFlow launches.
            </p>

            <p style="color:#0b223f;font-weight:600;margin:20px 0 0;">
              Best regards,<br/>The LabourFlow Team
            </p>

          </div>

          <div style="padding:16px 24px;text-align:center;font-size:11px;color:#999999;border-top:1px solid #eeeeee;">
            <p style="margin:0 0 4px;">
              ${new Date().getFullYear()} LabourFlow - Compliance. Simplified.
            </p>
            <p style="margin:0;">
              You received this email because you signed up at
              <a href="https://labourflow.in" style="color:#128276;">labourflow.in</a>.
            </p>
            <p style="margin:8px 0 0;">
              <a href="mailto:${process.env.SMTP_USER}?subject=Unsubscribe" style="color:#999999;font-size:11px;">
                Unsubscribe
              </a>
            </p>
          </div>

        </div>
      `,
    });

    console.log("=== Welcome Email Send Result ===");
    console.log("MessageId:", mailResult.messageId);
    console.log("Response:", mailResult.response);
    console.log("Accepted:", mailResult.accepted);
    console.log("Rejected:", mailResult.rejected);
    console.log("Email sent successfully to subscriber:", email);
  } catch (error) {
    console.error("Error sending subscriber email:", error);
    throw error;
  }
}

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
      .map(
        (email, index) => `
          <tr>
            <td style="padding:10px;">
              ${index + 1}
            </td>

            <td style="padding:10px;">
              ${email}
            </td>
          </tr>
        `,
      )
      .join("");

    await transporter.sendMail({
      from: process.env.SMTP_USER,

      to: process.env.OWNER_EMAIL || "kardanideep1@gmail.com",

      subject: `LabourFlow Waitlist Update - ${emails.length} Subscribers`,

      html: `
        <div style="
          font-family:Arial,sans-serif;
          max-width:700px;
          margin:auto;
        ">

          <h2 style="color:#0b223f;">
            LabourFlow Waitlist Update
          </h2>

          <p>
            Total subscribers:
            <strong style="color:#128276;">
              ${emails.length}
            </strong>
          </p>

          <table style="
            width:100%;
            border-collapse:collapse;
          ">

            <thead>

              <tr style="
                background:#0b223f;
                color:white;
              ">

                <th style="padding:10px;">
                  #
                </th>

                <th style="padding:10px;text-align:left;">
                  Email Address
                </th>

              </tr>

            </thead>

            <tbody>
              ${emailList}
            </tbody>

          </table>

        </div>
      `,
    });
  } catch (error) {
    console.error("Error sending owner notification:", error);

    // Don't block signup if owner email fails
  }
}

// --------------------------------------------------
// POST /api/submit-email
// --------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { email } = body;

    if (!email || !email.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required",
        },
        {
          status: 400,
        },
      );
    }

    const trimmedEmail = email.trim().toLowerCase();

    // ---------------------------------------------
    // Send email to Google Sheet
    // ---------------------------------------------

    const googleResponse = await fetch(GOOGLE_SHEET_WEBHOOK_URL!, {
      method: "POST",

      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      body: new URLSearchParams({
        email: trimmedEmail,
      }).toString(),
    });

    if (!googleResponse.ok) {
      throw new Error("Google Sheet request failed");
    }

    const googleData = await googleResponse.json();

    if (!googleData.success) {
      return NextResponse.json(
        {
          success: false,
          message: googleData.message || "Unable to save email",
        },
        {
          status: 500,
        },
      );
    }

    const emailExists = googleData.isExisting;

    const updatedEmails = googleData.emails || [];

    // ---------------------------------------------
    // Only send emails for NEW subscribers
    // ---------------------------------------------

    if (!emailExists) {
      try {
        await sendEmail(trimmedEmail);
      } catch (error) {
        console.error("Subscriber email failed:", error);
      }

      try {
        await sendOwnerNotification(updatedEmails);
      } catch (error) {
        console.error("Owner notification failed:", error);
      }
    }

    // ---------------------------------------------
    // Response to frontend
    // ---------------------------------------------

    return NextResponse.json(
      {
        success: true,

        message: emailExists
          ? "Email already on list"
          : "Email added successfully",

        isExisting: emailExists,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}
