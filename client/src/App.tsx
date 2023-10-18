import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HeaderBar from "./components/Header";
import DealsPage from "./pages/DealsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/open-deals" element={<DealsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
