import styled from "styled-components";
import StyleGlobal from "./components/StylesGlobal";

const FundoGradiente = styled.div`
  background: #f9fbff;
  width: 100%;
  min-height: 100vh;
`;
function App() {
  return (
    <FundoGradiente>
      <StyleGlobal />
    </FundoGradiente>
  );
}

export default App;
