"use client";

import Image from "next/image";
import { toast } from "react-toastify";

import avatar from "../../assets/download (2).jpg";
import { authClient, signOut, useSession } from "../../lib/auth-client";
import ProfilePageLoade from "../loadings/profilepageloade";

const ProfilePage = () => {
<<<<<<< HEAD
  const { data: session, isPending ,refetch  } = useSession();
=======
  const { data: session, isPending, refetch } = useSession();
>>>>>>> restore-profile-page
  if (isPending) {
    return (
      <ProfilePageLoade></ProfilePageLoade>
    );
  }

<<<<<<< HEAD

  const onSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries());
    console.log(data);

    await authClient.updateUser({
    ...data
})
  
    
    await refetch();

    toast.success(`Profile updated successfully!`)
  
}

  return (
    <>
      <div className="flex justify-center items-center py-10 ">
        <div className="w-full">
          <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
          <p className="tex-sm ">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
          <div className="flex justify-between items-center bg-white w-full p-10 rounded-xl mt-5 border border-gray-200">
            <div className=" flex gap-5  items-center">
=======
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries());


    await authClient.updateUser({
      ...data
    })

    await refetch();

    toast.success(`Profile updated successfully!`)

  }

  return (
    <>
      <div className="flex justify-center items-center py-6 sm:py-10 px-3 sm:px-6">
        <div className="w-full min-w-0">
          <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
          <p className="text-sm">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 bg-white w-full p-4 sm:p-6 lg:p-10 rounded-xl mt-5 border border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center min-w-0">
>>>>>>> restore-profile-page
              <Image
                src={avatar}
                alt=""
                width={500}
                height={500}
<<<<<<< HEAD
                className="h-23 w-23 rounded-xl"></Image>
              <div className="space-y-1">
                <h1 className="text-3xl font-bold ">{session?.user.name}</h1>
                <p className="text-sm font-semibold text-gray-500  ">
=======
                className="h-20 w-20 sm:h-23 sm:w-23 rounded-xl shrink-0"
              ></Image>

              <div className="space-y-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl font-bold break-words">
                  {session?.user.name}
                </h1>
                <p className="text-sm font-semibold text-gray-500 break-all">
>>>>>>> restore-profile-page
                  {session?.user.email}
                </p>
              </div>
            </div>

            <button
<<<<<<< HEAD
              onClick={()=> signOut()}
              className="text-xl py-2 px-4 cursor-pointer border border-red-600 text-red-600 rounded-xl font-semibold ">
=======
              onClick={() => signOut()}
              className="text-base sm:text-xl py-2 px-4 cursor-pointer border border-red-600 text-red-600 rounded-xl font-semibold self-start sm:self-auto shrink-0"
            >
>>>>>>> restore-profile-page
              ↩ সাইন আউট
            </button>
          </div>

<<<<<<< HEAD
          <div className="bg-white w-full  mt-10 p-10 rounded-xl border border-gray-200">
            <h1 className="text-2xl font-bold ">তথ্য</h1>
=======
          <div className="bg-white w-full mt-6 sm:mt-10 p-4 sm:p-6 lg:p-10 rounded-xl border border-gray-200">
            <h1 className="text-2xl font-bold">তথ্য</h1>
>>>>>>> restore-profile-page

            <form onSubmit={onSubmit}>
              <div className="mt-5">
                <label
                  htmlFor="name"
<<<<<<< HEAD
                  className="mb-1.5 block text-sm font-semibold text-gray-800 text-sm">
=======
                  className="mb-1.5 block text-sm font-semibold text-gray-800"
                >
>>>>>>> restore-profile-page
                  নাম
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
<<<<<<< HEAD
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none transition text-black "
                />
              </div>
              <button
              type="submit"
              className="w-full rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600 cursor-pointer mt-5"
            >
আপডেট             </button>
=======
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none transition text-black"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600 cursor-pointer mt-5"
              >
                আপডেট
              </button>
>>>>>>> restore-profile-page
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default ProfilePage;
=======
export default ProfilePage;
>>>>>>> restore-profile-page
