import { NextPage } from "next";
import RecipeCard from "../components/RecipeCard";
import useSWR from "swr";
import { randomRecipeFetcher } from "../utils/fetcher";
import Container from "../components/Container";
import FlexCenter from "../components/FlexCenter";
import Button from "../components/Button";
import Router from "next/router";
import Message from "../components/Message";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

const Random: NextPage = () => {
  const { data: session } = useSession();

  const { data, error } = useSWR(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`,
    randomRecipeFetcher,
    { revalidateOnFocus: false }
  );

  const [recipeSaved, setRecipeSaved] = useState<boolean>(false);

  const onSaveRecipeClick = () => {
    if (!session) {
      signIn();
    } else {
      const localStorageSavedRecipes = localStorage.getItem("savedRecipes");

      let savedRecipes: number[];
      if (!localStorageSavedRecipes) {
        savedRecipes = new Array();
      } else {
        savedRecipes = JSON.parse(localStorageSavedRecipes);
      }

      savedRecipes.push(data.id);
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
      setRecipeSaved(true);
    }
  };

  if (error) {
    return (
      <Container>
        <FlexCenter>
          <div className="grid gap-5">
            <Message>Sorry, we don't have any recipes yet</Message>
          </div>
        </FlexCenter>
      </Container>
    );
  }

  if (!data) {
    return (
      <Container>
        <FlexCenter>
          <div className="grid gap-5">
            <Message>Looking for something tasty...</Message>
          </div>
        </FlexCenter>
      </Container>
    );
  }

  return (
    <Container>
      <FlexCenter>
        <div className="grid gap-5 mb-8">
          <RecipeCard data={data} />
          <div className="flex justify-center gap-5">
            <Button
              variant="outlined"
              onClick={onSaveRecipeClick}
              disabled={recipeSaved}
            >
              {!recipeSaved ? "Save for later" : "Recipe saved!"}
            </Button>
            <Button onClick={() => Router.reload()}>Pick again</Button>
          </div>
        </div>
      </FlexCenter>
    </Container>
  );
};

export default Random;
