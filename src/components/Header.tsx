import styled from "styled-components";
import IonIcon from '@reacticons/ionicons';
import userData from "../constants/user-storage";


export default function Header() {
  const user = userData()
 return (
  <HeaderDiv>
   <h1>My Wallet</h1>
   <div className="user-settings">
    <img src={`${user.url_image}`} alt="user logo" />
    <>
     <p className="user-settings-name">Olá, {user.name}</p>
     <IonIcon className="user-chevron" name="chevron-down-outline"></IonIcon>
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
  .user-chevron{
    color: #ffffff;
    font-size: 25px;
    :hover{
        cursor: pointer;
    }
  }
 }
`;
