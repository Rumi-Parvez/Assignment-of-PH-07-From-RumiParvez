import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo-icon.png";
import Marquee from "./Marquee";
import Navlinks from "./Navlinks";
import SessionNav from "./SessionNav";

const Navbar = () => {
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white">
      <div className="container px-3 sm:px-6 md:px-10 lg:px-20 mx-auto my-4">
        <div className="flex justify-between items-center gap-2">
          <div className="flex gap-2 sm:gap-3 items-center min-w-0">
            <Link href="/">
              <Image
                src={logo}
                width={50}
                height={50}
                alt="Bajar Dor Logo"
                className="bg-green-600 h-10 w-10 px-3 py-3 rounded-xl shrink-0"
              />
            </Link>

            <div className="min-w-0">
              <Link href="/">
                <h1 className="font-bold text-sm md:text-2xl text-black">
                  বাজার দর
                </h1>
              </Link>
              <p className="text-[8px] md:text-xs text-black">{date}</p>
            </div>
          </div>

          <SessionNav />
        </div>

        <div>
          <Navlinks />
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <Marquee />
      </div>
    </div>
  );
};

export default Navbar;
