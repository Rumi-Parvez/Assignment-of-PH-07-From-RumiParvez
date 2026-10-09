"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { ICategoryType } from "../types/category";
import NavLink from "./NavLink";

type MobileNavMenuProps = {
  navcategory: ICategoryType[];
};

const MobileNavMenu = ({
  navcategory,
}: MobileNavMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex items-center justify-center rounded-lg border border-gray-200 px-25 py-2 text-gray-800 transition hover:bg-gray-100"
        >
          {isMenuOpen ? (
            <FiX size={24} />
          ) : (
            <FiMenu size={24} />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          aria-label="Mobile category navigation"
          className="mt-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm"
        >
          <div className="flex flex-col gap-2">
            {navcategory.map((nav, ind) => (
              <div
                key={ind}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg"
              >
                <NavLink nav={nav} />
              </div>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileNavMenu;
