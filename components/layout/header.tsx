import Link from "next/link";

const Header = () => {
  return (
    <header
      className={
        "flex items-center justify-between bg-sky-600 p-2 text-white sm:p-4"
      }
    >
      <Link href={"/"} className={"select-none text-xl font-bold"}>
        NextJs
      </Link>
    </header>
  );
};
export default Header;
