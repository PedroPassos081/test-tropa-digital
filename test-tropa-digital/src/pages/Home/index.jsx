import { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import Paragraph from "../../components/Paragraph";
import Filter from "../../components/Filter";
import EventosTabela from "../../components/EventosTabela";
import Button from "../../components/Button";
import { FiPlus } from "react-icons/fi";
import Pagination from "../../components/Pagination";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const ConteudoPrincipal = styled.div`
  padding: 30px;
  width: 100%;
  margin-left: 20px; /* margem esquerda do conteúdo */
`;

const SpanDestaque = styled.span`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

const Subtitulo = styled.span`
  color: #cc6237e5;
  font-weight: bold;
  font-size: 20px;
`;

const CotainerConteudo = styled.div`
  width: calc(100% - 20px);
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  margin-right: 30px;
`;

const FiltroBotaoContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* alinha tudo à direita */
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

function Home() {
  const [eventos, setEventos] = useState([]);
  const [busca, setBusca] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);

  useEffect(() => {
    const mockEventos = [
      {
        id: 1,
        nome: "Clube do Laço Coração Pantaneiro",
        totalEquipes: 5,
        status: "Ativo",
        data: "09 a 11 de junho",
      },
      {
        id: 2,
        nome: "Clube do Laço Coração Pantaneiro",
        totalEquipes: 3,
        status: "Desativado",
        data: "15 de junho",
      },
      {
        id: 3,
        nome: "Filtro On",
        totalEquipes: 4,
        status: "Ativo",
        data: "20 de junho",
      },
    ];
    setEventos(mockEventos);
  }, []);

  const eventosFiltrados = eventos.filter((evento) =>
    evento.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Container>
      <Sidebar />
      <ConteudoPrincipal>
        <Paragraph style={{ marginBottom: "16px" }}>
          Bem vindo de volta, <SpanDestaque>Kaique Steck</SpanDestaque>
        </Paragraph>

        <Subtitulo>Todos eventos</Subtitulo>

        <CotainerConteudo>
          <FiltroBotaoContainer>
            <Filter valor={busca} aoDigitar={setBusca} />
            <Button>
              <FiPlus size={16} />
              Inserir novo
            </Button>
          </FiltroBotaoContainer>

          <EventosTabela eventos={eventosFiltrados} />
          <Pagination currentPage={paginaAtual} onPageChange={setPaginaAtual} />
        </CotainerConteudo>
      </ConteudoPrincipal>
    </Container>
  );
}

export default Home;
