import { createContext } from "react";

const PageContext = createContext<any>({
  activePage: 0,
  totalPages: null,
});

export default PageContext;
