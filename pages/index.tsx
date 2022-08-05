import type { NextPage } from "next";
import Container from "../components/Container";
import Picker from "../components/Picker";
import FlexCenter from "../components/FlexCenter";

const Home: NextPage = () => {
  return (
    <Container>
      <FlexCenter>
        <Picker />
      </FlexCenter>
    </Container>
  );
};

export default Home;
