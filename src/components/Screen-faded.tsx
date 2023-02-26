import React from "react";
import styled from "styled-components";
import { RefreshContext } from "../providers/refresh";

interface ScreenGrayProps {
    readonly isColored: boolean
}

export default function ScreenGray() {
 const { setIsOpen, setIsOpenCreateTransaction, setIsOpenSettings, isOpenSettings } =
  React.useContext(RefreshContext);
 document.getElementById("gray-screen")?.addEventListener("click", function () {
  setIsOpen(false);
  setIsOpenCreateTransaction(false);
  setIsOpenSettings(false);
 });

 return <ScreenDiv id="gray-screen" isColored={isOpenSettings}></ScreenDiv>;
}

const ScreenDiv = styled.div<ScreenGrayProps>`
 background-color: ${(props) => props.isColored ? "rgb(83, 83, 83, 0.0)" : "rgb(83, 83, 83, 0.5)"};
 width: 100%;
 height: 100%;
 position: absolute;
 z-index: 1;
`;
