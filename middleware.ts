import { AUTH_STORAGE_KEY } from "./src/deck/auth";

export const config = {
  matcher: ["/UX-Masterclass-Deck.pdf", "/takeaways/:path*"],
};

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const cookies = request.headers.get("cookie") ?? "";
  const isAuthed = cookies.includes(`${AUTH_STORAGE_KEY}=1`);

  if (isAuthed) return;

  if (url.pathname.startsWith("/takeaways/") && url.pathname.endsWith(".pdf")) {
    return Response.redirect(`${url.origin}/takeaways`, 302);
  }

  if (url.pathname === "/UX-Masterclass-Deck.pdf") {
    return Response.redirect(`${url.origin}/download-pdf`, 302);
  }
}
