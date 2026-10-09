"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosPerson, IoMdArrowDropdown } from "react-icons/io";

import avatar from "../../assets/download (2).jpg";
import { signOut, useSession } from "../../lib/auth-client";

const SessionNav = () => {
  const { data: session, isPending } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  if (isPending) {
    return (
      <div className="h-10 w-24 sm:w-60 rounded-xl border border-green-200 bg-green-100" />
    );
  }

  return (
    <div className="relative shrink-0">
      {session?.user ? (
        <div className="relative">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/profile">
              <Image
                src={avatar}
                width={500}
                height={500}
                alt="Profile"
                className="h-8 w-8 md:h-10 md:w-10 sm:h-13 sm:w-13 rounded-lg object-cover"
              />
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex max-w-32 sm:max-w-none cursor-pointer items-center gap-1 text-sm sm:text-xl font-semibold"
            >
              <span className="truncate text-xs md:text-xl">{session?.user?.name}</span>
              <IoMdArrowDropdown className="shrink-0" />
            </button>
          </div>

          {isOpen && (
            <>
              <button
                type="button"
                aria-label="Close dropdown"
                className="fixed inset-0 z-40 cursor-default"
                onClick={() => setIsOpen(false)}
              />

              <div className="absolute right-0 top-full z-50 mt-3 w-[min(16rem,calc(100vw-1.5rem))] rounded-xl border border-gray-200 bg-white p-3 sm:p-4">
                <h2 className="truncate text-lg sm:text-xl font-semibold text-gray-900">
                  {session?.user?.name}
                </h2>

                <p className="mt-1 truncate text-sm text-gray-500">
                  {session?.user?.email}
                </p>

                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-green-50 flex items-center gap-1"
                >
                  <IoIosPerson className="text-xl" />
                  আমার প্রোফাইল
                </Link>

                <button
                  type="button"
<<<<<<< HEAD
                  onClick={()=>signOut()}
=======
                  onClick={() => signOut()}
>>>>>>> restore-profile-page
                  className="mt-1 w-full rounded-md px-2 py-2 text-left text-sm text-red-600 hover:bg-red-50 cursor-pointer"
                >
                  ↩ সাইন আউট
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2 sm:gap-5">
          <Link
            href="/sign-in"
            className="cursor-pointer text-xs sm:text-sm font-semibold text-black whitespace-nowrap"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="cursor-pointer rounded px-3 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-green-600 whitespace-nowrap"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default SessionNav;
