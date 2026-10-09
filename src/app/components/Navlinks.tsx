import Link from "next/link";

import { ICategoryType } from "../types/category";
import NavLink from "./NavLink";

const getnavlinks = async (): Promise<ICategoryType[]> => {
  const res = await fetch(`${process.env.ALL_CATEGORY_URL}`);
  const data = await res.json();
  return data;
};

const Navlinks = async () => {
  const navcategory = await getnavlinks();

  return (
    <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 lg:gap-10 items-center my-3">
      {navcategory.map((nav, ind) => (
        <NavLink key={ind} nav={nav}></NavLink>
      ))}
    </div>
  );
};

export default Navlinks;
