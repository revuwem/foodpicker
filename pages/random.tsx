import { NextPage } from "next";
import RecipeCard from "../components/RecipeCard";
import useSWR from "swr";
import { randomRecipeFetcher } from "../utils/fetcher";
import Container from "../components/Container";
import FlexCenter from "../components/FlexCenter";
import Button from "../components/Button";
import Router from "next/router";
import Message from "../components/Message";

const Random: NextPage = () => {
  const { data, error } = useSWR(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`,
    randomRecipeFetcher
  );

  if (error) {
    return (
      <Container>
        <FlexCenter>
          <div className="grid gap-5">
            <Message msg="Sorry, we don't have any recipes yet" />
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
            <Message msg="Looking for something tasty..." />
          </div>
        </FlexCenter>
      </Container>
    );
  }

  return (
    <Container>
      <FlexCenter>
        <div className="grid gap-5">
          <RecipeCard data={data} />
          <div className="flex justify-center gap-5">
            <Button variant="outlined" onClick={() => console.log("save")}>
              Save for later
            </Button>
            <Button onClick={() => Router.reload()}>Pick again</Button>
          </div>
        </div>
      </FlexCenter>
    </Container>
  );
};

export default Random;
