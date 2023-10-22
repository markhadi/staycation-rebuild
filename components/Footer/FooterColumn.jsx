import Link from "next/link";

const FooterColumn = ({ title, items }) => {
  return (
    <div className="flex flex-col items-center gap-4 sm:items-start md:gap-6">
      <h6 className="text-lg text-blue-900 font-medium ">{title}</h6>
      <div className="flex flex-col items-center gap-2 font-light text-gray-400 sm:items-start">
        {items.map((item, index) =>
          item.isLink ? (
            <Link href={item.content} key={index}>
              {item.label}
            </Link>
          ) : (
            <p key={index}>{item.label}</p>
          )
        )}
      </div>
    </div>
  );
};

export default FooterColumn;
