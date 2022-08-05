interface FlexCenterProps {
  children: React.ReactNode;
}

const FlexCenter = ({ children }: FlexCenterProps) => {
  return (
    <div className="flex justify-center items-center h-full">{children}</div>
  );
};

export default FlexCenter;
