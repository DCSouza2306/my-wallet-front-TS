import styled from "styled-components";
import IonIcon from "@reacticons/ionicons";
import userData from "../constants/user-storage";
import React from "react";
import { RefreshContext } from "../providers/refresh";

export default function Header() {
 const { isOpenSettings, setIsOpenSettings, refresh, setRefresh } =
  React.useContext(RefreshContext);
 const user = userData();

 function openSettings() {
  setIsOpenSettings(!isOpenSettings);
  setRefresh(!refresh);
 }

 return (
  <HeaderDiv id="header">
   <h1>My Wallet</h1>
   <div className="user-settings">
    <img src={`${user.url_image}`} alt="user logo" />
    <>
     <p className="user-settings-name">Olá, {user.name}</p>
     <IonIcon
      onClick={() => openSettings()}
      className="user-chevron"
      name="chevron-down-outline"
     ></IonIcon>
    </>
   </div>
  </HeaderDiv>
 );
}

const HeaderDiv = styled.div`
 padding: 0 25px;
 height: 80px;
 background-color: rgba(102, 24, 181, 0.5);
 display: flex;
 justify-content: space-between;
 align-items: center;
 h1 {
  font-family: "Allerta Stencil", sans-serif;
  font-size: 52px;
  color: #ffffff;
 }
 .user-settings {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
   width: 60px;
   border-radius: 100%;
  }
  .user-settings-name {
   font-size: 18px;
   color: #ffffff;
   font-family: "Raleway", sans-serif;
  }
  .user-chevron {
   color: #ffffff;
   font-size: 25px;
   z-index: 10;
   :hover {
    cursor: pointer;
   }
  }
 }
`;
