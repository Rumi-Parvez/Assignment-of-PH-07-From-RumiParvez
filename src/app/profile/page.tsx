"use client";

import Image from "next/image";

import avatar from "../../assets/download (2).jpg";
import { signOut, useSession } from "../../lib/auth-client";
import ProfilePageLoade from "../loadings/profilepageloade";

const ProfilePage = () => {
  const { data: session, isPending } = useSession();
  if (isPending) {
    return (
      <ProfilePageLoade></ProfilePageLoade>
    );
  }
  return (
    <>
      <div className="flex justify-center items-center py-10 ">
        <div className="w-full">
          <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
          <p className="tex-sm ">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
          <div className="flex justify-between items-center bg-white w-full p-10 rounded-xl mt-5 border border-gray-200">
            <div className=" flex gap-5  items-center">
              <Image
                src={avatar}
                alt=""
                width={500}
                height={500}
                className="h-23 w-23 rounded-xl"></Image>
              <div className="space-y-1">
                <h1 className="text-3xl font-bold ">{session?.user.name}</h1>
                <p className="text-sm font-semibold text-gray-500  ">
                  {session?.user.email}
                </p>
              </div>
            </div>

            <button
              onClick={()=> signOut}
              className="text-xl py-2 px-4 cursor-pointer border border-red-600 text-red-600 rounded-xl font-semibold ">
              ↩ সাইন আউট
            </button>
          </div>

          <div className="bg-white w-full  mt-10 p-10 rounded-xl border border-gray-200">
            <h1 className="text-2xl font-bold ">তথ্য</h1>

            <form>
              <div className="mt-5">
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-semibold text-gray-800 text-sm">
                  নাম
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none transition text-black "
                />
              </div>
              <button
              type="submit"
              className="w-full rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600 cursor-pointer mt-5"
            >
আপডেট             </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
