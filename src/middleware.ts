import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  // Redireciona APENAS o domínio raiz de produção da Vercel,
  // não os URLs de preview (que contêm "-git-" ou hashes de deploy)
  if (hostname === "neuroxdigital.vercel.app") {
    const url = request.nextUrl.clone();
    url.hostname = "clean4you.pt";
    url.protocol = "https";
    url.port = "";
    return NextResponse.redirect(url, 308); // 308 = redirect permanente, preserva o método HTTP
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Aplica a todos os pedidos exceto ficheiros estáticos internos do Next.js
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
