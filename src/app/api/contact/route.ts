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
      <h2>Novo pedido de orcamento - Clean4You</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Servico(s):</strong> ${servicesText}</p>
      <p><strong>Mensagem:</strong><br/>${(message || "").replace(/\n/g, "<br/>")}</p>
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
