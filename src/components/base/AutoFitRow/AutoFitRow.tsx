import { ReactNode } from "react";

import "./AutoFitRow.css";

interface IProps {
  minimumWidth: number | string;
  maximumWidth: number | string;
  children: ReactNode;
}

const AutoFitRow = ({ minimumWidth, maximumWidth, children }: IProps) => {
  return (
    <div
      className="autoFitRow"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${minimumWidth}px, ${maximumWidth}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default AutoFitRow;
