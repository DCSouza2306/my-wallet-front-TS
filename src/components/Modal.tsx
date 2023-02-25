import styled from "styled-components";
import { RefreshContext } from "../providers/refresh";
import React, { useState } from "react";

interface PropsModal {
 isOpen: boolean;
 onRequestClose: () => void;
}

export default function CustomModal(props: PropsModal) {
 const { setIsOpen, transaction } = React.useContext(RefreshContext);
 const [value, setValue] = useState(transaction.value.toString());
 const [description, setDescription] = useState(transaction.description);
 const [type, setType] = useState(transaction.type);
 const [date, setDate] = useState(transaction.dateTransaction);
 const [checkbox, setCheckbox] = useState(true);
 const [enable, setEnable] = useState(true);

 function handleCheckbox(typeTransaction: string) {
  setCheckbox(!checkbox);
  setType(typeTransaction);
 }

 function closeModal() {
  setIsOpen(false);
 }

 function handleEditModal() {
  setEnable(!enable);
 }
 return (
  <ModalDiv>
   <div className="container-modal">
    <form>
     <div className="value-date-inputs">
      <div>
       <label htmlFor="value">Valor</label>
       <input
        type="number"
        id="value"
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
        id="date"
        value={date.substring(0, 10)}
        onChange={(e) => setDate(e.target.value)}
        disabled={enable}
        required
       />
      </div>
     </div>

     <div>
      <div>
       <label htmlFor="description">Descrição</label>
       <input
        type="text"
        id="description"
        value={description}
        disabled={enable}
        required
       />
       <div className="income-expense-checkbox">
        <div>
         <label htmlFor="income-checkbox">Receita</label>
         <input
          type="radio"
          id="income-checkbox"
          onChange={() => handleCheckbox("income")}
          checked={transaction.type === "income" ? checkbox : !checkbox}
          disabled={enable}
          required
         />
        </div>
        <div>
         <label htmlFor="expense-checkbox">Despesa</label>
         <input
          type="radio"
          id="expense-checkbox"
          onChange={() => handleCheckbox("expense")}
          checked={transaction.type === "expense" ? checkbox : !checkbox}
          disabled={enable}
          required
         />
        </div>
       </div>
      </div>
     </div>
    </form>
    <div className="edit-save-modal">
     <button hidden={!enable} onClick={() => handleEditModal()}>
      Editar
     </button>
     <button hidden={enable} onClick={() => handleEditModal()}>
      Salvar
     </button>
     <button hidden={enable} onClick={() => handleEditModal()}>
      Cancelar
     </button>
    </div>
    <button className="close-modal" onClick={() => closeModal()}>
     Fechar
    </button>
   </div>
  </ModalDiv>
 );
}

const ModalDiv = styled.div`
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
 .container-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 700px;
  height: 400px;
  border-radius: 50px;
  position: fixed;
  form {
   display: flex;
   flex-direction: column;
   width: 600px;
   height: 250px;
   justify-content: space-evenly;
   .value-date-inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
   }
   input {
    border: 1px solid #6618b5;
    :focus {
     box-shadow: 0 0 0 0;
     outline: 0;
    }
   }
   label {
    font-size: 24px;
    margin-right: 10px;
   }
   input[type="radio"] {
    border: 1px solid #6618b5;
    width: 25px;
    height: 30px;
    vertical-align: middle;
   }
   .income-expense-checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    div {
     display: flex;
     align-items: center;
    }
   }
   #value,
   #date {
    width: 200px;
    height: 50px;
    font-size: 24px;
    border-radius: 6px;
   }
   #description {
    width: 475px;
    height: 50px;
    font-size: 24px;
    border-radius: 6px;
   }
  }
  .edit-save-modal {
    width: 300px;
    display: flex;
    justify-content: space-evenly;
   button {
    width: 120px;
    height: 30px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    background-color: #d199da;
    color: #ffffff;
    :hover {
     cursor: pointer;
    }
   }
  }
  .close-modal {
   font-family: "Raleway";
   margin-top: 20px;
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
