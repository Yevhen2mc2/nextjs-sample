import Image from "next/image";
import ReactNextImage from "@/public/images/home/react-next.png";

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

      <Image
        className={"mt-6 w-screen max-w-96"}
        src={ReactNextImage}
        alt={"React and NextJs logo"}
      />
    </section>
  );
};
export default Hero;
