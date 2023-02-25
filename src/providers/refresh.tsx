import React, { PropsWithChildren, useState } from "react";

type TransactionType = {
 id: string;
 value: number;
 description: string;
 type: string;
 dateTransaction: string;
};

const initialValues = {
 refresh: false,
 setRefresh: (arg0: boolean) => {},
 isOpen: false,
 setIsOpen: (arg0: boolean) => {},
 transaction: {
  id: "",
  value: 0,
  description: "",
  type: "",
  dateTransaction: "",
 },
 setTransaction: (arg0: TransactionType) => {},
};

export const RefreshContext = React.createContext(initialValues);

export function RefreshProvider(props: PropsWithChildren) {
 const [refresh, setRefresh] = useState(initialValues.refresh);
 const [isOpen, setIsOpen] = useState(false);
 const [transaction, setTransaction] = useState(initialValues.transaction);

 return (
  <RefreshContext.Provider
   value={{
    refresh,
    setRefresh,
    isOpen,
    setIsOpen,
    transaction,
    setTransaction,
   }}
  >
   {props.children}
  </RefreshContext.Provider>
 );
}
