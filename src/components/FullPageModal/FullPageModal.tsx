import { useContext, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext/GlobalContext";
import Icon from "../base/Icon/Icon";

import "./FullPageModal.css";

export enum ModalTheme {
  light = "--white",
  dark = "--dark",
}

interface IProps {
  children: any;
  theme: ModalTheme;
}

const FullPageModal = ({ children, theme }: IProps) => {
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
              icon={`${
                theme === ModalTheme.light
                  ? `close${ModalTheme.dark}`
                  : `close${ModalTheme.light}`
              }`}
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
