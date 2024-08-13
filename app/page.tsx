import Hero from "@/components/home/hero";
import type { Metadata } from "next";
import Auth from "@/components/auth/auth";

export const metadata: Metadata = {
  title: "NextJS Project",
  description:
    "This site is designed to demonstrate the use of various technologies",
};

const Home = () => {
  return (
    <main>
      <Hero />
      <Auth />
    </main>
  );
};

export default Home;
