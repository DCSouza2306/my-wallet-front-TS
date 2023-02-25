import React from "react";
import styled from "styled-components";
import { RefreshContext } from "../providers/refresh";

export default function ScreenGray() {
 const { setIsOpen, setIsOpenCreateTransaction } =
  React.useContext(RefreshContext);
 document.getElementById("gray-screen")?.addEventListener("click", function () {
  setIsOpen(false);
  setIsOpenCreateTransaction(false);
 });

 return <ScreenDiv id="gray-screen"></ScreenDiv>;
}

const ScreenDiv = styled.div`
 background-color: rgb(83, 83, 83, 0.5);
 width: 100%;
 height: 100%;
 position: absolute;
 z-index: 1;
`;
