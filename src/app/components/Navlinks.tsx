import Link from "next/link";

import { ICategoryType } from "../types/category";

const getnavlinks = async () : Promise<ICategoryType[]>=>{
    const res = await fetch(`${process.env.ALL_CATEGORY_URL}`);
    const data = await res.json();
    return data;
}
const Navlinks = async () => {
    const navcategory = await getnavlinks();
    return (
        <div className="container  mx-auto flex gap-10 items-center my-3 ">
            {
                navcategory.map((nav)=>{
                    return <>
                    <Link href=''><div className="flex gap-1">
                        <h1 key={nav.id} className="text-sm">{nav.icon}</h1>
                        <h1 key={nav.slug} className="text-sm">{nav.nameBn}</h1>
                    </div></Link>
                    </>
                })
            }
        </div>
    );
};

export default Navlinks;