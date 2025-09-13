"use client";

import { clearUser, getUser } from "@/lib/storage";
import { useEffect, useState } from "react";

import Image from "next/image";
import { UserData } from "@/types/user";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    // check if there is no user redirect to login page 
    const u = getUser();
    if (!u) {
      router.replace("/login");
      return;
    }
    setUser(u);
  }, [router]);

  if (!user) return null;

  return (
    <main className="min-h-screen p-6 bg-gradient-to-tr from-[#FFB6C1] via-[#C480FF] to-[#9D7CFF] flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl">
        <div className="flex items-center gap-6">
          <Image
            src={user.picture}
            alt={`avatar of ${user.name}`}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full border-4 border-[#D97CFF]"
          />
          <div>
            <h2 className="text-2xl font-extrabold text-[#9D7CFF] leading-snug flex items-center gap-2">
              {user.name} عزیز، خوش اومدی
              <span className="text-2xl animate-pulse">✨</span>
            </h2>{" "}
            <p className="text-gray-700/90 mt-2">{user.email}</p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={() => {
              clearUser();
              router.push("/login");
            }}
            className="px-6 py-2 bg-gradient-to-r from-[#C480FF] to-[#B06CFF] hover:from-[#D397FF] hover:to-[#9B70FF] text-white rounded-xl shadow-lg transition-colors duration-200 font-semibold"
          >
            خروج از حساب کاربری
          </button>
        </div>
      </div>
    </main>
  );
}
