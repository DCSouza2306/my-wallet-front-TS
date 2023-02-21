import styled from "styled-components";
import { LoginAndSignUpSection } from "./Login-page";
import { Link } from "react-router-dom";

export default function SignUpPage(){
    return(
        <LoginAndSignUpSection>
        <div className="left-div">
         <h1>My Wallet</h1>
         <h2>Organize e planeje suas finanças</h2>
        </div>
     
        <div className="right-div">
         <form>
         <input type="text" placeholder="nome" required />
          <input type="email" placeholder="email" required />
          <input type="password" placeholder="senha" required />
          <input type="text" placeholder="url imagem" required />
          <button className="button-login">Entrar</button>
         </form>
         <Link to="/">
          <button className="button-redirect">
           Já possui cadastro? Entre agora
          </button>
         </Link>
        </div>
       </LoginAndSignUpSection>
    )
}