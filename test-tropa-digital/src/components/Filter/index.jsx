import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  padding: 0 16px;
  border-radius: 100px;
  height: 42px; // <- mesma altura do botão
  max-width: 300px;
`;

const Icon = styled(FiSearch)`
  color: #2a4d8e80;
  font-size: 18px;
  margin-right: 8px;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  color: #333;
  width: 100%;
`;

function Filter({ valor, aoDigitar }) {
  return (
    <SearchBar>
      <Icon />
      <Input
        type="text"
        placeholder="Buscar eventos"
        value={valor}
        onChange={(e) => aoDigitar(e.target.value)}
      />
    </SearchBar>
  );
}

export default Filter;
