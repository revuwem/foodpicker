import Image from "next/image";
import pastaImg from "../assets/images/pasta.png";

interface MessageProps {
  children: string;
}

const Message = ({ children }: MessageProps) => {
  return (
    <div className="w-full max-w-xl flex flex-col items-center">
      <Image
        src={pastaImg}
        width="400px"
        height="270px"
        layout="intrinsic"
        placeholder="blur"
        className="mb-8"
      />
      <h3 className="font-normal text-center text-md md:text-2xl mb-8 md:mb-10">
        {children}
      </h3>
    </div>
  );
};

export default Message;
