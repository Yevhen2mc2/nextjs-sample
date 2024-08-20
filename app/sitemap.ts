import type { MetadataRoute } from "next";
import { getCountries } from "@/components/countries/countries-api";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const url = process.env.NEXT_PUBLIC_BASE_URL as string;

  const sitemap: MetadataRoute.Sitemap = [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: url + "/countries",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const countries = await getCountries();
  const countriesSitemap: MetadataRoute.Sitemap = countries.map((country) => {
    return {
      url: url + "/blog/countries/" + country.slug,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  return sitemap.concat(countriesSitemap);
};

export default sitemap;
