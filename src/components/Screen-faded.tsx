import React from "react";
import styled from "styled-components";
import { RefreshContext } from "../providers/refresh";

export default function ScreenGray(){
    const {setIsOpen} = React.useContext(RefreshContext)
    document.getElementById("gray-screen")?.addEventListener("click", function () {
        setIsOpen(false)
    })
    return (<ScreenDiv id="gray-screen"></ScreenDiv>)
}

const ScreenDiv = styled.div`
    background-color: rgb(83, 83, 83, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
`