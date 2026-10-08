import Image from "next/image";
import Link from "next/link";
import {House} from '@gravity-ui/icons';

import error from "../assets/undraw_page-not-found_6wni.svg";

const NotFound = () => {
  return (
    <div className="min-h-140 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center items-center">
            <Image src={error} alt="404" width={50} height={50} className="flex justify-center items-center h-50 w-50 "></Image>
        </div>

        <h2 className="text-2xl font-semibold mt-4">
          পেজটি পাওয়া যায়নি
        </h2>

        <p className="text-gray-500 mt-2">
          আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
        </p>

        <Link
          href="/"
          className=" flex items-center gap-3 justify-center mt-6 bg-green-600 text-white px-3 py-2 rounded-lg"
        >
          <House className="text-3xl "></House> হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default NotFound;