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
      <div className="h-10 w-60 rounded-xl border border-green-200 bg-green-100" />
    );
  }

  

  return (
    <div className="relative">
      {session?.user ? (
        <div className="relative">
          <div className="flex items-center gap-3">
            <Link href='/profile'><Image
              src={avatar}
              width={500}
              height={500}
              alt="Profile"
              className="h-13 w-13 rounded-lg object-cover"
            ></Image></Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer items-center gap-1 text-xl font-semibold"
            >
              {session?.user?.name}
              <IoMdArrowDropdown />
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

              <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-xl border border-gray-200 bg-white p-4 ">
                <h2 className="truncate text-xl font-semibold text-gray-900">
                  {session?.user?.name}
                </h2>

                <p className="mt-1 truncate text-sm text-gray-500">
                  {session?.user?.email}
                </p>


                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className=" rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-green-50 flex  items-center gap-1"
                >
                  <IoIosPerson className="text-xl "/>
 আমার প্রোফাইল
                </Link>

                <button
                  type="button"
                  onClick={()=>signOut()}
                  className="mt-1 w-full rounded-md px-2 py-2 text-left text-sm text-red-600 hover:bg-red-50 cursor-pointer"
                >
                  ↩ সাইন আউট
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <Link
            href="/sign-in"
            className="cursor-pointer text-sm font-semibold text-black"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="cursor-pointer rounded px-5 py-2 text-sm font-semibold text-white bg-green-600"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default SessionNav;
