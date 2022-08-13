import Image from "next/image";
import pastaImg from "../assets/images/pasta.png";

interface MessageProps {
  msg: string;
}

const Message = ({ msg }: MessageProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Image
        src={pastaImg}
        width="600px"
        height="390px"
        layout="intrinsic"
        placeholder="blur"
        className="mb-8"
      />
      <h3 className="font-normal text-2xl md:text-3xl mb-10 md:mb-14">{msg}</h3>
    </div>
  );
};

export default Message;
