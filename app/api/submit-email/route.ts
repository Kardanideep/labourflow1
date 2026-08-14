import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const GOOGLE_SHEET_WEBHOOK_URL =
  process.env.GOOGLE_SHEET_WEBHOOK_URL;


// --------------------------------------------------
// Send confirmation email to subscriber
// --------------------------------------------------

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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">

          <div style="
            background:#ffffff;
            padding:30px 20px;
            text-align:center;
            border-bottom:2px solid #128276;
          ">
            <img
              src="https://labourflow.in/logo.png"
              alt="LabourFlow"
              style="height:60px;width:auto;"
            />

            <h1 style="
              color:#0b223f;
              font-size:28px;
              margin:15px 0 0;
            ">
              Labour<span style="color:#128276;">Flow</span>
            </h1>

            <p style="
              color:#128276;
              font-size:12px;
              letter-spacing:2px;
              font-weight:600;
            ">
              COMPLIANCE. SIMPLIFIED.
            </p>
          </div>

          <div style="
            background:#ffffff;
            padding:40px 30px;
          ">

            <h2 style="color:#0b223f;">
              Welcome to LabourFlow!
            </h2>

            <p style="
              color:#4b5563;
              font-size:15px;
              line-height:1.6;
            ">
              Thank you for joining our waitlist.
              We're excited to have you with us.
            </p>

            <p style="
              color:#4b5563;
              font-size:15px;
              line-height:1.6;
            ">
              LabourFlow is being built to help labour law
              consultants manage compliance, clients, and
              their entire consultancy workflow.
            </p>

            <div style="
              background:rgba(18,130,118,0.08);
              border-left:4px solid #128276;
              padding:20px;
              margin:30px 0;
            ">
              <strong style="color:#128276;">
                What's coming
              </strong>

              <ul style="
                color:#4b5563;
                line-height:1.8;
              ">
                <li>Smarter compliance management</li>
                <li>Centralized client workspace</li>
                <li>Streamlined consultancy workflows</li>
                <li>Better compliance tracking</li>
              </ul>
            </div>

            <p style="
              color:#4b5563;
              font-size:15px;
              line-height:1.6;
            ">
              We'll notify you when LabourFlow launches.
            </p>

            <p style="
              color:#0b223f;
              font-weight:600;
            ">
              The LabourFlow Team
            </p>

          </div>

          <div style="
            background:#0b223f;
            color:#9ca3af;
            padding:25px 30px;
            text-align:center;
            font-size:12px;
          ">
            COMPLIANCE. SIMPLIFIED.<br />
            © ${new Date().getFullYear()} LabourFlow
          </div>

        </div>
      `,
    });

  } catch (error) {
    console.error("Error sending subscriber email:", error);
    throw error;
  }
}


// --------------------------------------------------
// Send owner notification
// --------------------------------------------------

async function sendOwnerNotification(
  emails: string[]
): Promise<void> {

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
        `
      )
      .join("");

    await transporter.sendMail({

      from: process.env.SMTP_USER,

      to:
        process.env.OWNER_EMAIL ||
        "kardanideep1@gmail.com",

      subject:
        `LabourFlow Waitlist Update - ${emails.length} Subscribers`,

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

    console.error(
      "Error sending owner notification:",
      error
    );

    // Don't block signup if owner email fails
  }
}


// --------------------------------------------------
// POST /api/submit-email
// --------------------------------------------------

export async function POST(
  request: NextRequest
) {

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
        }
      );

    }

    const trimmedEmail =
      email.trim().toLowerCase();


    // ---------------------------------------------
    // Send email to Google Sheet
    // ---------------------------------------------

    const googleResponse = await fetch(
      GOOGLE_SHEET_WEBHOOK_URL!,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },

        body:
          new URLSearchParams({
            email: trimmedEmail,
          }).toString(),
      }
    );


    if (!googleResponse.ok) {

      throw new Error(
        "Google Sheet request failed"
      );

    }


    const googleData =
      await googleResponse.json();


    if (!googleData.success) {

      return NextResponse.json(
        {
          success: false,
          message:
            googleData.message ||
            "Unable to save email",
        },
        {
          status: 500,
        }
      );

    }


    const emailExists =
      googleData.isExisting;


    const updatedEmails =
      googleData.emails || [];


    // ---------------------------------------------
    // Only send emails for NEW subscribers
    // ---------------------------------------------

    if (!emailExists) {

      try {

        await sendEmail(trimmedEmail);

      } catch (error) {

        console.error(
          "Subscriber email failed:",
          error
        );

      }


      try {

        await sendOwnerNotification(
          updatedEmails
        );

      } catch (error) {

        console.error(
          "Owner notification failed:",
          error
        );

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
      }
    );

  } catch (error) {

    console.error(
      "API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );

  }
}