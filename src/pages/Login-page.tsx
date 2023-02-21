import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { SyntheticEvent, useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { URL_BASE } from "../constants/constansts";

export default function LoginPage() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [enable, setEnable] = useState(false);
 const userStorage = localStorage.getItem("authValidation");
 const navigate = useNavigate();

 useEffect(() => {
  if (userStorage) {
   navigate("/home");
  }
 }, [enable]);

 function loginUser(e: SyntheticEvent) {
  e.preventDefault();
  setEnable(true);
  const user = {
   email,
   password,
  };

  axios
   .post(`${URL_BASE}/auth`, user)
   .then((res) => {
    localStorage.setItem("authValidation", JSON.stringify(res.data));
    navigate("/home");
   })
   .catch((err: Error | AxiosError) => {
    if (axios.isAxiosError(err)) {
     alert(err.response?.data.message);
     console.log(err);
     setEnable(false);
    } else {
     alert(err.message);
    }
   });
 }

 return (
  <LoginAndSignUpSection>
   <div className="left-div">
    <h1>My Wallet</h1>
    <h2>Organize e planeje suas finanças</h2>
   </div>

   <div className="right-div">
    <form onSubmit={loginUser}>
     <input
      type="email"
      placeholder="email"
      disabled={enable}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
     />
     <input
      type="password"
      placeholder="senha"
      disabled={enable}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
     />
     <button type="submit" className="button-login">
      Entrar
     </button>
    </form>
    <Link to="/sign-up">
     <button className="button-redirect">
      Não possui cadastro? Faça agora
     </button>
    </Link>
   </div>
  </LoginAndSignUpSection>
 );
}

export const LoginAndSignUpSection = styled.section`
 background-color: #d199da;
 height: 100vh;
 background-image: linear-gradient(180deg, #220926, rgba(102, 24, 181, 0.5));
 display: flex;
 .left-div {
  color: #ffffff;
  height: 200px;
  margin: auto 0 auto 100px;
  h1 {
   font-family: "Allerta Stencil", sans-serif;
   font-size: 102px;
   margin-bottom: 50px;
  }
  h2 {
   font-size: 36px;
   font-family: "Raleway", sans-serif;
  }
 }

 .right-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
  form {
   display: flex;
   flex-direction: column;

   input {
    width: 429px;
    height: 65px;
    border-radius: 6px;
    border: 1px solid #dbdbdb;
    margin-bottom: 25px;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    color: #3d3c3c;
    :focus {
     box-shadow: 0 0 0 0;
     outline: 0;
    }
   }
   .button-login {
    width: 429px;
    height: 75px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 6px;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
     rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
     rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-color: #cd76ca;
    font-family: "Raleway", sans-serif;
    color: #ffffff;
    font-size: 28px;
    :hover {
     cursor: pointer;
     text-decoration: underline;
    }
   }
  }
  .button-redirect {
   background-color: none;
   color: #ffffff;
   font-size: 18px;
   font-family: "Raleway", sans-serif;
   background-color: rgba(0, 0, 0, 0);
   border: none;
   :hover {
    cursor: pointer;
    text-decoration: underline;
   }
  }
 }
`;
