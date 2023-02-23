import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import ButtonsTransactions from "../components/Buttons-transactions";
import Transacions from "../components/Transactions";
import TotalValues from "../components/Total-values";
import styled from "styled-components";

export default function HomePage() {
 const [inputMonth, setInputMonth] = useState("");
 const [month, setMonth] = useState(0);
 const [year, setYear] = useState(0);
 const navigate = useNavigate();

 useEffect(() => {
  if (inputMonth.length > 0) {
   const splited = inputMonth.split("-");
   setMonth(parseInt(splited[1]));
   setYear(parseInt(splited[0]));
   console.log(month);
  }
 }, [inputMonth]);

 return (
  <HomeSection>
   <Header />
   <div className="transactions">
    <div className="left-side-transactions">
     <TotalValues type="total-income" />
     <TotalValues type="total-expense" />
     <TotalValues type="balance" />
    </div>
    <div className="right-side-transactions">
     <Transacions inputMonth={inputMonth} setInputhMonth={setInputMonth} />
     <div className="buttons-transactions">
      <ButtonsTransactions type="income" />
      <ButtonsTransactions type="expense" />
     </div>
    </div>
   </div>
  </HomeSection>
 );
}

const HomeSection = styled.section`
 background-color: #220926;
 height: 100vh;
 .transactions {
  display: flex;
  max-width: 1380px;
  margin: 25px auto 0 auto;
  justify-content: space-between;
  .left-side-transactions {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 580px;
   width: 350px;
  }
  .right-side-transactions {
   display: flex;
   flex-direction: column;
   .buttons-transactions {
    width: 930px;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
   }
  }
 }
`;
