import Hero from "@/components/home/hero";
import type { Metadata } from "next";
import Auth from "@/components/auth/auth";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "NextJS Project",
  description:
    "This site is designed to demonstrate the use of various technologies",
};

const Home = async () => {
  const session = await auth();

  return (
    <main>
      <Hero />
      <Auth session={session} />
    </main>
  );
};

export default Home;
