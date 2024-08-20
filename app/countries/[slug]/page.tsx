import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getCountries, ICountry } from "@/components/countries/countries-api";
import { ArrowLeft } from "lucide-react";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const countries = await getCountries();

  return countries.map((country) => {
    return {
      slug: country.slug,
    };
  });
};

interface IProps {
  params: Pick<ICountry, "slug">;
}

export const generateMetadata = async ({
  params,
}: IProps): Promise<Metadata> => {
  const countries = await getCountries();
  const country = countries.find((country) => country.slug === params.slug);

  if (!country)
    console.error(`Could not find data for this country slug: ${params.slug}`);

  return {
    title: `Country ${country?.officialName}`,
    description: `Some description for ${country?.officialName}...`,
  };
};

const Home = async ({ params }: IProps) => {
  const countries = await getCountries();
  const country = countries.find((country) => country.slug === params.slug);

  return (
    <main className={"px-2 pb-20"}>
      <div className={"mx-auto max-w-[45rem]"}>
        <h1 className={"mt-4 text-center text-xl font-medium sm:mt-10"}>
          {country?.officialName}
        </h1>

        {country?.flag ? (
          <div className="relative h-64 w-full">
            <Image
              layout="fill"
              objectFit="contain"
              className={"mx-auto mt-2"}
              src={country?.flag}
              alt={`Flag of ${country.officialName}`}
            />
          </div>
        ) : null}

        <div className={"mt-4 font-medium"}>
          <p>Capital: {country?.capital}</p>
          <p>Region: {country?.region}</p>
        </div>

        <aside className={"mt-14 flex flex-col gap-2 text-sm"}>
          <p>
            All pages of this segment work on the SSG. All data is known at
            build time, so we can generate static files while building the
            project.
          </p>

          <p>All meta-information is also generated during project build.</p>
        </aside>

        <Link
          href={"/countries"}
          className={"button-primary mt-8 flex w-fit gap-2"}
        >
          <ArrowLeft />
          <span>Back to countries list</span>
        </Link>
      </div>
    </main>
  );
};

export default Home;
