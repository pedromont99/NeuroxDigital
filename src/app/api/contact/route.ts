import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, message, services, photos } = body;

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Faltam campos obrigatorios." }, { status: 400 });
    }

    const servicesText = (services || [])
      .map((s: { service: string; m2: string | null }) =>
        s.m2 ? `${s.service} (${s.m2}m2)` : s.service
      )
      .join(", ") || "Nao especificado";

    const htmlContent = `
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;font-family:Arial,Helvetica,sans-serif;background-color:#ffffff;">
        <tr>
          <td style="background-color:#0A0F1E;padding:24px 32px;text-align:center;">
            <img src="https://www.clean4you.pt/images/logo/logo-nav.png" alt="Clean4You" width="140" style="display:block;margin:0 auto;" />
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <h2 style="color:#204AD2;font-size:20px;margin:0 0 24px;">Novo pedido de orçamento</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#1A2540;">
              <tr>
                <td style="padding:6px 0;width:110px;color:#15BDA6;font-weight:bold;">Nome</td>
                <td style="padding:6px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#15BDA6;font-weight:bold;">Telefone</td>
                <td style="padding:6px 0;">${phone}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#15BDA6;font-weight:bold;">Email</td>
                <td style="padding:6px 0;"><a href="mailto:${email}" style="color:#204AD2;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#15BDA6;font-weight:bold;vertical-align:top;">Serviço(s)</td>
                <td style="padding:6px 0;">${servicesText}</td>
              </tr>
            </table>
            <div style="margin-top:20px;padding-top:16px;border-top:1px solid #E8F0FE;">
              <p style="color:#15BDA6;font-weight:bold;font-size:14px;margin:0 0 6px;">Mensagem</p>
              <p style="color:#1A2540;font-size:14px;line-height:1.5;margin:0;">${(message || "Sem mensagem adicional.").replace(/\n/g, "<br/>")}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background-color:#111827;padding:16px 32px;text-align:center;">
            <p style="color:#ffffff;font-size:11px;margin:0;opacity:0.6;">Clean4You &mdash; pedido recebido via clean4you.pt</p>
          </td>
        </tr>
      </table>
    `;

    const attachment = (photos || []).map((p: { name: string; content: string }) => ({
      name: p.name,
      content: p.content,
    }));

    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        sender: { name: "Clean4You", email: "noreply@clean4you.pt" },
        to: [{ email: "geral@clean4you.pt", name: "Clean4You" }],
        replyTo: { email, name },
        subject: `Novo pedido de orcamento - ${name}`,
        htmlContent,
        attachment: attachment.length > 0 ? attachment : undefined,
      }),
    });

    if (!brevoRes.ok) {
      const errData = await brevoRes.json().catch(() => ({}));
      console.error("Brevo error:", errData);
      return NextResponse.json({ error: "Falha ao enviar o email." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
