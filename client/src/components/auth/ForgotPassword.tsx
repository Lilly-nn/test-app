import { Container, Form, Input, Title } from "../../pages/LoginPage";
import Button from "../Button";

export default function ForgotPassword() {
  return (
    <Container>
      <Title>Forgot password</Title>
      <Form>
        <Input type="Enter  your email" required placeholder="Email" />
        <Button type="submit">Send reset link</Button>
      </Form>
    </Container>
  );
}
