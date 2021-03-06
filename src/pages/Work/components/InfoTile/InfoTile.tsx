import Text, {
  LineHeight,
  TextColour,
  TextSize,
} from "../../../../components/base/Text/Text";
import Tag from "../../../../components/base/Tag/Tag";
import "./InfoTile.css";
import VerticalSpacing from "../../../../components/base/VerticalSpacing/VerticalSpacing";
import Button, { ButtonType } from "../../../../components/base/button/Button";
import HorizontalDivider from "../../../../components/base/HorizontalDivider/HorizontalDivider";
import Icon, { Backgrounds } from "../../../../components/base/Icon/Icon";
import { useContext, useState } from "react";
import useViewportSize from "../../../../hooks/useViewportSize/useViewportSize";
import GlobalContext from "../../../../contexts/GlobalContext/GlobalContext";
import PageContext from "../../../../contexts/PageContext/PageContext";

interface IProps {
  title: string;
  description: string;
  tags: string[];
  imageSource: string;
  backgroundColour: string;
  darkerColour: string;
}

const InfoTile = ({
  title,
  description,
  tags,
  imageSource,
  backgroundColour,
  darkerColour,
}: IProps) => {
  // const projects = data.map((project: any) => {
  //   return project;
  // });

  const { setMobileMenuVisible } = useContext(GlobalContext);
  const { showCaseStudy, setShowCaseStudy } = useContext(PageContext);

  const isMobile = useViewportSize(768);

  const [showInfoTile, setShowInfoTile] = useState(true);

  const truncateCopy = (copy: string, length?: number) => {
    if (length) {
      return copy.length > length
        ? `${copy.substring(0, length ? length : 110)}...`
        : copy;
    }

    return copy.length > 40 ? `${copy.substring(0, 110)}...` : copy;
  };

  if (isMobile) {
    return (
      <div
        className={`infoTile col ${showInfoTile ? null : "hidden"} ${
          showCaseStudy ? "fadeAway" : null
        }`}
      >
        <div className="row justify-between infoTile__about">
          <div className="col infoTile__copy">
            <VerticalSpacing size="xs" />
            <Text
              colour={TextColour.white}
              size={TextSize.size40}
              opacity="1"
              animate
            >
              {truncateCopy(title, 16)}
            </Text>
            <VerticalSpacing size="xs" />
            <Text
              colour={TextColour.offWhite}
              size={TextSize.sm}
              lineHeight={LineHeight.standard}
              opacity="1"
              animate
            >
              {/* {description} */}
              {truncateCopy(description)}
            </Text>
          </div>
        </div>
        <div className="col width-100">
          <VerticalSpacing size="md" />
          <div className="row">
            {tags.map((tag) => {
              return <Tag text={tag} key={tag} />;
            })}
          </div>
        </div>
        <VerticalSpacing size="lg" />
        <Button
          buttonVariant={ButtonType.primary}
          handleClick={() => setShowCaseStudy(true)}
        >
          View Case Study
        </Button>
        {/* <div className="row infoTile__actions">
          <Button
            buttonVariant={ButtonType.primary}
            handleClick={() => setShowCaseStudy(true)}
          >
            Read Case Study
          </Button> */}
        {/* <Icon
          isButton
          size="md"
          background={Backgrounds.transparentWhite}
          icon="icons_hamburgerMenu--darkPrimary"
          handleClick={() => setMobileMenuVisible(true)}
        /> */}
        {/* </div> */}
      </div>
    );
  }

  return (
    <div
      className={`col infoTile justify-center ${
        showInfoTile ? null : "hidden"
      } ${showCaseStudy ? "fadeAway" : null}`}
      key={imageSource}
    >
      {false ? (
        <img className="infoTile__image" alt="This is a placeholder" />
      ) : null}
      <div className="row justify-between align-start">
        <div className="col width-90">
          <Text
            colour={TextColour.white}
            size={TextSize.xs}
            opacity="0.5"
            animate
          >
            Project
          </Text>
          <VerticalSpacing size="xs" />
          <Text
            colour={TextColour.white}
            size={TextSize.size40}
            opacity="1"
            animate
          >
            {title}
          </Text>
        </div>
        {/* {isMobile ? (
          <Icon
            size="sm"
            icon={"icons_chevron-up--darkPrimary"}
            isButton
            handleClick={() => {
              setShowInfoTile(!showInfoTile);
            }}
          />
        ) : (
          <Icon
            size="sm"
            icon={"arrow"}
            isButton
            handleClick={() => {
              setShowInfoTile(!showInfoTile);
            }}
          />
        )} */}
      </div>
      <div className="col width-100">
        <VerticalSpacing size="md" />
        <Text
          colour={TextColour.offWhite}
          size={TextSize.sm}
          lineHeight={LineHeight.standard}
          opacity="1"
          animate
        >
          {description}
        </Text>
      </div>
      <div className="col width-100">
        <VerticalSpacing size="md" />
        <div className="row">
          {tags.map((tag) => {
            return <Tag text={tag} key={tag} />;
          })}
        </div>
      </div>
      <VerticalSpacing size="xl" />
      <Button
        buttonVariant={ButtonType.primary}
        handleClick={() => setShowCaseStudy(true)}
        fontColour={darkerColour}
      >
        View Case Study
      </Button>
    </div>
  );
};

export default InfoTile;
