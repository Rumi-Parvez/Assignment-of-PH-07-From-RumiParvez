"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

function AuthToastContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("reason") === "login-required") {
      toast.error("Please sign in to access this page.", {
        id: "login-required",
      });
    }
  }, [searchParams]);

  return null;
}

export default function AuthToast() {
  return (
    <Suspense fallback={null}>
      <AuthToastContent />
    </Suspense>
  );
}
