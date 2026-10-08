import Image from "next/image";
import Link from "next/link";

import hero from '../../assets/bazar-hero.png'

const Hero = () => {
    const currentDate = new Date();
  const date = currentDate.toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
    return (
        <div >
      <div className="bg-white w-full h-100 my-5 rounded-2xl flex justify-between items-center pb-5 ">
        <div className="space-y-5  px-10">
            <p className="text-sm font-semibold bg-green-100 text-green-600 px-8 py-2 rounded-3xl max-w-50 flex justify-center items-center">{date}</p>
            <h1 className="text-4xl font-bold">আজকের বাজারের দাম এক নজরে</h1>
            <p className="text-sm max-w-150">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
            <Link href='#সব-পণ্য'><button className="bg-green-600 px-7 py-1 text-white rounded-[5px] cursor-pointer">সব পণ্য দেখুন</button></Link>
        </div>
        <div className="px-10">
            <Image src={hero} alt="Hero image" className="h-90 w-100 " width={50} height={50}></Image>
        </div>

      </div>
    </div>
    );
};

export default Hero;