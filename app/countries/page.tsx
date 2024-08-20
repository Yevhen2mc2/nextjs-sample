import Link from "next/link";
import { getCountries } from "@/components/countries/countries-api";

export const dynamicParams = false;

const Home = async () => {
  const countries = await getCountries();

  return (
    <main className={"px-2 pb-20"}>
      <div className={"mx-auto max-w-[45rem]"}>
        <h1 className={"mt-4 text-center text-xl font-medium sm:mt-10"}>
          REST Countries
        </h1>

        <div className={"mt-4"}>
          {countries.map((country) => {
            return (
              <Link
                className={"link mt-1"}
                key={country.officialName}
                href={`/countries/${country.slug}`}
              >
                {country.officialName}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
