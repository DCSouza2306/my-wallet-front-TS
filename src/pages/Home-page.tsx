import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

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
  <>
   {userStorage}
   <button onClick={() => apagardados()}>teste</button>
  </>
 );
}
