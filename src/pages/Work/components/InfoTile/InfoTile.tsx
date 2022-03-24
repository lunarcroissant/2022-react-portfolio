import Text, {
  TextColour,
  TextSize,
} from "../../../../components/base/Text/Text";
import Tag from "../../../../components/base/Tag/Tag";
import "./InfoTile.css";
import VerticalSpacing from "../../../../components/base/VerticalSpacing/VerticalSpacing";
import Button, { ButtonType } from "../../../../components/base/button/Button";
import HorizontalDivider from "../../../../components/base/HorizontalDivider/HorizontalDivider";
import Icon from "../../../../components/base/Icon/Icon";
import { useState } from "react";

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
  console.log(title);

  const [showInfoTile, setShowInfoTile] = useState(true);

  return (
    <div
      className={`col infoTile ${showInfoTile ? null : "hidden"} `}
      key={imageSource}
    >
      {false ? <img className="infoTile__image" /> : null}
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
        <Icon
          size="sm"
          icon={"arrow"}
          isButton
          handleClick={() => {
            setShowInfoTile(!showInfoTile);
          }}
        />
        {/* <button>
          <img
            src={`${process.env.PUBLIC_URL}/arrow.svg`}
            alt=""
            className="infoTile__hideIcon"
          />
        </button> */}
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
            return <Tag text={tag} />;
          })}
        </div>
      </div>
      <VerticalSpacing size="lg" />
      <HorizontalDivider />
      <VerticalSpacing size="sm" />
      <Button buttonVariant={ButtonType.primary}>View Case Study</Button>
    </div>
  );
};

export default InfoTile;
