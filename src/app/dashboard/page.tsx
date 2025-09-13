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
    const u = getUser();
    if (!u) {
      router.replace("/login");
      return;
    }
    setUser(u);
  }, [router]);

  if (!user) return null;

  return (
    <main className="min-h-screen p-4 sm:p-6 bg-gradient-to-tr from-[#FFB6C1] via-[#C480FF] to-[#9D7CFF] flex items-center justify-center">
      <div className="w-full max-w-md sm:max-w-2xl bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-2xl">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
          <Image
            src={user.picture}
            alt={`avatar of ${user.name}`}
            width={80}
            height={80}
            unoptimized
            className="w-24 h-24 rounded-full border-4 border-[#D97CFF]"
          />

          <div className="flex flex-col justify-center items-center sm:items-start">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#9D7CFF] leading-snug text-center">
              <span>
                {user.name} عزیز، خوش اومدی
                <span className="animate-pulse">✨</span>
              </span>
            </h2>
            <p className="text-gray-700/90 mt-1 text-sm sm:text-base">
              {user.email}
            </p>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center sm:justify-end">
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
