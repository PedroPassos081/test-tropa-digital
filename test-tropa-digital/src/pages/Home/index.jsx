import Paragraph from "../../components/Paragraph";
import Sidebar from "../../components/Sidebar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const ConteudoPrincipal = styled.div`
  padding: 30px;
  overflow-y: auto;
`;

const Span = styled.span`
  color: #000;
  font-weight: bold;
`;

function Home() {
  return (
    <Container>
      <Sidebar />
      <ConteudoPrincipal>
        <Paragraph>
          Bem vindo de volta, <Span>Kaique Steck</Span>
        </Paragraph>
        <Span>Todos eventos</Span>
      </ConteudoPrincipal>
    </Container>
  );
}

export default Home;
