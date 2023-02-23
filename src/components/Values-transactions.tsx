import styled from "styled-components";
import IonIcon from "@reacticons/ionicons";

export default function TransactionsValues() {
 return (
  <ValuesTransactionsDiv>
   <p className="date">01/02/2023</p>
   <p className="description">Salário</p>
   <p className="value">R$ 3000,00</p>
   <div className="buttons-edit-delete">
    <IonIcon className="delete-button" name="trash-outline"></IonIcon>
    <IonIcon className="edit-button" name="create-outline"></IonIcon>
   </div>
  </ValuesTransactionsDiv>
 );
}

const ValuesTransactionsDiv = styled.div`
 display: flex;
 margin-bottom: 20px;
 font-size: 18px;
 .date {
  width: 250px;
  padding-left: 40px;
 }
 .description {
  width: 400px;
 }
 .value {
  width: 150px;
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
