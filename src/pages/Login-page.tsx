import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LoginPage() {
 return (
  <LoginAndSignUpSection>
   <div className="left-div">
    <h1>My Wallet</h1>
    <h2>Organize e planeje suas finanças</h2>
   </div>

   <div className="right-div">
    <form>
     <input type="email" placeholder="email" required />
     <input type="password" placeholder="senha" required />
     <button className="button-login">Entrar</button>
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
 background-image: linear-gradient(to bottom, #220926, rgba(102, 24, 181, 0.4));
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
