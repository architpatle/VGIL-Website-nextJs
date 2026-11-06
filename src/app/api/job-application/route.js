
import { NextResponse } from "next/server";
import transporter from "@/lib/mailer";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 25 * 1024 * 1024;

export async function POST(request) {
    try {
        const formData = await request.formData();

        const jobTitle = formData.get("jobTitle");
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");
        const resume = formData.get("resume");

        if (!jobTitle || !name || !email || !phone || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "All application fields are required.",
                },
                { status: 400 }
            );
        }

        if (!(resume instanceof File) || resume.size === 0) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Resume is required.",
                },
                { status: 400 }
            );
        }

        if (resume.type !== "application/pdf") {
            return NextResponse.json(
                {
                    success: false,
                    message: "Only PDF resumes are allowed.",
                },
                { status: 400 }
            );
        }

        if (resume.size > MAX_FILE_SIZE) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Resume must be smaller than 25MB.",
                },
                { status: 400 }
            );
        }

        const buffer = Buffer.from(await resume.arrayBuffer());

        await transporter.sendMail({
            from: `"Website Job Application" <${process.env.EMAIL_USER}>`,
            to: process.env.JOB_EMAIL_TO,
            replyTo: email,
            subject: `New Job Application - ${jobTitle}`,

            html: `
                <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #292C2E;">
                    <div style="padding: 20px 0; border-bottom: 2px solid #292C2E;">
                        <h2 style="margin: 0;">New Job Application</h2>
                    </div>

                    <div style="padding: 24px 0;">
                        <p><strong>Position</strong><br>${jobTitle}</p>
                        <p><strong>Name</strong><br>${name}</p>
                        <p><strong>Email</strong><br>${email}</p>
                        <p><strong>Phone</strong><br>${phone}</p>
                        <p><strong>Message</strong><br>${message}</p>
                    </div>

                    <div style="padding: 16px; background: #f5f5f5; border-radius: 8px;">
                        <strong>Resume</strong><br>
                        📎 ${resume.name}
                    </div>
                </div>
            `,

            attachments: [
                {
                    filename: resume.name,
                    content: buffer,
                    contentType: "application/pdf",
                },
            ],
        });

        return NextResponse.json({
            success: true,
            message: "Job application submitted successfully.",
        });

    } catch (error) {
        console.error("JOB APPLICATION EMAIL ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to submit job application.",
            },
            { status: 500 }
        );
    }
}
