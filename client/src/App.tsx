import HeaderBar from "./components/Header";
import ForgotPassword from "./components/auth/ForgotPassword";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DealsPage from "./pages/DealsPage";

function App() {
  return (
    <Router>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/sign-in"
          element={
            <LoginPage>
              <SignIn />
            </LoginPage>
          }
        />
        <Route
          path="/sign-up"
          element={
            <LoginPage>
              <SignUp />
            </LoginPage>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <LoginPage>
              <ForgotPassword />
            </LoginPage>
          }
        />
        <Route path="/open-deals" element={<DealsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
