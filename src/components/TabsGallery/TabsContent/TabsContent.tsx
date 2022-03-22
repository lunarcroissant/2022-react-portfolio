import { useContext } from "react";
import TabsContext from "../contexts/TabsContext";

import "./TabsContent.css";

interface IProps {
  label: string;
  children: any;
}

const TabsContent = ({ label, children }: IProps) => {
  const { filter } = useContext(TabsContext);

  return (
    <>
      {filter === label ? (
        <div className="tabsContent" id={label}>
          {children}
        </div>
      ) : null}
    </>
  );
};

export default TabsContent;
