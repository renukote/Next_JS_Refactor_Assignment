"use client";
import { useState } from "react";
import Link from "next/link";
import { Image } from "../../atoms/Image/Image";
import { Button } from "../../atoms/Button/Button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["home", "about", "dolor"];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="p-4 pl-8 flex justify-between items-center">
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
            className="mt-2 space-y-6 px-5 flex flex-col"
            onClick={() => setIsMenuOpen(false)}
          >
            {menuItems.map((item, index) => (
              <Link
                href={`#${item}`}
                key={index}
                className="hover:text-gray-300 font-medium text-xl tracking-wide capitalize"
              >
                {item}
              </Link>
            ))}

            <div className="flex justify-between gap-12">
              <Link
                href="/#"
                className="text-[#666666] font-bold text-xl tracking-wide uppercase"
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
