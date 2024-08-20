import { createSlug } from "@/utils/utils";

interface ICountryResponse {
  name: {
    official: string;
    [key: string]: any;
  };
  flags: {
    png: string;
    [key: string]: any;
  };
  capital: string[];
  region: string;
  [key: string]: any;
}

export interface ICountry {
  slug: string;
  officialName: string;
  flag: string;
  capital: string[];
  region: string;
}

export const getCountries = async (): Promise<ICountry[]> => {
  const countries: ICountryResponse[] = await fetch(
    "https://restcountries.com/v3.1/all",
  ).then((result) => result.json());

  return countries.slice(0, 10).map((country) => {
    return {
      slug: createSlug(country.name.official),
      officialName: country.name.official,
      capital: country.capital,
      flag: country.flags.png,
      region: country.region,
    };
  });
};
