
import { NextResponse } from "next/server";
import transporter from "@/lib/mailer";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const ALLOWED_TYPES = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/webp",
];

export async function POST(request) {
    try {
        const formData = await request.formData();

        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const country = formData.get("country");
        const message = formData.get("message");
        const file = formData.get("file");

        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Name, email and message are required.",
                },
                { status: 400 }
            );
        }

        let attachments = [];

        if (file && file.size > 0) {
            if (file.size > MAX_FILE_SIZE) {
                return NextResponse.json(
                    {
                        success: false,
                        message: "Attachment must be smaller than 10 MB.",
                    },
                    { status: 400 }
                );
            }

            if (!ALLOWED_TYPES.includes(file.type)) {
                return NextResponse.json(
                    {
                        success: false,
                        message: "Only PDF, JPG, PNG and WEBP files are allowed.",
                    },
                    { status: 400 }
                );
            }

            const buffer = Buffer.from(await file.arrayBuffer());

            attachments.push({
                filename: file.name,
                content: buffer,
                contentType: file.type,
            });
        }

        const mailOptions = {
            from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: "New Contact Form Submission",

            html: `
                <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #292C2E;">
                    <div style="padding: 20px 0; border-bottom: 2px solid #292C2E;">
                        <h2 style="margin: 0;">New Contact Enquiry</h2>
                    </div>

                    <div style="padding: 24px 0;">
                        <p><strong>Name</strong><br>${name}</p>
                        <p><strong>Email</strong><br>${email}</p>
                        <p><strong>Phone</strong><br>${phone || "Not provided"}</p>
                        <p><strong>Country</strong><br>${country || "Not provided"}</p>
                        <p><strong>Message</strong><br>${message}</p>
                    </div>

                    ${file && file.size > 0 ? `
                        <div style="padding: 16px; background: #f5f5f5; border-radius: 8px;">
                            <strong>Attachment</strong><br>
                            📎 ${file.name}
                        </div>
                    ` : ""}
                </div>
            `,

            attachments,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: "Contact form submitted successfully.",
        });

    } catch (error) {
        console.error("CONTACT EMAIL ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to send contact form.",
            },
            { status: 500 }
        );
    }
}
