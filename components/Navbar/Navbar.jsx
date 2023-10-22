"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import useWindowResize from "@/hooks/useWindowResize";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "../Logo";
import MenuIcon from "./MenuIcon";
import MenuItemList from "./MenuItemList";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { link: "/", title: "Home" },
    { link: "/browse", title: "Browse By" },
    { link: "/stories", title: "Stories" },
    { link: "/agents", title: "Agents" },
  ];

  const pathname = usePathname();

  useOutsideClick(menuRef, () => {
    if (isMenuOpen) setIsMenuOpen(false);
  });

  useWindowResize(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  });

  return (
    <nav className="flex place-content-center border-b border-gray-200">
      <div className="flex w-full max-w-1140 items-center justify-between py-5 px-6 md:px-0">
        <Logo />

        <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <MenuItemList
          menuRef={menuRef}
          isMenuOpen={isMenuOpen}
          items={menuItems}
          currentPath={pathname}
        />
      </div>
    </nav>
  );
};

export default Navbar;
