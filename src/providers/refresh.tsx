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
 typeTransaction: "",
 setTypeTransaction: (ar0: string) => {},
 openCreateTransaction: false, 
 setIsOpenCreateTransaction: (arg0: boolean) => {},
 isOpenSettings: false,
 setIsOpenSettings: (arg0: boolean) => {},
};

export const RefreshContext = React.createContext(initialValues);

export function RefreshProvider(props: PropsWithChildren) {
 const [refresh, setRefresh] = useState(initialValues.refresh);
 const [isOpen, setIsOpen] = useState(false);
 const [transaction, setTransaction] = useState(initialValues.transaction);
 const [typeTransaction, setTypeTransaction] = useState(initialValues.typeTransaction)
 const [openCreateTransaction, setIsOpenCreateTransaction] = useState(false);
 const [isOpenSettings, setIsOpenSettings] = useState(false)

 return (
  <RefreshContext.Provider
   value={{
    refresh,
    setRefresh,
    isOpen,
    setIsOpen,
    transaction,
    setTransaction,
    typeTransaction,
    setTypeTransaction,
    openCreateTransaction,
    setIsOpenCreateTransaction,
    isOpenSettings,
    setIsOpenSettings
   }}
  >
   {props.children}
  </RefreshContext.Provider>
 );
}
