import GlobalStyle from "./Global-style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login-page";

function App() {
 return (
  <BrowserRouter>
   <GlobalStyle />
   <Routes>
    <Route path="/" element={<LoginPage />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
