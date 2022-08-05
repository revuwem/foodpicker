import Image from "next/image";
import pastaImg from "../assets/images/pasta.png";
import Button from "./Button";

const Picker = () => {
  return (
    <div className="max-w-xl p-4 flex flex-col items-center">
      <Image
        src={pastaImg}
        width="600px"
        height="390px"
        layout="intrinsic"
        placeholder="blur"
        className="mb-8"
      />
      <h3 className="font-normal text-2xl md:text-3xl mb-10 md:mb-14">
        Are you hungry?
      </h3>
      <Button onClick={(e) => console.log("pick random food")}>
        Pick random food
      </Button>
    </div>
  );
};

export default Picker;
