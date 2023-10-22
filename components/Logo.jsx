import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="text-blue-500 font-medium text-2xl w-max self-center md:self-start"
    >
      Stay<span className="text-blue-900">cation.</span>
    </Link>
  );
};

export default Logo;
