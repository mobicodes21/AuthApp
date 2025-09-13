"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { fetchRandomUser } from "@/lib/api";
import { isValidIranianPhone } from "@/lib/phone";
import { saveUser } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    // check if phone is valid in defined formats
    if (!isValidIranianPhone(phone)) {
      setError("شماره تماس وارد شده معتبر نیست.");
      return;
    }

    try {
      setLoading(true);
      const user = await fetchRandomUser();
      saveUser(user);
      router.push("/dashboard");
    } catch {
      setError("خطا در ارتباط با سرور. دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center
        bg-gradient-to-tr from-[#F178B6] via-[#C480FF] to-[#9B70FF] p-6"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/90 backdrop-blur-sm
          p-9 rounded-2xl shadow-xl"
      >
        <h1 className="text-3xl font-extrabold text-center mb-6 text-[#9D7CFF]">
          ورود با موبایل
        </h1>

        <Input
          id="phone"
          label="شماره تماس"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="09xxxxxxxxx"
          inputMode="tel"
          error={error ?? undefined}
        />
        <p className="text-xs text-gray-500 mt-1">
          فرمت‌های مجاز: 09xxxxxxxxx | +989xxxxxxxxx | 00989xxxxxxxxx
        </p>

        <div className="mt-6">
          <Button type="submit" isLoading={loading}>
            ورود
          </Button>
        </div>
      </form>
    </main>
  );
}
