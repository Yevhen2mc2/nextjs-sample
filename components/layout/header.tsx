import Link from "next/link";
import { auth, signOut } from "@/auth";
import Button from "@/components/shared/button";

const Header = async () => {
  const session = await auth();

  return (
    <header
      className={
        "flex items-center justify-between bg-sky-600 p-2 text-white sm:p-4"
      }
    >
      <Link href={"/"} className={"select-none text-xl font-bold"}>
        NextJs
      </Link>

      {session ? (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button variant={"secondary"} type={"submit"} className={"py-1"}>
            Logout
          </Button>
        </form>
      ) : null}
    </header>
  );
};
export default Header;
