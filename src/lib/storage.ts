import { UserData } from "@/types/user";

const KEY = "auth_user_v1";

const isUser = (obj: unknown): obj is UserData => {
  // check each type guard with typeof
  if (!obj || typeof obj !== "object") return false;
  const u = obj as Partial<UserData>;
  return (
    typeof u.name === "string" &&
    typeof u.email === "string" &&
    typeof u.picture === "string"
  );
};

// save user in local storage
export const saveUser = (u: UserData) =>
  localStorage.setItem(KEY, JSON.stringify(u));

// get user from local storage
export const getUser = (): UserData | null => {
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    return isUser(parsed) ? parsed : null;
  } catch {
    return null;
  }
};
// clear user from local storage
export const clearUser = () => localStorage.removeItem(KEY);
