import MobileNavMenu from "../../app/components/MobileNavMenu";
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
    <div className="container mx-auto my-3">

      <div className="hidden sm:flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 lg:gap-10 items-center">
        {navcategory.map((nav, ind) => (
          <NavLink key={ind} nav={nav} />
        ))}
      </div>

      
      <div className="sm:hidden flex justify-center items-center">
        <MobileNavMenu navcategory={navcategory} />
      </div>
    </div>
  );
};

export default Navlinks;
