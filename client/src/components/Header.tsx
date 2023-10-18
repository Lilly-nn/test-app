import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {
  setSignIn,
  setSignUp,
} from "../context/features/current-page/currentPageSlice";
import { signOut } from "../context/features/authorize/authorizeSlice";

const Header = styled.header`
  background-color: #172234;
  padding: 20px 80px;
  color: white;
  font-family: "Merriweather", serif;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 10;
  @media (max-width: 650px) {
    padding: 15px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

export default function HeaderBar() {
  const navigate = useNavigate();
  const { isAuthorized } = useTypedSelector((state) => state.authorize);
  const dispatch = useDispatch();

  function redirectToLogin() {
    navigate("/login");
  }

  return (
    <Header>
      <BtnContainer>
        {isAuthorized ? (
          <Button
            onClick={() => {
              redirectToLogin();
              dispatch(signOut());
            }}
            outlined
          >
            Sign Out
          </Button>
        ) : (
          <>
            <Button
              onClick={() => {
                redirectToLogin();
                dispatch(setSignIn());
              }}
              outlined
            >
              Log in
            </Button>
            <Button
              onClick={() => {
                redirectToLogin();
                dispatch(setSignUp());
              }}
            >
              Sign Up
            </Button>
          </>
        )}
      </BtnContainer>
    </Header>
  );
}
