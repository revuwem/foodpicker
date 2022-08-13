import { NextPage } from "next";
import RecipeCard from "../components/RecipeCard";
import useSWR from "swr";
import { randomRecipeFetcher } from "../utils/fetcher";

const Random: NextPage = () => {
  const { data, error } = useSWR(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`,
    randomRecipeFetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <RecipeCard data={data} />;
};

export default Random;
