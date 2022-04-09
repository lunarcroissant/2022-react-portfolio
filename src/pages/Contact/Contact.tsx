import { useContext } from "react";
import Button, { ButtonType, Icons } from "../../components/base/button/Button";
import Heading, { TextColour } from "../../components/base/Heading/Heading";
import Icon from "../../components/base/Icon/Icon";
import Link, { LinkType } from "../../components/base/Link/Link";
import VerticalSpacing from "../../components/base/VerticalSpacing/VerticalSpacing";
import Divider from "../../components/Divider/Divider";
import FullPageModal from "../../components/FullPageModal/FullPageModal";
import GlobalContext from "../../contexts/GlobalContext/GlobalContext";

const Contact = () => {
  const { contactFormVisible } = useContext(GlobalContext);
  return (
    <FullPageModal>
      <VerticalSpacing size="lg" />
      <span className="center-text">
        <Heading colour={TextColour.white} headingLevel="h3">
          Got a great idea and want to work together? Get in touch!
        </Heading>
      </span>

      <VerticalSpacing size="lg" />
      {/* <Button buttonVariant={ButtonType.secondary} icon={Icons.mailLight}>
        edwardtierney35@gmail.com
      </Button> */}
      <Link
        linkVariant={LinkType.secondary}
        icon={Icons.mailLight}
        href="mailto:edwardtierney35@gmail.com"
      >
        edwardtierney35@gmail.com
      </Link>
      <VerticalSpacing size="lg" />
      <Divider>or</Divider>
      <VerticalSpacing size="lg" />
      <div className="row align-center justify-evenly width-100">
        <Icon
          size="xl"
          isLink
          icon={Icons.gitHubLight}
          label="GitHub"
          href="https://github.com/lunarcroissant"
        ></Icon>
        <Icon
          size="xl"
          isLink
          icon={Icons.dribbleLight}
          label="Dribble"
          href="https://dribbble.com/eddie_"
        ></Icon>
        <Icon
          size="xl"
          isLink
          icon={Icons.linkedInLight}
          label="LinkedIn"
          href="https://www.linkedin.com/in/etierney/"
        ></Icon>
      </div>
    </FullPageModal>
  );
};
export default Contact;
