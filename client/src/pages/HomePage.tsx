import styled from "styled-components";
import mainBg from "../assets/main-bg.png";
import { Link } from "react-router-dom";
import { Btn } from "../components/Button";

const HomeSection = styled.section`
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  height: 100vh;
  background-size: 100%;
  object-fit: contain;
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
`;

const Button = styled(Btn)`
  background: transparent;
  border: 1px solid #fff;
  &:hover {
    transform: scale(1.05);
  }
`;

export default function HomePage() {
  return (
    <HomeSection>
      <Wrapper>
        <Title>The chemical negatively charged</Title>
        <Text>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. Twhile the mass defect is
        </Text>
        <Link to="/login">
          <Button>get started</Button>
        </Link>
      </Wrapper>
    </HomeSection>
  );
}
