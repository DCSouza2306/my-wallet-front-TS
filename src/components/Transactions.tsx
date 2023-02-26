import dayjs from "dayjs";
import styled from "styled-components";
import TransactionsValues from "./Values-transactions";

interface Props {
 readonly inputMonth: string;
 readonly setInputhMonth: (arg0: string) => void;
 readonly transactions: {
  id: string;
  value: number;
  description: string;
  type: string;
  dateTransaction: string;
 }[];
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
   <div className="values-transactions">
    {props.transactions.length === 0 ? (
     <p>Não há lançamentos para esse período</p>
    ) : (
     props.transactions.map((e,i) => (
      <TransactionsValues
       transaction={e}
       key={i}
      />
     ))
    )}
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
 .header-transactions {
  display: flex;
  width: 670px;
  margin: 25px 180px 15px auto;
  justify-content: space-between;
  font-weight: 700;
  font-size: 20px;
 }
 .values-transactions {
  width: 880px;
  height: 450px;
  border-top: 2px solid #6618b5;
  margin: 0 auto;
  padding-top: 20px;
  overflow: scroll;
  p {
   font-size: 24px;
   text-align: center;
  }
 }
`;
