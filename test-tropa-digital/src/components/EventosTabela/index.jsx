import styled from "styled-components";

const ContainerTabela = styled.div`
  margin-top: 20px;
  width: 100%;
  border-radius: 8px;
  background-color: white;
  padding: 16px;
  font-family: "Poppins", sans-serif;
`;

const LinhaCabecalho = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: flex;
    font-weight: bold;
    padding-bottom: 12px;
    border-bottom: 2px solid #ccc;
  }
`;

const ColunaCabecalho = styled.div`
  flex: ${({ flex }) => flex || 1};
  padding: 0 10px;
  display: flex;
  align-items: center;
  color: #cc623780; /* cor dos títulos com transparência */
`;

const LinhaEvento = styled.div`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  flex-wrap: wrap;

  @media (max-width: 599px) {
    flex-direction: column;
    padding: 10px 0;
  }
`;

const Coluna = styled.div`
  flex: ${({ flex }) => flex || 1};
  padding: 0 10px;
  display: flex;
  align-items: center;
  color: #657593; /* cor do conteúdo */

  @media (max-width: 599px) {
    flex: none;
    width: 100%;
    padding: 4px 0;

    &::before {
      content: ${({ label }) => `"${label}: "`};
      font-weight: bold;
      margin-right: 6px;
      color: #cc623780; /* título em modo responsivo */
    }
  }
`;

const BolinhaStatus = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ ativo }) => (ativo ? "green" : "red")};
  margin-right: 8px;
`;

const TresPontos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #cc6237;
  font-weight: bold;
  font-size: 20px;
  line-height: 12px;
  user-select: none;
`;

function EventosTabela({ eventos }) {
  return (
    <ContainerTabela>
      <LinhaCabecalho>
        <ColunaCabecalho flex={3}>Nome do Evento</ColunaCabecalho>
        <ColunaCabecalho flex={1}>Total de Equipes</ColunaCabecalho>
        <ColunaCabecalho flex={1}>Status</ColunaCabecalho>
        <ColunaCabecalho flex={2}>Data</ColunaCabecalho>
        <ColunaCabecalho flex={0.5} style={{ justifyContent: "center" }}>
          {/* Espaço para os 3 pontos */}
        </ColunaCabecalho>
      </LinhaCabecalho>

      {eventos.map((evento) => (
        <LinhaEvento key={evento.id}>
          <Coluna flex={3} label="Nome do Evento">
            {evento.nome}
          </Coluna>
          <Coluna flex={1} label="Total de Equipes">
            {evento.totalEquipes}
          </Coluna>
          <Coluna flex={1} label="Status">
            <BolinhaStatus ativo={evento.status === "Ativo"} />
            {evento.status}
          </Coluna>
          <Coluna flex={2} label="Data">
            {evento.data}
          </Coluna>
          <Coluna flex={0.5} label="">
            <TresPontos>
              <span>•</span>
              <span>•</span>
              <span>•</span>
            </TresPontos>
          </Coluna>
        </LinhaEvento>
      ))}
    </ContainerTabela>
  );
}

export default EventosTabela;
