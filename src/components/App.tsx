import GlobalStyle from "./Global-style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login-page";
import SignUpPage from "../pages/Sign-up-page";

function App() {
 return (
  <BrowserRouter>
   <GlobalStyle />
   <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/sign-up" element={<SignUpPage />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
