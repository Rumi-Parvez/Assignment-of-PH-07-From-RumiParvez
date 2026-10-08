import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo-icon.png";
import Marquee from "./Marquee";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="bg-white">
        <div className="container px-20 mx-auto my-4  ">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Link href='/'>
          <Image
            src={logo}
            width={50}
            height={50}
            alt="Bajar Dor Logo"
            className="bg-green-600 h-10 w-10 px-3 py-3 rounded-xl"></Image></Link>
          <div>
            <Link href='/'><h1 className="font-bold text-2xl">বাজার দর</h1></Link>
            <p className="text-xs">{date}</p>
          </div>
          
        </div>
        <div className="flex gap-5 items-center">
            <Link href="/">
              <button className="font-semibold text-sm cursor-pointer">সাইন ইন</button>
            </Link>

            <Link href="/">
              <button className="font-semibold text-sm bg-green-600 text-white px-5 py-2 rounded-[4px] cursor-pointer">
                সাইন আপ
              </button>
            </Link>
          </div>
        
      </div>
      <div >
        <Navlinks></Navlinks>
      </div>
      
      
    </div>
    <div>
        <Marquee></Marquee>
      </div>
    </div>
    
  );
};

export default Navbar;
