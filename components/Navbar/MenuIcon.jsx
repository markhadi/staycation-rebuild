import Image from "next/image";

const MenuIcon = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="flex items-center w-6 h-6 overflow-hidden">
      <Image
        src={"/assets/hamburger-icon.svg"}
        alt="hamburger icon"
        width={24}
        height={24}
        className={`sm:hidden cursor-pointer transition-opacity duration-300 ${
          isMenuOpen ? "opacity-0 absolute" : "opacity-100 static"
        }`}
        onClick={toggleMenu}
      />

      <Image
        src={"/assets/close-icon.svg"}
        alt="close icon"
        width={24}
        height={24}
        className={`sm:hidden cursor-pointer transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 static" : "opacity-0 absolute"
        }`}
        onClick={toggleMenu}
      />
    </div>
  );
};

export default MenuIcon;
