import Text, { TextSize } from "../../../../components/base/Text/Text";
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
  // console.log(data.projects);

  const [showInfoTile, setShowInfoTile] = useState(true);

  return (
    <div className={`col infoTile ${showInfoTile ? null : "hidden"} `}>
      {false ? <img className="infoTile__image" /> : null}
      <div className="row justify-between align-start">
        <div className="col width-90">
          <Text text="Project" textSize={TextSize.xs} opacity="0.5" />
          <VerticalSpacing size="xs" />
          <Text text={title} textSize={TextSize.lg} opacity="1" />
        </div>
        <Icon
          size="sm"
          icon={showInfoTile ? "arrow" : "arrow-unhide"}
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
        <Text text="Overview" textSize={TextSize.xs} opacity="0.5" />
        <VerticalSpacing size="xs" />
        <Text text={description} textSize={TextSize.lg} opacity="1" />
      </div>
      <div className="col width-100">
        <VerticalSpacing size="md" />
        <Text text="Tags" textSize={TextSize.xs} opacity="0.5" />
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
      <Button text="View Case Study" buttonVariant={ButtonType.primary} />
    </div>
  );
};

export default InfoTile;
