import React, { createContext, ReactNode, useContext, useState } from "react";

const AppContext = createContext({
  task: [{ name: "" }],
  setTask: (task: any) => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  //change context values
  const [task, setTask] = useState([
    { name: "Task 1" },
    {
      name: "Task 2",
    },
    { name: "Task 1" },
    {
      name: "Task 2",
    },
    { name: "Task 1" },
    {
      name: "Task 2",
    },
  ]);

  return (
    <AppContext.Provider value={{ task, setTask }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
