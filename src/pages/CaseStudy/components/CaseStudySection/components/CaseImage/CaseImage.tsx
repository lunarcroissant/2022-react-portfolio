import React from "react";

import "./CaseImage.css";

interface IProps {
  image: string;
}

const CaseImage = React.memo(function ({ image }: IProps) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/assets/caseStudyImages/${image}`}
      alt={image}
      className="caseStudyImage"
      // loading="lazy"
      loading="eager"
      key={image}
    />
  );
});

export default CaseImage;
