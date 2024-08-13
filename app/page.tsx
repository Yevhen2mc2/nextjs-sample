import Hero from "@/components/home/hero";
import ClientForm from "@/components/home/client-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextJS Project",
  description:
    "This site is designed to demonstrate the use of various technologies",
};

const Home = () => {
  return (
    <main>
      <Hero />
      <ClientForm />
    </main>
  );
};

export default Home;
