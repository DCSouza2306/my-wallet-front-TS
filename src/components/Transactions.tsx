import styled from "styled-components";
import TransactionsValues from "./Values-transactions";

interface Props {
 readonly inputMonth: string;
 readonly setInputhMonth: (arg0: string) => void;
}

export default function Transacions(props: Props) {
 return (
  <TransactionsDiv>
   <input
    className="input-month"
    type="month"
    value={props.inputMonth}
    onChange={(e) => props.setInputhMonth(e.target.value)}
   />
   <div className="header-transactions">
    <p>Data</p>
    <p>Descrição</p>
    <p>Valor</p>
   </div>
   <div className="values-transactions" >
    <TransactionsValues />
    <TransactionsValues />
    <TransactionsValues />
    <TransactionsValues />
    <TransactionsValues />
   </div>
  </TransactionsDiv>
 );
}

const TransactionsDiv = styled.div`
 width: 930px;
 height: 580px;
 background-color: #ffffff;
 border-radius: 10px;
 font-family: "Raleway";
 .input-month {
  border-radius: 6px;
  font-family: "Raleway";
  font-size: 24px;
  border: 3px solid #6618b5;
  width: 260px;
  height: 50px;
  display: block;
  margin: 15px auto;
  :focus {
   box-shadow: 0 0 0 0;
   outline: 0;
  }
 }
 .header-transactions{
    display: flex;
    width: 670px;
    margin: 25px 180px 15px auto;
    justify-content: space-between;
    font-weight: 700;
    font-size: 20px;
 }
 .values-transactions{
    width: 880px;
    border-top: 2px solid #6618B5;
    margin: 0 auto;
    padding-top: 20px;
 }
`;
