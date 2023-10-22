import Link from "next/link";

const MenuItemList = ({ menuRef, isMenuOpen, items, currentPath }) => {
  return (
    <ul ref={menuRef} className={`menu ${isMenuOpen ? "showMenu" : ""}`}>
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.link}
            className={`${
              currentPath === item.link ? "text-blue-500" : "text-blue-900"
            } hover:text-blue-500 transition-all duration-300`}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuItemList;
