import { useContext, useState } from "react";
import Icon from "../../../../components/base/Icon/Icon";
import Text, { TextSize } from "../../../../components/base/Text/Text";
import PageContext from "../../../../contexts/PageContext/PageContext";

import "./PageCounter.css";

interface IProps {
  data: any;
}

const PageCounter = ({ data }: IProps) => {
  // const [currentPage, setCurrentPage] = useState(0);

  const { currentPage, setCurrentPage, setTotalPages, totalPages } =
    useContext(PageContext);

  const activePage = currentPage + 1;
  const activePageString = activePage.toString();

  console.log(activePageString);

  const changeToPage = (changeAmount: number) => {
    setCurrentPage(currentPage + changeAmount);
  };

  return (
    <div className="pageCounter row align-center justify-between">
      <Icon
        size="sm"
        icon="arrow-without-line--left"
        isButton
        handleClick={() => setCurrentPage(currentPage - 1)}
      />
      <Text size={TextSize.lg} opacity="1" theme="off-white">
        {activePageString}
      </Text>
      <Text size={TextSize.lg} opacity="1" theme="off-white">
        /
      </Text>
      <Text size={TextSize.lg} opacity="1" theme="off-white">
        {totalPages}
      </Text>
      <Icon
        size="sm"
        icon="arrow-without-line--right"
        isButton
        handleClick={() => setCurrentPage(currentPage + 1)}
      />
    </div>
  );
};

export default PageCounter;
