
import { NextResponse } from "next/server";
import transporter from "@/lib/mailer";

export const runtime = "nodejs";

const allowedBrochures = {
    "core-banking-solution": "Core Banking Solution",
    "imis-solution": "IMIS Solution",
    "digital-payments": "Digital Payments",
    "end-to-end-cyber-security": "End-to-End Cyber Security",
};

function escapeHtml(value = "") {
    return String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    })[char]);
}

export async function POST(request) {
    try {
        const {
            productSlug,
            name,
            email,
            phone,
            city,
        } = await request.json();

        // Validate product
        if (!allowedBrochures[productSlug]) {
            return NextResponse.json(
                { success: false, message: "Invalid brochure request." },
                { status: 400 }
            );
        }

        // Required fields
        if (!name?.trim() || !email?.trim() || !phone?.trim()) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Name, email and phone number are required.",
                },
                { status: 400 }
            );
        }

        const verifiedProductTitle = allowedBrochures[productSlug];

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.BROCHURE_EMAIL_TO,
            replyTo: email,
            subject: `New Brochure Request - ${verifiedProductTitle}`,

            html: `
                <h2>New Brochure Download Request</h2>

                <p><strong>Product:</strong> ${verifiedProductTitle}</p>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
                <p><strong>City:</strong> ${escapeHtml(city || "Not provided")}</p>
            `,
        });

        return NextResponse.json({
            success: true,
            message: "Brochure request submitted successfully.",
        });

    } catch (error) {
        console.error("BROCHURE EMAIL ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to process brochure request.",
            },
            { status: 500 }
        );
    }
}
