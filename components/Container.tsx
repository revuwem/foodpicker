interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="pl-9 pr-8 h-full">{children}</div>;
};

export default Container;
