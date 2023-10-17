import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";

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
  return (
    <Header>
      <Logo href="/">Logo</Logo>
      <BtnContainer>
        <Link to="/sign-in">
          <Button outlined>Log in</Button>
        </Link>
        <Link to="/sign-up">
          <Button>Sign Up</Button>
        </Link>
      </BtnContainer>
    </Header>
  );
}
