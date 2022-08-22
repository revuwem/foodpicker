import Image from "next/image";
import ExternalLinkIcon from "../assets/icons/external-link.svg";
import Button from "./Button";

export type RecipeShrink = {
  title: string;
  image: string;
  readyInMinutes: number;
  sourceName: string;
  sourceUrl: string;
};

interface SavedRecipeCardProps {
  data: RecipeShrink;
}

const SavedRecipeCard = ({ data }: SavedRecipeCardProps) => {
  const onRemoveRecipeClick = () => {
    console.log("remove");
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-24">
      <div className="flex gap-4">
        <Image
          src={data.image}
          layout="intrinsic"
          width={100}
          height={100}
        ></Image>
        <div className="flex flex-col text-sm">
          <h3 className="text-xl mb-2">{data.title}</h3>
          <p className="mb-auto">Prep: {data.readyInMinutes} min</p>
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
      <div className="flex gap-8">
        <Button type="link" href="/">
          Get recipe
        </Button>
        <Button variant="outlined" onClick={onRemoveRecipeClick}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default SavedRecipeCard;
