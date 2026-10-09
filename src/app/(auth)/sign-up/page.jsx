"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { toast } from "react-toastify";

import { signIn, signUp} from "../../../lib/auth-client"

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data= Object.fromEntries(formData.entries());
   

    const { data:formdata, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

   

    const password = data.password;

    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;

    if (!emailRegex.test(data.email)) {
      toast.error("Please enter a valid .com email address!");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long!");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter!");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter!");
      return;
    }

    if (!/[0-9]/.test(password)) {
      toast.error("Password must contain at least one number!");
      return;
    }

    if (data.password !== data.confirmPassword) {
      toast.error("Password does not match!");
      return;
    }

   
    toast.success("Form submitted successfully!");

    if (error) {
      toast.error(`${error.message} or Login Please`);
      return;
    }

    toast.success(`Welcome ${formdata.user.name}!`);

    router.push("/");
  };

  const handlecliclgoogleauth = async()=>{

    const data = await signIn.social({
      provider: 'google',
      callbackURL: "/"
    })

    console.log("W8 for Google sign up !", data.name);
  }

  const handlecliclgithubauth = async()=>{

    const data = await signIn.social({
      provider: 'github',
      callbackURL: "/"
    })

    console.log("W8 for GitHub sign up !" , data.name);
  }

  return (
    <main className="min-h-screen px-4 sm:px-6 py-10 sm:py-14 lg:py-15">
      <div className="mx-auto w-full max-w-md">

        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-1 text-sm text-gray-600">
            বিনামূল্যে সাইন আপ করে আমাদের সাথে যোগ দিন
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">

          <form onSubmit={onSubmit} className="space-y-4">

            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-semibold text-gray-800"
              >
                নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="যেমন: রহিম উদ্দিন"
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none transition text-black"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold text-gray-800"
              >
                ইমেইল
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none transition text-black"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-semibold text-gray-800"
              >
                পাসওয়ার্ড
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none transition text-black"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1.5 block text-sm font-semibold text-gray-800"
              >
                পাসওয়ার্ড নিশ্চিত করুন
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="আবার লিখুন"
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none transition text-black"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600 cursor-pointer"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-xs text-gray-500">
              অথবা
            </span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-2">
            <button
              type="button"
              onClick={handlecliclgoogleauth}
              className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs text-gray-800 transition hover:bg-gray-50 font-bold cursor-pointer"
            >
              <FcGoogle />
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              onClick={handlecliclgithubauth}
              className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs text-gray-800 transition hover:bg-gray-50 font-bold cursor-pointer"
            >
              <SiGithub />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-5 text-center text-sm text-gray-600">
            অ্যাকাউন্ট আছে?

            <Link
              href="/sign-in"
              className="font-medium text-green-600 hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>

        <div className="mt-5 text-center">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>

      </div>
    </main>
  );
}