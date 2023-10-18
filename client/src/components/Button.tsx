import styled from "styled-components";

export const Btn = styled.button<{ $outlined?: boolean }>`
  background: ${(props) => (props.$outlined ? "none" : "#B29F7E")};
  color: ${(props) => (props.$outlined ? "#B29F7E" : "#fff")};
  border: ${(props) =>
    props.$outlined ? "1px solid #B29F7E" : "1px solid transparent"};
  font-family: Merriweather;
  font-size: 16px;
  font-weight: 700;
  padding: 11px 48px;
  border-radius: 5px;
  text-align: center;
  text-transform: capitalize;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
  }
  @media (max-width: 785px) {
    padding: 11px 23px;
  }
`;

export default function Button({ children, outlined = false, onClick }: any) {
  return (
    <Btn onClick={onClick} $outlined={outlined}>
      {children}
    </Btn>
  );
}
