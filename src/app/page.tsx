import Image from "next/image";

import Hero from "./components/Hero";
import Upprice from "./components/Upprice";

export default function Home() {
  return (
    <>
    <div className="space-y-5">
      <Hero></Hero>
      <Upprice></Upprice>
    </div>
    </>
  );
}
