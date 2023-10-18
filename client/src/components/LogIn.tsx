import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  setSignIn,
  setSignUp,
} from "../context/features/current-page/currentPageSlice";
import { useTypedSelector } from "../hooks/useTypedSelector";
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
import { login } from "../utils/signIn";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const { currentPage } = useTypedSelector((state) => state.currentPage);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function resetForm() {
    setFormData({
      email: "",
      password: "",
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (currentPage === "Sign up") {
      await login({
        method: "register",
        formData,
        resetForm,
        dispatch,
        toast,
        toastMessage: "Successfully registered!",
        navigate,
      });
    } else {
      await login({
        method: "login",
        formData,
        resetForm,
        dispatch,
        toast,
        toastMessage: "You are signed in",
        navigate,
      });
    }
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
            currentPage === "Sign in"
              ? dispatch(setSignUp()) && resetForm()
              : dispatch(setSignIn()) && resetForm()
          }
        >
          {currentPage === "Sign up" ? "Sign In" : "Sign Up"}
        </SignLink>
      </LinkSection>
      <Toaster position="bottom-center" />
    </Container>
  );
}
