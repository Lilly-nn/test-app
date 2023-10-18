import { useState } from "react";
import {
  Container,
  ForgotLink,
  Form,
  Input,
  Label,
  LinkSection,
  SignLink,
  Title,
  ValidationError,
} from "../pages/LoginPage";
import { authSchema } from "../validation/validationSchema";
import Button from "./Button";
import axios from "../axios.config";
import { getErrorMessage } from "../utils/getApiError";
import { Toaster, toast } from "react-hot-toast";

type LoginPage = "Sign in" | "Sign up";

export default function LogIn() {
  const [currentPage, setCurrentPage] = useState<LoginPage>("Sign in");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function signUp() {
    try {
      const validationPassed = authSchema.safeParse(formData);
      if (!validationPassed.success) {
        alert("Email or password is not valid");
        return;
      }
      const res = await axios.post("/auth/register", formData);
      console.log(res.data);
      toast.success("Successfully registered!");
    } catch (err) {
      toast.error(getErrorMessage(err));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await signUp();
  }

  return (
    <Container>
      <Title>{currentPage === "Sign in" ? "Login" : "Register"}</Title>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
            placeholder="Email"
          />
        </div>
        <div>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
            required
            placeholder="Password"
          />
          {currentPage === "Sign up" &&
            formData.password.length > 0 &&
            formData.password.length < 6 && (
              <ValidationError>
                Password must contain at least 6 characters
              </ValidationError>
            )}
        </div>
        {currentPage === "Sign in" && <ForgotLink>Forgot Password?</ForgotLink>}

        <Button type="submit">
          {currentPage === "Sign up" ? "Sign Up" : "Sign In"}
        </Button>
      </Form>

      <LinkSection>
        {currentPage === "Sign up"
          ? "Already have an account?"
          : "Don't have an account?"}
        <SignLink
          onClick={() =>
            setCurrentPage(currentPage === "Sign up" ? "Sign in" : "Sign up")
          }
        >
          {currentPage === "Sign up" ? "Sign In" : "Sign Up"}
        </SignLink>
        <Toaster position="bottom-center" reverseOrder={false} />
      </LinkSection>
    </Container>
  );
}
