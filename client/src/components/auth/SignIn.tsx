import {
  Container,
  ForgotLink,
  Form,
  Input,
  Label,
  LinkSection,
  SignLink,
  Title,
} from "../../pages/LoginPage";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <Container>
      <Title>Login</Title>
      <Form>
        <div>
          <Label>Email</Label>
          <Input type="email" required placeholder="Email" />
        </div>
        <div>
          <Label>Password</Label>
          <Input type="password" required placeholder="Password" />
        </div>
        <Link to="/forgot-password">
          <ForgotLink>Forgot Password?</ForgotLink>
        </Link>

        <Button type="submit">Sign In</Button>
      </Form>

      <LinkSection>
        Don't have an account?{" "}
        <Link to="/sign-up">
          <SignLink>Sign up</SignLink>
        </Link>
      </LinkSection>
    </Container>
  );
}
