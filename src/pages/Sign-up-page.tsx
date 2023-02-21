import { LoginAndSignUpSection } from "./Login-page";
import { Link, useNavigate } from "react-router-dom";
import { ErrorInfo, SyntheticEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { URL_BASE } from "../constants/constansts";

export default function SignUpPage() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [urlImage, setUrlImage] = useState("");
 const [enable, setEnable] = useState(false);
 const navigate = useNavigate()

 function signUpUser(e: SyntheticEvent) {
  e.preventDefault();
  setEnable(true);

  const newUser = {
    name,
    email,
    password,
    url_image: urlImage
  }

  axios.post(`${URL_BASE}/users/sign-up`, newUser).then((res) => {
    alert("Usuario criado com sucesso");
    navigate("/")
  }).catch((err: AxiosError | Error) => {
    if(axios.isAxiosError(err)){
      alert(err.response?.data.message);
      console.log(err)
      setEnable(false)
    } else{
      alert(err.message)
    }
  })

 }
 return (
  <LoginAndSignUpSection>
   <div className="left-div">
    <h1>My Wallet</h1>
    <h2>Organize e planeje suas finanças</h2>
   </div>

   <div className="right-div">
    <form onSubmit={signUpUser}>
     <input
      type="text"
      placeholder="nome"
      disabled={enable}
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
     />
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
     <input
      type="text"
      placeholder="url imagem"
      disabled={enable}
      value={urlImage}
      onChange={(e) => setUrlImage(e.target.value)}
      required
     />
     <button className="button-login">Cadastrar</button>
    </form>
    <Link to="/">
     <button type="submit" className="button-redirect">
      Já possui cadastro? Entre agora
     </button>
    </Link>
   </div>
  </LoginAndSignUpSection>
 );
}
