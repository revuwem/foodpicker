import Image from "next/image";
import pastaImg from "../assets/images/pasta.png";
import Button from "./Button";
import Message from "./Message";

const Picker = () => {
  return (
    <div className="max-w-xl p-4 flex flex-col items-center">
      <>
        <Message>Are you hungry?</Message>
        <Button type="link" href="/random">
          Pick random food
        </Button>
      </>
    </div>
  );
};

export default Picker;
