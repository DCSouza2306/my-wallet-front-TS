import React, { useState } from "react";
import styled from "styled-components";
import userData from "../constants/user-storage";
import axios, { AxiosError } from "axios";
import { URL_BASE } from "../constants/constansts";
import { RefreshContext } from "../providers/refresh";

interface Props {
 readonly setOpenUserModal: (arg0: boolean) => void;
}

export default function User(props: Props) {
 const { refresh, setRefresh } = React.useContext(RefreshContext);
 const user = userData();
 const [enable, setEnable] = useState(true);
 const [name, setName] = useState(user.name);
 const [email, setEmail] = useState(user.email);
 const [urlImage, setUrlImage] = useState(user.url_image);

 function handleUserModal() {
  setEnable(!enable);
 }

 function updateUser() {
  setEnable(true);
  const updateUser = {
   name,
   email,
   url_image: urlImage,
  };
  axios
   .put(`${URL_BASE}/users`, updateUser, {
    headers: { Authorization: `Bearer ${user.token}` },
   })
   .then((res) => {
    props.setOpenUserModal(false);
    const dataStorage = {...updateUser, token: user.token}
    localStorage.setItem("authValidation", JSON.stringify(dataStorage));
   }).catch((e: AxiosError | Error) => {
    if(axios.isAxiosError(e)){
        console.log(e)
    } else {
        console.log(e)
    }
   });
 }

 function closeUserModal() {
  props.setOpenUserModal(false);
 }
 return (
  <UserDiv>
   <h2>Editar Usuario</h2>
   <form>
    <div>
     <label htmlFor="name">Nome</label>
     <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      disabled={enable}
      required
     />
    </div>
    <div>
     <label htmlFor="email">Email</label>
     <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      disabled={enable}
      required
     />
    </div>

    <div>
     <label htmlFor="url-image">Imagem</label>
     <input
      type="url"
      id="url-image"
      value={urlImage}
      onChange={(e) => setUrlImage(e.target.value)}
      disabled={enable}
      required
     />
    </div>
   </form>
   <div className="edit-save-user-modal">
    <button hidden={!enable} onClick={() => handleUserModal()}>
     Editar
    </button>
    <button hidden={enable} onClick={() => updateUser()}>
     Salvar
    </button>
    <button hidden={enable} onClick={() => handleUserModal()}>
     Cancelar
    </button>
   </div>
   <button className="close-user-modal" onClick={() => closeUserModal()}>
    Fechar
   </button>
  </UserDiv>
 );
}

const UserDiv = styled.div`
 z-index: 10;
 font-family: "Raleway";
 width: 700px;
 height: 400px;
 position: fixed;
 top: 180px;
 right: 30%;
 border-radius: 50px;
 background-color: #ffffff;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-evenly;
 padding: 25px 0;
 h2 {
  font-size: 28px;
 }
 form {
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 250px;
  justify-content: space-evenly;
  align-items: center;
  div {
   width: 400px;
   display: flex;
   justify-content: space-between;
   align-items: center;
  }
  label {
   font-size: 24px;
  }
  input {
   height: 50px;
   width: 300px;
  }
 }

 .edit-save-user-modal {
  width: 700px;
  display: flex;
  justify-content: space-evenly;
  button {
   width: 300px;
   margin: 0 auto;
   height: 40px;
   font-size: 24px;
   border: none;
   border-radius: 6px;
   background-color: #d199da;
   color: #ffffff;
   :hover {
    cursor: pointer;
   }
  }
 }

 .close-user-modal {
  font-family: "Raleway";
  margin-top: 20px;
  width: 100px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #220926;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  :hover {
   cursor: pointer;
  }
 }
`;
