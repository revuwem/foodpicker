import Image from "next/image";
import ExternalLinkIcon from "../assets/icons/external-link.svg";
import Button from "./Button";

export type RecipeShrink = {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  sourceName: string;
  sourceUrl: string;
};

interface SavedRecipeCardProps {
  data: RecipeShrink;
  onRemove: (id: number) => void;
}

const SavedRecipeCard = ({ data, onRemove }: SavedRecipeCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
      <div className="flex gap-4">
        <Image
          src={data.image}
          layout="intrinsic"
          width={100}
          height={100}
          alt=""
        ></Image>
        <div className="flex flex-col text-sm">
          <h3 className="max-w-prose md:max-w-md overflow-hidden text-ellipsis md:whitespace-nowrap font-bold text-base md:text-xl mb-2">
            {data.title}
          </h3>
          <p className="mb-auto">Prep: {data.readyInMinutes} min</p>
          <a
            href={data.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="flex gap-1 hover:underline"
          >
            <ExternalLinkIcon />
            {data.sourceName}
          </a>
        </div>
      </div>
      <div className="flex gap-5 md:gap-8">
        <Button type="link" href={`/user/saved/${data.id}`}>
          Get recipe
        </Button>
        <Button variant="outlined" onClick={() => onRemove(data.id)}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default SavedRecipeCard;
