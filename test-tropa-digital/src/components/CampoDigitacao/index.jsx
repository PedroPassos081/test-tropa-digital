import styled from "styled-components";

const Campo = styled.input`
  background-color: #f6f6f6;
  margin: 1em 0;
  box-sizing: border-box;
  border-radius: 100px;
  border: none;
  width: 100%;
  padding: 16px;

  &::placeholder {
    color: #657593;
    font-size: 12px;
    line-height: 16px;
  }
`;

const Rotulo = styled.label`
  display: block;
  color: #cc6237;
  font-weight: 700;
  font-size: 13px;
`;

const Container = styled.div`
  width: 100%;
`;
function CampoDigitacao({ tipo, valor, placeholder, onChange, label }) {
  return (
    <Container>
      <Rotulo>{label}</Rotulo>
      <Campo
        type={tipo}
        value={valor}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </Container>
  );
}

export default CampoDigitacao;
