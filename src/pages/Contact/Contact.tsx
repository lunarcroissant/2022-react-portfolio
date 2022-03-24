import { useContext } from "react";
import Button, { ButtonType, Icons } from "../../components/base/button/Button";
import Heading, { TextColour } from "../../components/base/Heading/Heading";
import Icon from "../../components/base/Icon/Icon";
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
      <Button buttonVariant={ButtonType.secondary} icon={Icons.mailLight}>
        edwardtierney35@gmail.com
      </Button>
      <VerticalSpacing size="lg" />
      <Divider>or</Divider>
      <VerticalSpacing size="lg" />
      <div className="row align-center justify-evenly width-100">
        <Icon size="xl" isButton icon={Icons.gitHubLight} label="GitHub"></Icon>
        <Icon
          size="xl"
          isButton
          icon={Icons.dribbleLight}
          label="Dribble"
        ></Icon>
        <Icon
          size="xl"
          isButton
          icon={Icons.linkedInLight}
          label="LinkedIn"
        ></Icon>
      </div>
    </FullPageModal>
  );
};
export default Contact;
