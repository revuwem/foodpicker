import { NextPage } from "next";
import { useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import Button from "../../components/Button";
import Container from "../../components/Container";
import FlexCenter from "../../components/FlexCenter";
import Message from "../../components/Message";
import SavedRecipeCard, {
  RecipeShrink,
} from "../../components/SavedRecipeCard";
import { recipeInformationBulkFetcher } from "../../utils/fetcher";

const Saved: NextPage = () => {
  const [localStorageSavedRecipes, setLocalStorageSavedRecipes] = useState<
    number[]
  >([]);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  useEffect(() => {
    const savedRecipes = localStorage.getItem("savedRecipes") ?? "[]";
    setLocalStorageSavedRecipes(JSON.parse(savedRecipes));
    setShouldFetch(true);
  }, []);

  const { data, error } = useSWR(
    shouldFetch && localStorageSavedRecipes.length > 0
      ? `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&ids=${localStorageSavedRecipes}`
      : null,
    recipeInformationBulkFetcher
  );

  if (localStorageSavedRecipes.length === 0) {
    return (
      <Container>
        <h2 className="font-bold text-2xl md:text-3xl text-green-100 mb-10">
          Saved recipes
        </h2>
        <FlexCenter>
          <div className="flex flex-col items-center mb-10 md:mb-14">
            <Message msg="You don't have any recipes yet" />
            <Button type="link" href="/random">
              Pick random recipe
            </Button>
          </div>
        </FlexCenter>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <h2 className="font-bold text-2xl md:text-3xl text-green-100 mb-10">
          Saved recipes
        </h2>
        <p>Something went wrong</p>
        <p>{error}</p>
      </Container>
    );
  }

  if (!data) {
    return (
      <Container>
        <h2 className="font-bold text-2xl md:text-3xl text-green-100 mb-10">
          Saved recipes
        </h2>
        <p>loading...</p>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="font-bold text-2xl md:text-3xl text-green-100 mb-10">
        Saved recipes
      </h2>
      <ul className="flex flex-col gap-16 md:gap-8">
        {data.map((item: RecipeShrink) => (
          <li>
            <SavedRecipeCard data={item} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Saved;
