import styled from "styled-components";
import { RefreshContext } from "../providers/refresh";
import React from "react";
import IonIcon from "@reacticons/ionicons";
import { useNavigate } from "react-router";

interface SettingsProps {
 readonly displaySettings: boolean;
}

interface Props {
   readonly openUserModal: boolean,
   readonly setOpenUserModal: (arg0: boolean) => void;
}

export default function Settings(props: Props) {
 const { isOpenSettings, setIsOpenSettings, refresh, setRefresh } = React.useContext(RefreshContext);
 const navigate = useNavigate()
 function logout(){
    navigate("/");
    setIsOpenSettings(false);
    localStorage.clear()
 }

 function openUserModal(){
   props.setOpenUserModal(true)
   setIsOpenSettings(false);
   setRefresh(!refresh)
 }
 return (
  <SettingsDiv displaySettings={isOpenSettings}>
   <div className="settings-div" onClick={() => openUserModal()}>
   <IonIcon name="person-outline"></IonIcon>
    <p>Usuário</p>
   </div>
   <div className="line"></div>
   <div className="settings-div" onClick={() => logout()}>
   <IonIcon name="log-out-outline"></IonIcon>
    <p>Sair</p>
   </div>
  </SettingsDiv>
 );
}

const SettingsDiv = styled.div<SettingsProps>`
 background-color: #d199da;
 width: 200px;
 height: 120px;
 position: fixed;
 right: 0;
 top: 80px;
 border-radius: 0 0 0 20px;
 transition: transform 1s;
 transform: ${(props) => (props.displaySettings ? "" : "translate(200px)")};
 z-index: 10;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
    .line{
        width: 180px;
        height: 1px;
        background-color: #FFFFFF;
    }
 .settings-div{
    color: #FFFFFF;
    font-family: "Raleway";
    font-size: 24px;
    display: flex;
    height: 50px;
    align-items: center;
    width: 130px;
    p{
        margin-left: 10px;
    }
    cursor: pointer;
 }
`;
