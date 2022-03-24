import Button, { ButtonType } from "../base/button/Button";
import Heading, { TextColour } from "../base/Heading/Heading";
import Text, { TextSize } from "../base/Text/Text";
import VerticalSpacing from "../base/VerticalSpacing/VerticalSpacing";

import "./SplitScreen.css";

interface IProps {
  heading: string;
  copy: string;
  imageURL: string;
  primaryCTA: string;
  secondaryCTA: string;
}

const SplitScreen = ({
  heading,
  copy,
  imageURL,
  primaryCTA,
  secondaryCTA,
}: IProps) => {
  return (
    <section className="splitScreen">
      <div className="col justify-center width-70 splitScreen__copy">
        <Heading headingLevel="h1" colour={TextColour.white}>
          {heading}
        </Heading>
        <VerticalSpacing size="md" />
        <Text size={TextSize.lg} colour={TextColour.white}>
          {copy}
        </Text>
        <VerticalSpacing size="md" />
        <Text size={TextSize.lg} colour={TextColour.white}>
          I strive to create beautiful digital experiences that balance creative
          design with practical needs. Having worked in Marketing, Product
          Management and Sales, I make sure to understand and consider the
          business needs of every project.{" "}
        </Text>
        <VerticalSpacing size="xl" />
        <div className="row justify-start align-center splitScreen__ctas">
          <Button buttonVariant={ButtonType.primaryWhite}>{primaryCTA}</Button>
          <Button buttonVariant={ButtonType.secondary}>{secondaryCTA}</Button>
        </div>
      </div>
      <div className="splitScreen__image">
        <span className="splitScreen__fade1"></span>
        <span className="splitScreen__fade2"></span>
        {/* // <img src={`${process.env.PUBLIC_URL}/assets/${imageURL}`} alt="" /> */}
      </div>
    </section>
  );
};

export default SplitScreen;
