import { AUTH_STORAGE_KEY } from "./src/deck/auth";

export const config = {
  matcher: ["/UX-Masterclass-Deck.pdf"],
};

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const cookies = request.headers.get("cookie") ?? "";
  const isAuthed = cookies.includes(`${AUTH_STORAGE_KEY}=1`);

  if (!isAuthed) {
    return Response.redirect(`${url.origin}/download-pdf`, 302);
  }
}
