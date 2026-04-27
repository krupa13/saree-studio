type ContactEmailInput = {
  boutiqueName: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function buildContactEmail(input: ContactEmailInput) {
  const submittedAt = input.createdAt.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata"
  });

  return `
  <div style="margin:0;padding:32px;background:#FDF6EC;font-family:Arial,sans-serif;color:#2C2C2C;">
    <div style="max-width:640px;margin:0 auto;border:1px solid rgba(212,175,55,.45);border-radius:18px;overflow:hidden;background:#ffffff;box-shadow:0 18px 45px rgba(116,16,52,.14);">
      <div style="background:#741034;padding:28px 32px;text-align:center;">
        <div style="font-family:Georgia,serif;font-size:34px;font-weight:700;color:#D4AF37;letter-spacing:.02em;">${escapeHtml(input.boutiqueName)}</div>
        <div style="margin-top:8px;color:#FDF6EC;font-size:14px;letter-spacing:.18em;text-transform:uppercase;">New Boutique Enquiry</div>
      </div>
      <div style="padding:30px 32px;">
        <p style="margin:0 0 20px;font-size:16px;line-height:1.7;color:#555;">A customer submitted the contact form on your website.</p>
        <table style="width:100%;border-collapse:collapse;font-size:15px;">
          <tr>
            <td style="padding:12px 0;color:#C2185B;font-weight:700;width:150px;">Full Name</td>
            <td style="padding:12px 0;border-bottom:1px solid #F1E3CD;">${escapeHtml(input.name)}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;color:#C2185B;font-weight:700;">Email</td>
            <td style="padding:12px 0;border-bottom:1px solid #F1E3CD;">${escapeHtml(input.email)}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;color:#C2185B;font-weight:700;">Phone</td>
            <td style="padding:12px 0;border-bottom:1px solid #F1E3CD;">${escapeHtml(input.phone)}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;color:#C2185B;font-weight:700;">Submitted</td>
            <td style="padding:12px 0;border-bottom:1px solid #F1E3CD;">${submittedAt}</td>
          </tr>
        </table>
        <div style="margin-top:24px;padding:20px;border-radius:14px;background:#FFF8EF;border:1px solid rgba(212,175,55,.35);">
          <div style="color:#C2185B;font-weight:700;margin-bottom:10px;">Message</div>
          <div style="white-space:pre-line;line-height:1.75;color:#333;">${escapeHtml(input.message)}</div>
        </div>
      </div>
      <div style="padding:16px 32px;background:#F8D7DA;color:#741034;font-size:13px;text-align:center;">
        Please reply directly to the customer using the email or phone number above.
      </div>
    </div>
  </div>`;
}
