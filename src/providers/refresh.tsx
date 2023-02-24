import React, { PropsWithChildren, useState } from "react";

const initialValues = {
  refresh: false,
  setRefresh: (arg0: boolean) => {}
}

export const RefreshContext = React.createContext(initialValues);

export function RefreshProvider(props: PropsWithChildren) {
  const [refresh, setRefresh] = useState(initialValues.refresh);

  return (
    <RefreshContext.Provider value={{ refresh, setRefresh }}>
      {props.children}
    </RefreshContext.Provider>
  );
}