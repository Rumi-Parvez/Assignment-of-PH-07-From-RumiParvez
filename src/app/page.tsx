import { Suspense } from "react";
import Image from "next/image";

import Allproducts from "./components/AllProducts";
import Downprice from "./components/Downprice";
import Hero from "./components/Hero";
import Upprice from "./components/Upprice";
import HomeLoade from "./loadings/HomeLoade";

export default function Home() {
  return (
    <>
    <Suspense fallback={<HomeLoade></HomeLoade>}>
      <div className="space-y-5 mb-20">
      <Hero></Hero>
      <Upprice></Upprice>
      <Downprice></Downprice>
      <Allproducts></Allproducts>
    </div>
    </Suspense>
    </>
  );
}
