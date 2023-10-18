import styled from "styled-components";
import mainBg from "../assets/main-bg.png";
import { Link } from "react-router-dom";
import { Btn } from "../components/Button";
import { useTypedSelector } from "../hooks/useTypedSelector";

const HomeSection = styled.section`
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    opacity: 0.6;
    background: #172234;
  }
`;

const Wrapper = styled.div`
  text-align: center;
  width: 80%;
  color: #fff;
  margin-top: 80px;
`;

const Title = styled.h2`
  font-family: Merriweather;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 10px;
  white-space: nowrap;
  @media (max-width: 1200px) {
    font-size: 50px;
  }
  @media (max-width: 930px) {
    font-size: 42px;
  }
  @media (max-width: 785px) {
    font-size: 35px;
  }
  @media (max-width: 650px) {
    font-size: 28px;
    white-space: unset;
  }
  @media (max-width: 380px) {
    font-size: 26px;
  }
`;
const Text = styled.p`
  font-family: Lato;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.48px;
  margin-bottom: 40px;
  width: 68%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 930px) {
    font-size: 20px;
  }
  @media (max-width: 785px) {
    font-size: 18px;
  }
  @media (max-width: 650px) {
    font-size: 16px;
  }
  @media (max-width: 380px) {
    font-size: 15px;
  }
`;

const Button = styled(Btn)`
  background: transparent;
  border: 1px solid #fff;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 785px) {
    padding: 11px 23px;
  }
`;

export default function HomePage() {
  const { isAuthorized } = useTypedSelector((state) => state.authorize);
  return (
    <HomeSection>
      <Wrapper>
        <Title>The chemical negatively charged</Title>
        <Text>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. Twhile the mass defect is
        </Text>
        <Link to={isAuthorized ? "/open-deals" : "/login"}>
          <Button>get started</Button>
        </Link>
      </Wrapper>
    </HomeSection>
  );
}
