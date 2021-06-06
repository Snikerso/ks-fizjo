import { createContext } from "react";

const WizzardContext = createContext({
    currentPage: 0,
    setCurrentPage: () => {},
  });