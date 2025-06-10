// src/components/Pagination.js
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 20px;
`;

const PageButton = styled.button`
  background-color: ${(props) => (props.active ? "#CC6237" : "#F5F5F5")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const NavButton = styled.button`
  background-color: ${(props) => (props.primary ? "#CC6237" : "#F5F5F5")};
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  border: none;
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Pagination = ({ currentPage, onPageChange }) => {
  const pages = [1, 2, 3];

  return (
    <PaginationContainer>
      <NavButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </NavButton>

      {pages.map((page) => (
        <PageButton
          key={page}
          active={currentPage === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}

      <NavButton
        primary
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === 3}
      >
        Próxima
      </NavButton>
    </PaginationContainer>
  );
};

export default Pagination;
