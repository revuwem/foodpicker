interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="pl-4 pr-3 md:pl-9 md:pr-8 h-full">{children}</div>;
};

export default Container;
