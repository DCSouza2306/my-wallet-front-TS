import GlobalStyle from "./Global-style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login-page";
import SignUpPage from "../pages/Sign-up-page";
import HomePage from "../pages/Home-page";
import Modal from "react-modal";
Modal.setAppElement("#root")

function App() {
 return (
  <BrowserRouter>
   <GlobalStyle />
   <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/sign-up" element={<SignUpPage />} />
    <Route path="/home" element={<HomePage />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
