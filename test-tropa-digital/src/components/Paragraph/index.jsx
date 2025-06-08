import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ size }) => size || "14px"};
  font-weight: ${({ weight }) => weight || "400"};
  color: ${({ color }) => color || "#2a4d8e80"};
  line-height: ${({ lineHeight }) => lineHeight || "1.5"};
  margin: ${({ margin }) => margin || "0"};
  text-align: ${({ align }) => align || "left"};
  background-color: ${({ background }) => background || "transparent"};
  padding: ${({ padding }) => padding || "0"};
`;

export default Paragraph;
