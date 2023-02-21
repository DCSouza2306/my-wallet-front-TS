import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import styled from "styled-components";

export default function HomePage() {
 const userStorage = localStorage.getItem("authValidation");
 const [enable, setEnable] = useState(true);
 const navigate = useNavigate();
 function apagardados() {
  localStorage.clear();
  setEnable(!enable);
 }

 useEffect(() => {
  if (!userStorage) {
   navigate("/");
  }
 }, [enable]);
 return (
  <HomeSection>
  <Header />
   {userStorage}
   <button onClick={() => apagardados()}>teste</button>
  </HomeSection>
 );
}

const HomeSection = styled.section`
    background-color:#220926;
    height: 100vh;
`
