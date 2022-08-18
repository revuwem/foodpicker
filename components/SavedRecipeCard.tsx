import Image from "next/image";
import ExternalLinkIcon from "../assets/icons/external-link.svg";
import soupImage from "../assets/images/soup.png";
import Button from "./Button";

const SavedRecipeCard = () => {
  const onRemoveRecipeClick = () => {
    console.log("remove");
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-24">
      <div className="flex gap-4">
        <Image
          src={soupImage}
          layout="intrinsic"
          width={100}
          height={100}
        ></Image>
        <div className="flex flex-col">
          <h3 className="text-md md:text-xl mb-auto">Recipe name</h3>
          <p>Prep: 40 min</p>
          <a href="" target="_blank" className="flex gap-1 hover:underline">
            <ExternalLinkIcon />
            Source link
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
