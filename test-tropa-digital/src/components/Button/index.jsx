import styled from "styled-components";

const Botao = styled.button`
  background-color: #cc6237;
  color: #ffffff;
  border: none;
  border-radius: 100px;
  padding: 10px 25px 10px;
  font-size: 13px;
  font-weight: 500;
  width: 300px;
  height: 42px;
  cursor: pointer;

  &:hover {
    background-color: #b0542a;
  }
`;

const Button = ({ children }) => {
  return <Botao>{children}</Botao>;
};

export default Button;
