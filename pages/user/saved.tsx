import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Button from "../../components/Button";
import Container from "../../components/Container";
import FlexCenter from "../../components/FlexCenter";
import Message from "../../components/Message";
import SavedRecipeCard, {
  RecipeShrink,
} from "../../components/SavedRecipeCard";
import { recipeInformationBulkFetcher } from "../../utils/fetcher";

const Saved: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [savedRecipes, setSavedRecipes] = useState<number[]>([]);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  useEffect(() => {
    if (!session) {
      router.push("/");
    } else {
      const savedRecipes = localStorage.getItem("savedRecipes") ?? "[]";
      setSavedRecipes(JSON.parse(savedRecipes));
      setShouldFetch(true);
    }
  }, [router, session]);

  const { data, error } = useSWR(
    shouldFetch && savedRecipes.length > 0
      ? `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&ids=${savedRecipes}`
      : null,
    recipeInformationBulkFetcher
  );

  const onRemoveRecipeClick = (id: number) => {
    const itemToRemoveIndex = savedRecipes?.indexOf(id);
    const newSavedRecipes = [
      ...savedRecipes?.slice(0, itemToRemoveIndex),
      ...savedRecipes?.slice(itemToRemoveIndex + 1),
    ];
    setSavedRecipes(newSavedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(newSavedRecipes));
  };

  if (savedRecipes.length === 0) {
    return (
      <Container>
        <h2 className="font-bold text-2xl md:text-3xl text-green-100 mb-10">
          Saved recipes
        </h2>
        <FlexCenter>
          <div className="flex flex-col items-center mb-10 md:mb-14">
            <Message>You don&apos;t have any recipes yet</Message>
            <Button type="link" href="/random">
              Pick random recipe
            </Button>
          </div>
        </FlexCenter>
      </Container>
    );
  }

  if (error || data?.status === "failure") {
    return (
      <Container>
        <h2 className="font-bold text-2xl md:text-3xl text-green-100 mb-10">
          Saved recipes
        </h2>
        <p>Something went wrong</p>
        <p>{error || data?.message}</p>
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
          <li key={item.id}>
            <SavedRecipeCard data={item} onRemove={onRemoveRecipeClick} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Saved;
