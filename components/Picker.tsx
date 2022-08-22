import Image from "next/image";
import pastaImg from "../assets/images/pasta.png";
import Button from "./Button";
import Message from "./Message";

const Picker = () => {
  return (
    <div className="flex flex-col items-center mb-10 md:mb-14">
      <Message>Are you hungry?</Message>
      <Button type="link" href="/random">
        Pick random food
      </Button>
    </div>
  );
};

export default Picker;
