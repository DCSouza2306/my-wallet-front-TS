import styled from "styled-components";
import IonIcon from "@reacticons/ionicons";
import userData from "../constants/user-storage";
import { RefreshContext } from "../providers/refresh";
import axios from "axios";
import React from "react";

interface Props {
 readonly type: string;
 readonly open: boolean;
 readonly setOpen: (arg0: boolean) => void
}

export default function ButtonsTransactions(props: Props) {
 const type = props.type === "income" ? "Receita" : "Despesa";
 const arrow =
  props.type === "income" ? "arrow-up-outline" : "arrow-down-outline";
 const user = userData();
 const { setRefresh, refresh, setTypeTransaction } = React.useContext(RefreshContext);

 function newTransaction() {
    props.setOpen(!props.open)
    setTypeTransaction(type)
 }
 return (
  <ButtonsDiv onClick={() => newTransaction()}>
   <p>Nova {type}</p>
   <IonIcon name={arrow}></IonIcon>
  </ButtonsDiv>
 );
}

const ButtonsDiv = styled.button`
 font-size: 26px;
 color: #ffffff;
 width: 430px;
 height: 106px;
 background-color: #d199da;
 border-radius: 6px;
 font-family: "Raleway";
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 30px;
 :hover {
  cursor: pointer;
 }
`;
