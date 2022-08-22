import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";
import Container from "../../../components/Container";
import FlexCenter from "../../../components/FlexCenter";
import RecipeCard from "../../../components/RecipeCard";
import { recipeInformationFetcher } from "../../../utils/fetcher";

const SavedRecipePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(
    id
      ? `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
      : null,
    recipeInformationFetcher,
    { revalidateOnFocus: false }
  );

  if (error) {
    return (
      <Container>
        <FlexCenter>
          <p>Something went wrong...</p>
        </FlexCenter>
      </Container>
    );
  }

  if (!data) {
    return (
      <Container>
        <FlexCenter>
          <p>Loading...</p>
        </FlexCenter>
      </Container>
    );
  }

  return (
    <Container>
      <FlexCenter>
        <div className="mb-8">
          <RecipeCard data={data} />
        </div>
      </FlexCenter>
    </Container>
  );
};

export default SavedRecipePage;
