import Image from "next/image";

import Allproducts from "./components/AllProducts";
import Downprice from "./components/Downprice";
import Hero from "./components/Hero";
import Upprice from "./components/Upprice";

export default function Home() {
  return (
    <>
    <div className="space-y-5">
      <Hero></Hero>
      <Upprice></Upprice>
      <Downprice></Downprice>
      <Allproducts></Allproducts>
    </div>
    </>
  );
}
