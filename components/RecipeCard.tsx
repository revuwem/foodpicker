import Image from "next/image";
import LikeIcon from "../assets/icons/heart.svg";
import ExternalLinkIcon from "../assets/icons/external-link.svg";

type Recipe = {
  title: string;
  extendedIngredients: Array<any>;
  image: string;
  instructions: string;
  readyInMinutes: number;
  sourceName: string;
  sourceUrl: string;
  aggregateLikes: number;
};

interface RecipeCardProps {
  data: Recipe;
}

const RecipeCard = ({ data }: RecipeCardProps) => {
  const ingredientsList = data.extendedIngredients.map((item) => (
    <li key={item.id}>{item.original}</li>
  ));

  return (
    <div className="max-w-xl grid gap-y-5">
      <h3 className="font-bold text-2xl md:text-3xl">{data.title}</h3>
      <p className="text-sm flex gap-6 mb-2 md:mb-4">
        Ready in: {data.readyInMinutes} mins
      </p>
      <div className="max-w-6/12">
        <Image
          src={data.image}
          layout="responsive"
          width={200}
          height={150}
          alt=""
        ></Image>
      </div>

      <ul className="text-sm list-disc grid gap-1 pl-3">{ingredientsList}</ul>
      <p
        className="max-w-prose"
        dangerouslySetInnerHTML={{ __html: data.instructions }}
      />
      <div className=" flex justify-between text-sm">
        <p className="flex gap-1">
          <LikeIcon /> {data.aggregateLikes}
        </p>
        <a
          href={data.sourceUrl}
          target="_blank"
          className="flex gap-1 hover:underline"
        >
          <ExternalLinkIcon />
          {data.sourceName}
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
