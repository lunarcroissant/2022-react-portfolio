import { createContext } from "react";

const GlobalContext = createContext<any>({
  activePage: 0,
  totalPages: null,
});

export default GlobalContext;
