import { UserData } from "@/types/user";

export async function fetchRandomUser(): Promise<UserData> {
  const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
  if (!res.ok) throw new Error("fetch failed");
  const json = await res.json();
  const r = json.results[0];
  return {
    name: `${r.name.first} ${r.name.last}`,
    email: r.email,
    picture: r.picture.large,
  };
}
