import { useContext, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext/GlobalContext";
import Icon from "../base/Icon/Icon";

import "./FullPageModal.css";

interface IProps {
  children: any;
}

const FullPageModal = ({ children }: IProps) => {
  const [visible, setVisible] = useState(true);
  const { contactFormVisible, setContactFormVisible } =
    useContext(GlobalContext);
  return (
    <>
      {contactFormVisible ? (
        <section className="fullpagemodal__container">
          <div className="fullpagemodal__closeButton--light width-100 row align-center justify-end">
            <Icon
              isButton
              size="sm"
              icon="close--white"
              handleClick={() => setContactFormVisible(false)}
            />
          </div>
          <div className="fullpagemodal__content--light">{children}</div>
        </section>
      ) : null}
    </>
  );
};

export default FullPageModal;
