import Text, {
  TextColour,
  TextSize,
  TextWeight,
} from "../../../../components/base/Text/Text";
import VerticalSpacing from "../../../../components/base/VerticalSpacing/VerticalSpacing";
import useViewportSize from "../../../../hooks/useViewportSize/useViewportSize";

import "./Footer.css";

const Footer = ({}) => {
  const isMobile = useViewportSize(1024);
  return (
    <footer className="footer width-100 padding-horizontal-4">
      <VerticalSpacing size={isMobile ? "md" : "xl"} />
      <div className="footer__divider"></div>
      <VerticalSpacing size="md" />
      <div
        className={`${
          isMobile ? "col" : "row"
        } width-100 justify-between align-center`}
      >
        <Text
          size={TextSize.sm}
          weight={TextWeight.light}
          colour={TextColour.offWhite}
        >
          This portfolio was built using React.js and Figma.
        </Text>
        {isMobile ? <VerticalSpacing size="md" /> : null}
        <Text
          size={TextSize.sm}
          weight={TextWeight.regular}
          colour={TextColour.offWhite}
        >
          © Eddie Tierney 2022
        </Text>
      </div>
      <VerticalSpacing size="lg" />
    </footer>
  );
};

export default Footer;
