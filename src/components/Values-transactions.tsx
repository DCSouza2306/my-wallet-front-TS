import styled from "styled-components";
import IonIcon from "@reacticons/ionicons";
import axios, { AxiosError } from "axios";
import { URL_BASE } from "../constants/constansts";
import userData from "../constants/user-storage";
import { RefreshContext } from "../providers/refresh";
import React from "react";

interface Props {
 readonly transaction: {
  id: string;
  value: number;
  description: string;
  type: string;
  dateTransaction: string;
 };
}

interface ColorProps {
 readonly typeColor: string;
}

export default function TransactionsValues(props: Props) {
 const {
  setRefresh,
  refresh,
  isOpen,
  setIsOpen,
  setTransaction,
  typeTransaction,
 } = React.useContext(RefreshContext);
 const { id, value, description, dateTransaction, type } = props.transaction;

 const user = userData();

 function openModal() {
  setIsOpen(true);
  setTransaction(props.transaction);
 }
 function deleteTransaction() {
  axios
   .delete(`${URL_BASE}/transactions/${id}`, {
    headers: { Authorization: `Bearer ${user.token}` },
   })
   .then((res) => {
    setRefresh(!refresh);
   })
   .catch((e: AxiosError | Error) => {
    if (axios.isAxiosError(e)) {
     console.log(e);
    } else {
     console.log(e);
    }
   });
 }
 return (
  <ValuesTransactionsDiv
   typeColor={type === "income" ? "#219A2D" : "#CC141F"}
  >
   <p className="date">{dateTransaction.substring(0, 10)}</p>
   <p className="description">{description}</p>
   <p className="value">R$ {value.toFixed(2)}</p>
   <div className="buttons-edit-delete">
    <IonIcon
     className="delete-button"
     name="trash-outline"
     onClick={() => deleteTransaction()}
    ></IonIcon>
    <IonIcon
     onClick={() => openModal()}
     className="edit-button"
     name="create-outline"
    ></IonIcon>
   </div>
  </ValuesTransactionsDiv>
 );
}

const ValuesTransactionsDiv = styled.div<ColorProps>`
 display: flex;
 margin-bottom: 20px;
 font-size: 18px;
 .date {
  width: 250px;
  display: flex;
  align-items: flex-start;
  padding-left: 30px;
 }
 .description {
  width: 400px;
  display: flex;
  align-items: flex-start;
 }
 .value {
  width: 150px;
  display: flex;
  align-items: flex-start;
  color: ${(props) => props.typeColor}
 }
 .buttons-edit-delete {
  width: 50px;
  display: flex;
  justify-content: space-between;
  .edit-button,
  .delete-button {
   :hover {
    cursor: pointer;
   }
  }
 }
`;
