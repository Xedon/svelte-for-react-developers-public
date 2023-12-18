import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

type GlobalStateType = {
  count: number;
  setCount: (value: number) => void;
};

const CounterContext = createContext<GlobalStateType | undefined>(undefined);

export const CounterStateProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  const globalState: GlobalStateType = {
    count,
    setCount,
  };

  return (
    <CounterContext.Provider value={globalState}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context)
    throw new Error("useCounter must be used within a CounterStateProvider");

  return context;
};
