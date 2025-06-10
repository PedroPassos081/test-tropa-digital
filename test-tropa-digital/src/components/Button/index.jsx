import styled from "styled-components";

const Botao = styled.button`
  background-color: #cc6237;
  color: #ffffff;
  border: none;
  border-radius: 100px;
  padding: 10px 25px;
  font-size: 13px;
  font-weight: 500;
  width: auto;
  height: 42px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #b0542a;
  }

  svg {
    font-size: 16px;
  }
`;

const Button = ({ children, icon, ...props }) => {
  return (
    <Botao {...props}>
      {icon && icon}
      {children}
    </Botao>
  );
};

export default Button;
