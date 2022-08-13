import Image from "next/image";
import recipeThumb from "../assets/images/soup.png";
import LikeIcon from "../assets/icons/heart.svg";
import ExternalLinkIcon from "../assets/icons/external-link.svg";

interface RecipeCardProps {
  title: string;
  ingredients: Array<object>;
  image: string;
  instructions: string;
  preparationMinutes: number;
  cookingMinutes: number;
  sourceName: string;
  sourceUrl: string;
}

const RecipeCard = (props: RecipeCardProps) => {
  return (
    <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-5">
      <div className="w-full">
        <Image src={recipeThumb} layout="responsive"></Image>
      </div>
      <div className="col-span-2 md:col-auto">
        <h3 className="font-bold text-2xl md:text-3xl mb-2">Recipe Title</h3>
        <div className="text-sm flex gap-6 mb-6 md:mb-8">
          <p>Prep: 5 mins</p>
          <p>Cooking: 15 mins</p>
        </div>
        <ul className="text-sm list-disc grid gap-1 pl-3">
          <li>1 bag shredded cabbage/coleslaw mix</li>
          <li>1 package chicken flavor ramen noodle soup</li>
          <li>½ teaspoon pepper</li>
          <li>1 bag shredded cabbage/coleslaw mix</li>
          <li>1 package chicken flavor ramen noodle soup</li>
          <li>½ teaspoon pepper</li>
          <li>1 bag shredded cabbage/coleslaw mix</li>
          <li>1 package chicken flavor ramen noodle soup</li>
        </ul>
      </div>
      <p className="col-span-2">
        Toast the sesame seeds, about 350 degrees in the oven for about 10-15
        minutes. Keep an eye on them to make sure they don't burn.Mix together
        the following to make the dressing: olive oil, vinegar, sugar, salt,
        pepper, green onions, chicken flavor packet from the ramen noodle
        package.Crush the ramen noodles until there are no large chunks (small
        chunks are OK).Combine the shredded cabbage and ramen noodles in a large
        bowl.Pour the dressing on the cabbage/noodle mixture and toss to
        coat.Top with the toasted sesame seeds and almonds.
      </p>
      <div className="col-span-2 flex justify-between text-sm">
        <a href="#" className="flex gap-1 hover:underline">
          <ExternalLinkIcon />
          Dizzy Bizzy and Bakery
        </a>
        <p className="flex gap-1">
          <LikeIcon /> 223
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
