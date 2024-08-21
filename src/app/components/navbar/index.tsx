"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuItems = ["home", "about", "dolor"];

  return (
    <>
      <div className="p-4 pl-8 flex justify-between items-center">
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden">
          <Image src={isMenuOpen ? "/images/x-close.png" : "/images/menu.png"} alt="Menu icon" width={24} height={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="flex h-[85vh] items-center sm:hidden">
          <nav className="mt-2 space-y-6 px-5 flex flex-col" onClick={() => setIsMenuOpen(false)}>
            {menuItems.map((item, index) => (
              <Link href={`#${item}`} key={index} className="hover:text-gray-300 font-medium text-xl tracking-wide capitalize">
                {item}
              </Link>
            ))}
            <div className="flex justify-between gap-12">
              <Link href="/#" className="text-[#666666] font-bold text-xl tracking-wide uppercase">
                Coming Soon
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
