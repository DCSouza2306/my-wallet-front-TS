import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import ButtonsTransactions from "../components/Buttons-transactions";
import Transacions from "../components/Transactions";
import TotalValues from "../components/Total-values";
import styled from "styled-components";
import axios, { AxiosError } from "axios";
import { URL_BASE } from "../constants/constansts";
import userData from "../constants/user-storage";
import { RefreshContext } from "../providers/refresh";
import CustomModal from "../components/Modal-edit";
import CreateTransaction from "../components/Modal-create";
import dayjs from "dayjs";
import ScreenGray from "../components/Screen-faded";
import Settings from "../components/Settings-box";
import User from "../components/Modal-user";

export default function HomePage() {
 const { refresh, isOpen, setIsOpen, openCreateTransaction, isOpenSettings } =
  React.useContext(RefreshContext);
 const [openUserModal, setOpenUserModal] = useState(false);
 const [inputMonth, setInputMonth] = useState(
  dayjs().toISOString().substring(0, 7)
 );
 const [transactions, setTransactions] = useState([
  {
   id: "",
   value: 0,
   description: "",
   type: "",
   dateTransaction: "",
  },
 ]);
 const navigate = useNavigate();
 const user = userData();
 const token = user.token;
 const config = {
  headers: { Authorization: `Bearer ${token}` },
 };

 function closeModal() {
  setIsOpen(true);
 }
 useEffect(() => {
  if (inputMonth.length > 0) {
   const splited = inputMonth?.split("-");
   const month = splited[1];
   const year = splited[0];

   axios
    .get(`${URL_BASE}/transactions?month=${month}&year=${year}`, config)
    .then((res) => {
     setTransactions(res.data);
    })
    .catch((e: AxiosError | Error) => {
     if (axios.isAxiosError(e)) {
      console.log(e);
     } else {
      console.log(e);
     }
    });
  }
 }, [refresh, inputMonth]);

 return (
  <HomeSection>
   {isOpen || openCreateTransaction || isOpenSettings || openUserModal ? (
    <ScreenGray
     setOpenUserModal={setOpenUserModal}
    />
   ) : null}
   <Settings
    openUserModal={openUserModal}
    setOpenUserModal={setOpenUserModal}
   />
   <Header />
   {openCreateTransaction ? <CreateTransaction /> : null}
   {isOpen ? <CustomModal /> : null}
   {openUserModal ? <User setOpenUserModal={setOpenUserModal} /> : null}

   <div className="transactions">
    <div className="left-side-transactions">
     <TotalValues type="total-income" transactions={transactions} />
     <TotalValues type="total-expense" transactions={transactions} />
     <TotalValues type="balance" transactions={transactions} />
    </div>
    <div className="right-side-transactions">
     <Transacions
      inputMonth={inputMonth}
      setInputhMonth={setInputMonth}
      transactions={transactions}
     />
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
