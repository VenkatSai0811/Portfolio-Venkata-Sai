"use server"

import { Resend } from "resend"

const resendApiKey = process.env.RESEND_API_KEY

if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in the environment variables")
}

const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function sendEmail(formData: FormData) {
  if (!resend) {
    console.error("Resend client is not initialized due to missing API key")
    return { success: false, error: "Email service is not configured properly" }
  }

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Construct email content
  const emailContent = `
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "vs1789966@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      reply_to: email,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: error.message }
    }

    console.log("Email sent successfully:", data)
    return { success: true }
  } catch (error) {
    console.error("Unexpected error sending email:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

