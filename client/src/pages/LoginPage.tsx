import styled from "styled-components";
import bg from "../assets/login-bg.jpg";

const LoginSection = styled.section`
  height: 100vh;
  overflow: hidden;
  display: flex;
`;

const ImageBackground = styled.div`
  width: 60%;
  height: 100vh;
`;

const Layer = styled.div`
  margin-top: 80px;
  width: 40%;
  background: #e5e5e585;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 350px;
`;

const Title = styled.h6`
  color: #172234;
  font-family: Merriweather;
  font-size: 28px;
  font-weight: 700;
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  a {
    width: 100%;
  }
`;

const Label = styled.label`
  color: #000;
  display: block;
  font-family: Merriweather;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 3px;
`;

const Input = styled.input`
  background: #e0e0e0;
  color: #172234;
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 20px;
  border-radius: 5px;
  width: 100%;
  &:focus {
    outline: 2px solid lightgray;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const ForgotLink = styled.a`
  text-align: right;
  color: #b29f7e;
  font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  cursor: pointer;
`;

const LinkSection = styled.p`
  color: #172234;
  font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
`;

const SignLink = styled.a`
  color: #b29f7e;
  font-weight: 600;
  line-height: 22px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function LoginPage({ children }: any) {
  return (
    <LoginSection>
      <ImageBackground>
        <Image src={bg} alt="background image" />
      </ImageBackground>
      <Layer>{children}</Layer>
    </LoginSection>
  );
}

export {
  Container,
  Title,
  Form,
  Input,
  Label,
  ForgotLink,
  LinkSection,
  SignLink,
};
