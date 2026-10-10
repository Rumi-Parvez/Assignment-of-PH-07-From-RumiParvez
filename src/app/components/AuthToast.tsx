"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

const AuthToast = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("reason") === "login-required") {
      toast.error("এই পেজটি দেখতে আগে সাইন ইন করুন।");

      router.replace("/signin");
    }
  }, [searchParams, router]);

  return null;
};

export default AuthToast;