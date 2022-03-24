import { useState } from "react";
import Icon from "../base/Icon/Icon";

import "./FullPageModal.css";

interface IProps {
  children: any;
}

const FullPageModal = ({ children }: IProps) => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible ? (
        <section className="fullpagemodal__container">
          <div className="fullpagemodal__closeButton width-100 row align-center justify-end">
            <Icon
              isButton
              size="sm"
              icon="close--white"
              handleClick={() => setVisible(false)}
            />
          </div>
          <div className="fullpagemodal__content">{children}</div>
        </section>
      ) : null}
    </>
  );
};

export default FullPageModal;
