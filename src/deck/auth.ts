export const AUTH_STORAGE_KEY = "uxmc-authenticated";
export const CORRECT_PASSWORD = "Riyadh@ux2026";

export function syncAuthCookie() {
  if (sessionStorage.getItem(AUTH_STORAGE_KEY) === "1") {
    document.cookie = `${AUTH_STORAGE_KEY}=1; path=/; max-age=86400; SameSite=Lax`;
  }
}
