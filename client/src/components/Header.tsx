import styled from "styled-components";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const Header = styled.header`
  background-color: #172234;
  padding: 20px 80px;
  color: white;
  font-family: "Merriweather", serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 10;
`;

const Logo = styled.a`
  color: #fff;
  font-family: Merriweather;
  font-size: 28px;
  text-decoration: none;
  font-weight: 400;
  border: none;
`;

const BtnContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

export default function HeaderBar() {
  const navigate = useNavigate();
  return (
    <Header>
      <Logo href="/">Logo</Logo>
      <BtnContainer>
        <Button onClick={() => navigate("/login")} outlined>
          Log in
        </Button>
        <Button onClick={() => navigate("/login")}>Sign Up</Button>
      </BtnContainer>
    </Header>
  );
}
