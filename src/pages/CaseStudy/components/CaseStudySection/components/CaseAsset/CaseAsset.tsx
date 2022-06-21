import React from "react";

import "./CaseAsset.css";

interface IProps {
  asset: string;
  assetType?: string;
  assetAlt?: string;
}

const CaseAsset = React.memo(function ({ asset, assetType, assetAlt }: IProps) {
  return (
    <>
      {assetType === "jpg" ? (
        <img
          src={`${process.env.PUBLIC_URL}/assets/caseStudyImages/${asset}`}
          alt={assetAlt}
          className="caseStudyImage"
          // loading="lazy"
          loading="eager"
          key={asset}
        />
      ) : (
        <video
          src={`${process.env.PUBLIC_URL}/assets/caseStudyImages/${asset}`}
          className="caseStudyImage"
          key={asset}
          controls
        />
      )}
    </>
  );
});

export default CaseAsset;
