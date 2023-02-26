import React from "react";
import styled from "styled-components";
import { RefreshContext } from "../providers/refresh";

interface ScreenGrayProps {
    readonly isColored: boolean
}

interface Props{
    readonly setOpenUserModal: (arg: boolean) => void
}

export default function ScreenGray(props: Props) {
 const { setIsOpen, setIsOpenCreateTransaction, setIsOpenSettings, isOpenSettings } =
  React.useContext(RefreshContext);
 document.getElementById("gray-screen")?.addEventListener("click", function () {
  setIsOpen(false);
  setIsOpenCreateTransaction(false);
  setIsOpenSettings(false);
  props.setOpenUserModal(false)
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
