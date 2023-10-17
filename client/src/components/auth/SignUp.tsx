import {
  Container,
  Form,
  Input,
  Label,
  LinkSection,
  SignLink,
  Title,
} from "../../pages/LoginPage";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <Container>
      <Title>Register</Title>
      <Form>
        <div>
          <Label>Email</Label>
          <Input type="email" required placeholder="Email" />
        </div>
        <div>
          <Label>Password</Label>
          <Input type="password" required placeholder="Password" />
        </div>
        <Button type="submit">Sign Up</Button>
      </Form>

      <LinkSection>
        Already have an account?{" "}
        <Link to="/sign-in">
          <SignLink>Sign in</SignLink>
        </Link>
      </LinkSection>
    </Container>
  );
}
