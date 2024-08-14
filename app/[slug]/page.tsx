import { Metadata } from "next";
import Link from "next/link";

const posts = new Array(10).fill(null);
export const dynamicParams = false;

export async function generateStaticParams() {
  return posts.map((_, index) => ({
    slug: String(index),
  }));
}

interface IProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  return {
    title: `Post ${params.slug} - NextJs`,
    description: `Description for Post ${params.slug}`,
  };
}

const Home = async ({ params }: IProps) => {
  return (
    <main className={"px-2"}>
      <h1 className={"mt-10 text-center text-xl font-medium"}>
        Post {params.slug}
      </h1>

      <div>
        <p className={"mt-2 max-w-96 text-sm"}>
          All pages of this segment work on the SSG. All data is known at build
          time, so we can generate static files while building the project
        </p>

        <p className={"mt-2 max-w-96 text-sm"}>
          All meta-information is also generated during project build
        </p>
      </div>

      <div className={"mt-10"}>
        {posts.map((_, index) => {
          if (+params.slug === index) return null;
          return (
            <Link
              className={"mt-1 block w-fit text-sky-700 hover:underline"}
              key={index}
              href={`/${index}`}
            >
              Post {index}
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
