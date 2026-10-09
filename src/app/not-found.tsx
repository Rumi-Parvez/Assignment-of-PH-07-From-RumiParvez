import Image from "next/image";
import Link from "next/link";
import { House } from "@gravity-ui/icons";

import error from "../assets/undraw_page-not-found_6wni.svg";

const NotFound = () => {
    return (
        <div className="min-h-140 w-full flex items-center justify-center px-4 sm:px-6 py-8">
            <div className="w-full max-w-xl text-center">
                <div className="flex justify-center items-center">
                    <Image
                        src={error}
                        alt="404"
                        width={50}
                        height={50}
                        className="h-36 w-36 sm:h-44 sm:w-44 lg:h-50 lg:w-50 object-contain"
                    />
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold mt-4">
                    পেজটি পাওয়া যায়নি
                </h2>

                <p className="text-sm sm:text-base text-gray-500 mt-2 px-2">
                    আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
                </p>

                <Link
                    href="/"
                    className="inline-flex flex-wrap items-center gap-2 sm:gap-3 justify-center mt-6 bg-green-600 text-white px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-base"
                >
                    <House className="text-2xl sm:text-3xl" />
                    হোম পেজে ফিরে যান
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
