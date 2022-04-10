import { useContext, useState } from "react";
import Icon from "../../../../components/base/Icon/Icon";
import Text, {
  TextColour,
  TextSize,
} from "../../../../components/base/Text/Text";
import PageContext from "../../../../contexts/PageContext/PageContext";
import useViewportSize from "../../../../hooks/useViewportSize/useViewportSize";

import "./PageCounter.css";

interface IProps {
  data: any;
}

const PageCounter = ({ data }: IProps) => {
  // const [currentPage, setCurrentPage] = useState(0);

  const {
    currentPage,
    setCurrentPage,
    showCaseStudy,
    setTotalPages,
    totalPages,
  } = useContext(PageContext);

  const activePage = currentPage + 1;
  const activePageString = activePage.toString();

  const changeToPage = (changeAmount: number) => {
    setCurrentPage(currentPage + changeAmount);
  };

  const isMobile = useViewportSize(768);

  const sliderParentComponent = document.querySelector(
    ".fullviewportslider__content"
  );

  function scrollNextProject() {
    if (sliderParentComponent && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      sliderParentComponent.scroll({
        top: window.innerHeight * (currentPage + 1),
        behavior: "smooth",
      });
    }
  }

  function scrollPrevProject() {
    if (sliderParentComponent && currentPage > 0) {
      setCurrentPage(currentPage - 1);
      sliderParentComponent.scroll({
        top: window.innerHeight * (currentPage - 1),
        behavior: "smooth",
      });
    } else {
      //
    }
  }

  // function scrollDownOneProject() {
  //   window.scroll({
  //     top: window.,
  //     behavior: "smooth",
  //   });
  // }

  if (isMobile) {
    return (
      <div
        className={`pageCounter--mobile row ${
          showCaseStudy ? "fadeAway" : null
        }`}
      >
        <Text
          colour={TextColour.white}
          size={TextSize.xxxl}
          opacity="0.05"
          theme="off-white"
        >
          {activePageString}
        </Text>
        <Text
          colour={TextColour.white}
          size={TextSize.xxxl}
          opacity="0.05"
          theme="off-white"
        >
          /
        </Text>
        <Text
          colour={TextColour.white}
          size={TextSize.xxxl}
          opacity="0.05"
          theme="off-white"
        >
          {totalPages}
        </Text>{" "}
      </div>
    );
  }

  return (
    <div className="pageCounter col align-center justify-between">
      <Icon
        size="sm"
        icon="icons_chevron-up--white"
        isButton
        handleClick={() => scrollPrevProject()}
      />
      <div className="row">
        <Text
          colour={TextColour.white}
          size={TextSize.lg}
          opacity="1"
          theme="off-white"
        >
          {activePageString}
        </Text>
        <Text
          colour={TextColour.white}
          size={TextSize.lg}
          opacity="0.5"
          theme="off-white"
        >
          &nbsp;|&nbsp;
        </Text>
        <Text
          colour={TextColour.white}
          size={TextSize.lg}
          opacity="0.5"
          theme="off-white"
        >
          {totalPages}
        </Text>
      </div>

      <Icon
        size="sm"
        icon="icons_chevron-down--white"
        isButton
        handleClick={() => scrollNextProject()}
      />
    </div>
  );
};

export default PageCounter;
