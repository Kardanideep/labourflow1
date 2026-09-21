import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const notificationRecipient = "labourflow01@gmail.com";

/* =========================================================
   LABOURFLOW BRAND THEME
========================================================= */

const COLORS = {
  navy: "#0B223F",
  teal: "#128276",

  // Light brand backgrounds
  mint: "#EAF7F4",
  softMint: "#DFF4EF",
  paleMint: "#F3FAF8",

  // Text
  text: "#526173",
  muted: "#64748B",

  // Borders
  border: "#DCE9E5",
  lightBorder: "#EEF4F2",

  // Backgrounds
  background: "#F5F9F8",
  white: "#FFFFFF",
};

/* =========================================================
   POST
========================================================= */

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";

    const email = typeof body.email === "string" ? body.email.trim() : "";

    const phone = typeof body.phone === "string" ? body.phone.trim() : "";

    /* ---------------- Validation ---------------- */

    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and phone are required.",
        },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 },
      );
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid 10-digit phone number.",
        },
        { status: 400 },
      );
    }

    /* ---------------- SMTP ---------------- */

    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;

    if (!smtpUser || !smtpPassword) {
      console.error("SMTP_USER and SMTP_PASSWORD must be configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    /* =====================================================
       EMAIL TO USER
    ===================================================== */

    await transporter.sendMail({
      from: `"LabourFlow" <${smtpUser}>`,
      to: email,

      subject: "You're on the list | LabourFlow launch updates",

      text: `Hi ${name},

Thank you for joining the LabourFlow launch list.

We will keep you informed about launch access and product updates.

Regards,
The LabourFlow Team`,

      html: welcomeEmailHtml(name),
    });

    /* =====================================================
       EMAIL TO LABOURFLOW
    ===================================================== */

    await transporter.sendMail({
      from: `"LabourFlow" <${smtpUser}>`,
      to: notificationRecipient,

      subject: `New LabourFlow launch request | ${name}`,

      text: `A new LabourFlow launch update request was submitted.

Name: ${name}
Email: ${email}
Phone: +91 ${phone}`,

      html: notificationEmailHtml(name, email, phone),

      replyTo: email,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Unable to send LabourFlow emails:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your request right now. Please try again.",
      },
      { status: 500 },
    );
  }
}

/* =========================================================
   WELCOME EMAIL
========================================================= */

function welcomeEmailHtml(name: string) {
  return emailShell(`
    
    <!-- HERO -->

    <tr>
      <td
        style="
          padding:42px 40px 36px;
          background:${COLORS.mint};
          border-bottom:1px solid ${COLORS.border};
        "
      >

        <!-- Eyebrow -->

        <span
          style="
            display:inline-block;
            padding:7px 11px;
            border-radius:999px;
            background:${COLORS.navy};
            color:#FFFFFF;
            font-size:10px;
            font-weight:800;
            letter-spacing:1.3px;
            text-transform:uppercase;
          "
        >
          REQUEST CONFIRMED
        </span>

        <!-- Heading -->

        <h1
          style="
            margin:20px 0 12px;
            color:${COLORS.navy};
            font-size:32px;
            line-height:1.12;
            letter-spacing:-.8px;
            font-weight:800;
          "
        >
          Welcome to LabourFlow,
          ${escapeHtml(name)}.
        </h1>

        <!-- Description -->

        <p
          style="
            margin:0;
            color:${COLORS.text};
            font-size:16px;
            line-height:1.7;
          "
        >
          You are now on the list for LabourFlow launch
          updates — the connected platform built for
          labour law consultants managing multiple clients.
        </p>

      </td>
    </tr>


    <!-- INTRO -->

    <tr>
      <td
        style="
          padding:34px 40px 10px;
        "
      >

        <p
          style="
            margin:0;
            color:${COLORS.navy};
            font-size:20px;
            line-height:1.4;
            font-weight:800;
          "
        >
          One connected platform for your consultancy.
        </p>

        <p
          style="
            margin:8px 0 0;
            color:${COLORS.text};
            font-size:14px;
            line-height:1.65;
          "
        >
          LabourFlow brings clients, compliance, payroll,
          documents and recurring consultancy work together.
        </p>

      </td>
    </tr>


    <!-- FEATURES -->

    <tr>
      <td
        style="
          padding:20px 40px 8px;
        "
      >

        <table
          role="presentation"
          width="100%"
          cellpadding="0"
          cellspacing="0"
          style="
            border-collapse:separate;
            border-spacing:0 10px;
          "
        >

          <!-- 01 -->

          <tr>

            <td
              style="
                width:42px;
                padding:14px 0 14px 14px;
                background:${COLORS.paleMint};
                border-radius:12px 0 0 12px;
                color:${COLORS.teal};
                font-size:17px;
                font-weight:800;
                border-top:1px solid ${COLORS.border};
                border-bottom:1px solid ${COLORS.border};
                border-left:1px solid ${COLORS.border};
              "
            >
              01
            </td>

            <td
              style="
                padding:14px;
                background:${COLORS.paleMint};
                border-radius:0 12px 12px 0;
                border-top:1px solid ${COLORS.border};
                border-bottom:1px solid ${COLORS.border};
                border-right:1px solid ${COLORS.border};
              "
            >

              <div
                style="
                  color:${COLORS.navy};
                  font-size:14px;
                  font-weight:800;
                "
              >
                Client & compliance management
              </div>

              <div
                style="
                  margin-top:4px;
                  color:${COLORS.text};
                  font-size:13px;
                  line-height:1.5;
                "
              >
                Keep clients, compliance work,
                documents and deadlines organized.
              </div>

            </td>

          </tr>


          <!-- 02 -->

          <tr>

            <td
              style="
                width:42px;
                padding:14px 0 14px 14px;
                background:${COLORS.paleMint};
                border-radius:12px 0 0 12px;
                color:${COLORS.teal};
                font-size:17px;
                font-weight:800;
                border-top:1px solid ${COLORS.border};
                border-bottom:1px solid ${COLORS.border};
                border-left:1px solid ${COLORS.border};
              "
            >
              02
            </td>

            <td
              style="
                padding:14px;
                background:${COLORS.paleMint};
                border-radius:0 12px 12px 0;
                border-top:1px solid ${COLORS.border};
                border-bottom:1px solid ${COLORS.border};
                border-right:1px solid ${COLORS.border};
              "
            >

              <div
                style="
                  color:${COLORS.navy};
                  font-size:14px;
                  font-weight:800;
                "
              >
                Payroll & statutory work
              </div>

              <div
                style="
                  margin-top:4px;
                  color:${COLORS.text};
                  font-size:13px;
                  line-height:1.5;
                "
              >
                Process attendance, payroll and
                statutory calculations in one workflow.
              </div>

            </td>

          </tr>


          <!-- 03 -->

          <tr>

            <td
              style="
                width:42px;
                padding:14px 0 14px 14px;
                background:${COLORS.paleMint};
                border-radius:12px 0 0 12px;
                color:${COLORS.teal};
                font-size:17px;
                font-weight:800;
                border-top:1px solid ${COLORS.border};
                border-bottom:1px solid ${COLORS.border};
                border-left:1px solid ${COLORS.border};
              "
            >
              03
            </td>

            <td
              style="
                padding:14px;
                background:${COLORS.paleMint};
                border-radius:0 12px 12px 0;
                border-top:1px solid ${COLORS.border};
                border-bottom:1px solid ${COLORS.border};
                border-right:1px solid ${COLORS.border};
              "
            >

              <div
                style="
                  color:${COLORS.navy};
                  font-size:14px;
                  font-weight:800;
                "
              >
                Launch access & updates
              </div>

              <div
                style="
                  margin-top:4px;
                  color:${COLORS.text};
                  font-size:13px;
                  line-height:1.5;
                "
              >
                Be among the first to know when
                LabourFlow becomes available.
              </div>

            </td>

          </tr>

        </table>

      </td>
    </tr>


    <!-- CTA -->

    <tr>
      <td
        style="
          padding:26px 40px 12px;
        "
      >

        <div
          style="
            padding:22px;
            border-radius:14px;
            background:${COLORS.navy};
          "
        >

          <div
            style="
              color:${COLORS.softMint};
              font-size:11px;
              font-weight:800;
              letter-spacing:1.2px;
              text-transform:uppercase;
            "
          >
            COMPLIANCE. SIMPLIFIED.
          </div>

          <div
            style="
              margin-top:7px;
              color:#FFFFFF;
              font-size:18px;
              font-weight:800;
              line-height:1.4;
            "
          >
            Manage every client in one place.
          </div>

          <div
            style="
              margin-top:5px;
              color:#C8D7E2;
              font-size:13px;
              line-height:1.5;
            "
          >
            One connected workspace for your
            labour consultancy.
          </div>

        </div>

      </td>
    </tr>


    <!-- FOOTER MESSAGE -->

    <tr>

      <td
        style="
          padding:20px 40px 38px;
        "
      >

        <div
          style="
            border-top:1px solid ${COLORS.lightBorder};
            padding-top:22px;
            color:${COLORS.text};
            font-size:14px;
            line-height:1.6;
          "
        >

          We will keep your inbox useful and occasional.
          <br />

          <strong style="color:${COLORS.text};">
            Team
            <span style="color:${COLORS.text};">
              LabourFlow
            </span>
          </strong>

        </div>

      </td>

    </tr>

  `);
}

/* =========================================================
   ADMIN / NOTIFICATION EMAIL
========================================================= */

function notificationEmailHtml(name: string, email: string, phone: string) {
  return emailShell(`

    <!-- HEADER -->

    <tr>

      <td
        style="
          padding:36px 40px;
          background:${COLORS.navy};
        "
      >

        <span
          style="
            display:inline-block;
            padding:7px 11px;
            border-radius:999px;
            background:${COLORS.teal};
            color:#FFFFFF;
            font-size:10px;
            font-weight:800;
            letter-spacing:1.3px;
            text-transform:uppercase;
          "
        >
          NEW LAUNCH REQUEST
        </span>

        <h1
          style="
            margin:18px 0 8px;
            color:#FFFFFF;
            font-size:30px;
            line-height:1.15;
            letter-spacing:-.6px;
            font-weight:800;
          "
        >
          A new lead is ready.
        </h1>

        <p
          style="
            margin:0;
            color:${COLORS.softMint};
            font-size:14px;
            line-height:1.6;
          "
        >
          Someone requested LabourFlow launch updates.
        </p>

      </td>

    </tr>


    <!-- DETAILS -->

    <tr>

      <td
        style="
          padding:32px 40px 20px;
        "
      >

        <p
          style="
            margin:0 0 16px;
            color:${COLORS.navy};
            font-size:18px;
            font-weight:800;
          "
        >
          Lead details
        </p>

        <table
          role="presentation"
          width="100%"
          cellpadding="0"
          cellspacing="0"
          style="
            border-collapse:collapse;
            border:1px solid ${COLORS.border};
            border-radius:14px;
            overflow:hidden;
          "
        >

          <!-- NAME -->

          <tr>

            <td
              style="
                padding:14px 16px;
                background:${COLORS.paleMint};
                color:${COLORS.muted};
                font-size:11px;
                font-weight:800;
                letter-spacing:1.1px;
                text-transform:uppercase;
                width:32%;
              "
            >
              Name
            </td>

            <td
              style="
                padding:14px 16px;
                color:${COLORS.navy};
                font-size:15px;
                font-weight:700;
              "
            >
              ${escapeHtml(name)}
            </td>

          </tr>


          <!-- EMAIL -->

          <tr>

            <td
              style="
                padding:14px 16px;
                background:${COLORS.paleMint};
                color:${COLORS.muted};
                font-size:11px;
                font-weight:800;
                letter-spacing:1.1px;
                text-transform:uppercase;
              "
            >
              Email
            </td>

            <td
              style="
                padding:14px 16px;
                font-size:15px;
              "
            >

              <a
                href="mailto:${escapeHtml(email)}"
                style="
                  color:${COLORS.teal};
                  font-weight:700;
                  text-decoration:none;
                "
              >
                ${escapeHtml(email)}
              </a>

            </td>

          </tr>


          <!-- PHONE -->

          <tr>

            <td
              style="
                padding:14px 16px;
                background:${COLORS.paleMint};
                color:${COLORS.muted};
                font-size:11px;
                font-weight:800;
                letter-spacing:1.1px;
                text-transform:uppercase;
              "
            >
              Phone
            </td>

            <td
              style="
                padding:14px 16px;
                font-size:15px;
              "
            >

              <a
                href="tel:+91${escapeHtml(phone)}"
                style="
                  color:${COLORS.teal};
                  font-weight:700;
                  text-decoration:none;
                "
              >
                +91 ${escapeHtml(phone)}
              </a>

            </td>

          </tr>

        </table>


        <!-- REPLY -->

        <div
          style="
            margin-top:20px;
            padding:17px 18px;
            border-radius:12px;
            background:${COLORS.mint};
            border:1px solid ${COLORS.border};
            color:#0B665D;
            font-size:13px;
            line-height:1.5;
          "
        >
          Reply to this email to contact
          <strong>${escapeHtml(name)}</strong> directly.
        </div>

      </td>

    </tr>

  `);
}

/* =========================================================
   EMAIL SHELL
========================================================= */

function emailShell(...rows: string[]) {
  return `
<!doctype html>

<html>

<head>

  <meta charset="utf-8" />

  <meta
    name="viewport"
    content="width=device-width,initial-scale=1"
  />

  <meta
    name="color-scheme"
    content="light"
  />

  <title>LabourFlow</title>

</head>


<body
  style="
    margin:0;
    padding:0;
    background:white;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Arial,
      sans-serif;
    color:${COLORS.navy};
  "
>

  <div
    style="
      padding:30px 14px;
    "
  >

    <div
      style="
        max-width:600px;
        margin:0 auto;
        background:${COLORS.white};
        border-radius:18px;
        overflow:hidden;
        border:1px solid ${COLORS.border};
        box-shadow:0 12px 35px rgba(11,34,63,.07);
      "
    >


      <!-- EMAIL HEADER -->

      <table
        role="presentation"
        width="100%"
        cellpadding="0"
        cellspacing="0"
        style="
          border-collapse:collapse;
        "
      >

        <tr>

          <td
            style="
              padding:20px 40px;
              border-bottom:1px solid ${COLORS.lightBorder};
              background:#FFFFFF;
            "
          >

            <table
              role="presentation"
              width="100%"
              cellpadding="0"
              cellspacing="0"
              style="
                border-collapse:collapse;
              "
            >

              <tr>

                <!-- BRAND -->

                <td>
  <div
    style="
      display:flex;
      align-items:center;
      gap:1px;
    "
  >
    <img
      src="https://www.labourflow.in/logo.png"
      alt="LabourFlow"
      width="38"
      height="38"
      style="
        display:block;
        width:38px;
        height:38px;
        object-fit:contain;
      "
    />

    <div>
      <span
        style="
          color:${COLORS.navy};
          font-size:24px;
          font-weight:800;
          letter-spacing:-.4px;
        "
      >
        Labour<span style="color:${COLORS.teal};">Flow</span>
      </span>

      <div
        style="
          margin-top:2px;
          color:${COLORS.muted};
          font-size:8px;
          font-weight:800;
          letter-spacing:1.4px;
        "
      >
        COMPLIANCE. SIMPLIFIED.
      </div>
    </div>
  </div>
</td>


                <!-- BRAND TAG -->

                <td
                  style="
                    text-align:right;
                    vertical-align:middle;
                  "
                >

                </td>

              </tr>

            </table>

          </td>

        </tr>

      </table>


      <!-- MAIN CONTENT -->

      <table
        role="presentation"
        width="100%"
        cellpadding="0"
        cellspacing="0"
        style="
          border-collapse:collapse;
        "
      >

        ${rows.join("")}

      </table>


      <!-- FOOTER -->

      <table
        role="presentation"
        width="100%"
        cellpadding="0"
        cellspacing="0"
        style="
          border-collapse:collapse;
          border-top:1px solid ${COLORS.lightBorder};
        "
      >

        <tr>

          <td
            style="
              padding:22px 40px;
              background:#FAFCFB;
              color:#94A3B8;
              font-size:12px;
              line-height:1.6;
            "
          >

            <strong
              style="
                color:${COLORS.navy};
              "
            >
              Labour<span style="color:${COLORS.teal};">
                Flow
              </span>
            </strong>

            &nbsp;|&nbsp; labourflow.in

            <br />

            Built for Indian labour consultants.

          </td>

        </tr>

      </table>

    </div>


    <!-- EMAIL DISCLAIMER -->

    <p
      style="
        max-width:600px;
        margin:16px auto 0;
        text-align:center;
        color:#94A3B8;
        font-size:11px;
        line-height:1.5;
      "
    >
      You are receiving this because you requested
      LabourFlow launch updates.
    </p>

  </div>

</body>

</html>
`;
}

/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character];
  });
}
