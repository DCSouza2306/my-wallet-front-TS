import React, { SyntheticEvent, useState } from "react";
import styled from "styled-components";
import axios, { AxiosError } from "axios";
import userData from "../constants/user-storage";
import { RefreshContext } from "../providers/refresh";
import { URL_BASE } from "../constants/constansts";

interface Props {
 readonly setOpen: (arg0: boolean) => void;
}

export default function CreateTransaction(props: Props) {
 const {
  typeTransaction: type,
  setRefresh,
  refresh,
 } = React.useContext(RefreshContext);
 const [value, setValue] = useState("");
 const [description, setDescription] = useState("");
 const [dateTransaction, setDateTransaction] = useState("");
 const [enable, setEnable] = useState(false);
 const user = userData();

 function closeCreateModal() {
  props.setOpen(false);
 }

 function newTransaction(e: SyntheticEvent) {
  e.preventDefault();

  const newTransaction = {
   value: parseInt(value),
   type: type === "Receita" ? "income" : "expense",
   description,
   dateTransaction,
  };

  axios
   .post(`${URL_BASE}/transactions`, newTransaction, {
    headers: { Authorization: `Bearer ${user.token}` },
   })
   .then((res) => {
    alert("foi");
    props.setOpen(false);
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
  <CreateTransactionDiv>
   <div className="create-transaction-modal">
    <h2>Inserir Nova {type}</h2>
    <form onSubmit={newTransaction}>
     <div>
      <label htmlFor="value">Valor</label>
      <input
       type="number"
       id="value-create"
       value={value}
       onChange={(e) => setValue(e.target.value)}
       disabled={enable}
       required
      />
     </div>
     <div>
      <label htmlFor="date">Data</label>
      <input
       type="date"
       id="date-create"
       value={dateTransaction}
       onChange={(e) => setDateTransaction(e.target.value)}
       disabled={enable}
       required
      />
     </div>

     <div>
      <div>
       <label htmlFor="description">Descrição</label>
       <input
        type="text"
        id="description-create"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={enable}
        required
       />
      </div>
     </div>
     <button type="submit">Salvar</button>
    </form>

    <button onClick={() => closeCreateModal()} className="button-close">
     Cancelar
    </button>
   </div>
  </CreateTransactionDiv>
 );
}

const CreateTransactionDiv = styled.div`
 width: 100%;
 height: 100%;
 position: absolute;
 top: 0;
 left: 0;
 z-index: 10;
 background-color: rgb(83, 83, 83, 0.5);
 display: flex;
 justify-content: center;
 padding-top: 230px;
 font-family: "Raleway";
 .create-transaction-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 700px;
  height: 400px;
  border-radius: 50px;
  position: fixed;
  h2 {
   font-size: 28px;
  }
  form {
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   height: 300px;
   width: 600px;
   label {
    font-size: 24px;
   }
   input {
    height: 40px;
    font-size: 24px;
    border-radius: 5px;
    border: 1px solid #6618b5;
    :focus {
     box-shadow: 0 0 0 0;
     outline: 0;
    }
   }
   button {
    width: 300px;
    margin: 0 auto;
    height: 40px;
    font-size: 24px;
    border: none;
    border-radius: 6px;
    background-color: #d199da;
    color: #ffffff;
    cursor: pointer;
   }
   #value-create {
    width: 200px;
    margin-left: 20px;
   }
   #date-create {
    margin-left: 26px;
   }
   #description-create {
    margin-left: 26px;
    width: 450px;
   }
  }

  .button-close {
   font-family: "Raleway";
   width: 100px;
   height: 25px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #220926;
   color: #ffffff;
   border: none;
   border-radius: 5px;
   :hover {
    cursor: pointer;
   }
  }
 }
`;
