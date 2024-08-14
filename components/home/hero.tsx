import Image from "next/image";
import ReactNextImage from "@/public/images/home/react-next.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className={
        "mx-auto mt-10 flex max-w-[75rem] flex-col items-center px-2 text-center"
      }
    >
      <div>
        <h1 className={"text-4xl font-bold text-sky-800"}>NextJs</h1>
        <p className={"text-sm"}>
          This site is designed to demonstrate the use of various technologies
        </p>
      </div>

      <div className={"max-w-96"}>
        <Image
          className={"mt-6 w-screen"}
          src={ReactNextImage}
          alt={"React and NextJs logo"}
        />

        <Link className={"button-blue mt-2 block"} href={"/1"}>
          Open Post 1
        </Link>
      </div>
    </section>
  );
};
export default Hero;
