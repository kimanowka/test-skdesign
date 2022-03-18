import styled from "styled-components";
import Contact from "./Components/Contact/Contact";
import Description from "./Components/Description/Description";
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const App = () => {
  return (
    <Main>
      <Description></Description>
      <Contact></Contact>
    </Main>
  );
};
