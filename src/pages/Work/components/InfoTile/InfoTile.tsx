import Text, {
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
}

const InfoTile = ({
  title,
  description,
  tags,
  imageSource,
  backgroundColour,
}: IProps) => {
  // const projects = data.map((project: any) => {
  //   return project;
  // });

  const { setMobileMenuVisible } = useContext(GlobalContext);
  const { setShowCaseStudy } = useContext(PageContext);

  const isMobile = useViewportSize(768);

  const [showInfoTile, setShowInfoTile] = useState(true);

  if (isMobile) {
    return (
      <div className="infoTile col">
        <div className="row justify-between infoTile__about">
          <div className="col infoTile__copy">
            <Text
              colour={TextColour.primaryDark}
              size={TextSize.xl}
              opacity="1"
            >
              {title}
            </Text>
            <VerticalSpacing size="xs" />
            <Text
              colour={TextColour.primaryDark}
              size={TextSize.sm}
              opacity="0.8"
            >
              {description}
            </Text>
          </div>
          <Tag text={"UI"} />
        </div>
        <VerticalSpacing size="md" />
        <div className="row infoTile__actions">
          <Button
            buttonVariant={ButtonType.primary}
            handleClick={() => setShowCaseStudy(true)}
          >
            Read Case Study
          </Button>
          <Icon
            isButton
            size="md"
            background={Backgrounds.transparentWhite}
            icon="icons_hamburgerMenu--darkPrimary"
            handleClick={() => setMobileMenuVisible(true)}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`col infoTile ${showInfoTile ? null : "hidden"} `}
      key={imageSource}
    >
      {false ? (
        <img className="infoTile__image" alt="This is a placeholder" />
      ) : null}
      <div className="row justify-between align-start">
        <div className="col width-90">
          <Text
            colour={TextColour.primaryDark}
            size={TextSize.xs}
            opacity="0.5"
          >
            Project
          </Text>
          <VerticalSpacing size="xs" />
          <Text colour={TextColour.primaryDark} size={TextSize.lg} opacity="1">
            {title}
          </Text>
        </div>
        {isMobile ? (
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
        )}
      </div>
      <div className="col width-100">
        <VerticalSpacing size="md" />
        <Text colour={TextColour.primaryDark} size={TextSize.xs} opacity="0.5">
          Overview
        </Text>
        <VerticalSpacing size="xs" />
        <Text colour={TextColour.primaryDark} size={TextSize.lg} opacity="1">
          {description}
        </Text>
      </div>
      <div className="col width-100">
        <VerticalSpacing size="md" />
        <Text colour={TextColour.primaryDark} size={TextSize.xs} opacity="0.5">
          Tags
        </Text>
        <VerticalSpacing size="xs" />
        <div className="row">
          {tags.map((tag) => {
            return <Tag text={tag} key={tag} />;
          })}
        </div>
      </div>
      <VerticalSpacing size="lg" />
      <HorizontalDivider />
      <VerticalSpacing size="sm" />
      <Button
        buttonVariant={ButtonType.primary}
        handleClick={() => setShowCaseStudy(true)}
      >
        View Case Study
      </Button>
    </div>
  );
};

export default InfoTile;
