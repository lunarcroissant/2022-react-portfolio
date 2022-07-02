import { useContext } from "react";
import Button, { ButtonType, Icons } from "../../components/base/button/Button";
import Heading, { TextColour } from "../../components/base/Heading/Heading";
import Icon, { Theme } from "../../components/base/Icon/Icon";
import Link, { LinkType } from "../../components/base/Link/Link";
import VerticalSpacing from "../../components/base/VerticalSpacing/VerticalSpacing";
import Divider from "../../components/Divider/Divider";
import FullPageModal, {
  ModalTheme,
} from "../../components/FullPageModal/FullPageModal";
import GlobalContext from "../../contexts/GlobalContext/GlobalContext";
import useViewportSize from "../../hooks/useViewportSize/useViewportSize";

const Contact = () => {
  const isMobile = useViewportSize(1024);
  const pageTheme = "dark";
  return (
    <FullPageModal theme={ModalTheme.dark}>
      <VerticalSpacing size="lg" />
      <span className="center-text">
        <Heading colour={TextColour.offWhite} headingLevel="h3">
          Got a great idea and want to work together? Get in touch!
        </Heading>
      </span>

      <VerticalSpacing size="lg" />
      <Link
        linkVariant={LinkType.secondary}
        icon={Icons.mailLight}
        href="mailto:edwardtierney35@gmail.com"
      >
        edwardtierney35@gmail.com
      </Link>
      <VerticalSpacing size="lg" />
      <Divider children="or"></Divider>
      <VerticalSpacing size="lg" />
      <div className="row align-center justify-evenly width-100">
        <Icon
          size="xl"
          isLink
          icon={Icons.gitHubLight}
          label="GitHub"
          theme={Theme.dark}
          href="https://github.com/lunarcroissant"
        ></Icon>
        <Icon
          size="xl"
          isLink
          icon={Icons.dribbleLight}
          theme={Theme.dark}
          label="Dribble"
          href="https://dribbble.com/eddie_"
        ></Icon>
        <Icon
          size="xl"
          isLink
          icon={Icons.linkedInLight}
          theme={Theme.dark}
          label="LinkedIn"
          href="https://www.linkedin.com/in/etierney/"
        ></Icon>
      </div>
    </FullPageModal>
  );
};
export default Contact;
