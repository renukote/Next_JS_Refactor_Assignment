"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../../atoms/Button/Button";
import { Image } from "../../atoms/Image/Image";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["home", "about", "dolor"];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="flex items-center justify-between p-4 pl-8">
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        <Button onClick={toggleMenu} additionalButtonClassNames="sm:hidden">
          <Image
            src={isMenuOpen ? "/images/x-close.png" : "/images/menu.png"}
            alt={isMenuOpen ? "Close icon" : "Menu icon"}
            width={24}
            height={24}
          />
        </Button>
      </div>

      {isMenuOpen && (
        <div className="flex h-[85vh] items-center sm:hidden">
          <nav
            className="mt-2 flex flex-col space-y-6 px-5"
            onClick={toggleMenu}
          >
            {menuItems.map((item) => (
              <Link
                href={`#${item}`}
                key={item}
                className="text-xl font-medium capitalize tracking-wide hover:text-gray-300"
              >
                {item}
              </Link>
            ))}

            <div className="flex justify-between gap-12">
              <Link
                href="/#"
                className="text-xl font-bold uppercase tracking-wide text-gray-600"
              >
                Coming Soon
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
