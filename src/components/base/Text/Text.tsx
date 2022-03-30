import { useEffect, useRef, useState } from "react";
import "./Text.css";

interface IProps {
  text?: string;
  size: TextSize;
  colour?: string;
  weight?: TextWeight;
  theme?: string;
  bold?: boolean;
  children?: any;
  opacity?: string;
  blur?: string | 0;
  fadeIn?: boolean;
  lineHeight?: LineHeight;
}

export enum TextSize {
  xxs = "text--xxs",
  xs = "text--xs",
  sm = "text--sm",
  md = "text--md",
  lg = "text--lg",
  xl = "text--xl",
  xxl = "text--xxl",
  xxxl = "text--xxxl",
}

export enum TextWeight {
  thin = "200",
  light = "300",
  regular = "400",
  medium = "500",
  semibold = "700",
  bold = "900",
}

export enum TextColour {
  white = "#fff",
  greyBlue = "var(--grey-blue)",
  deepBlue = "var(--deep-blue)",
  primaryDark = "var(--dark-primary)",
  primaryBlue = "var(--primary-blue)",
  primaryGreen = "var(--primary-green)",
  offWhite = "var(--off-white)",
  lightGrey = "var(--light-grey)",
}

export enum LineHeight {
  standard = 1.5,
}

const Text = ({
  text,
  size,
  colour,
  weight,
  theme,
  bold,
  opacity,
  children,
  blur,
  fadeIn,
  lineHeight,
}: IProps) => {
  const textItem = useRef(document.createElement("p"));

  const [scrolledDistance, setScrolledDistance] = useState(0);

  function recordScrollDistance(e: Event) {
    const verticalOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
    const percentageVerticalOffset = window.innerHeight;

    // if (!tabs.current.offsetTop)

    setScrolledDistance(textItem.current.getBoundingClientRect().y);

    // let positionInRelationToUser =
    //   (textItem.current.getBoundingClientRect().y * verticalOffset) /
    //   verticalOffset;
    let positionInRelationToUser =
      verticalOffset - textItem.current.getBoundingClientRect().y;

    console.log(
      (textItem.current.getBoundingClientRect().y * 100) /
        textItem.current.getBoundingClientRect().y
    );
    // if (tabs.current && tabs.current.offsetTop) {
    //   setScrolledDistance(tabs.current.offsetTop);
    // }
  }

  useEffect(() => {
    window.addEventListener("scroll", recordScrollDistance);
    // if (tabs) {
    //  recordScrollDistance(tabs.current.offsetTop);
    // }

    return () => {
      window.removeEventListener("scroll", recordScrollDistance);
    };
  });

  if (bold) {
    return (
      <p
        className={`text ${size} ${
          scrolledDistance > 400 && fadeIn ? "hide" : "visible"
        }`}
        style={{
          opacity: `${opacity}`,
          fontWeight: `${weight}`,
          color: `${colour}`,
          // filter: `${blur && `blur(${blur})`}`,
        }}
        ref={textItem}
      >
        {children}
      </p>
    );
  } else {
    return (
      <p
        className={`text ${size} text--${theme} ${
          scrolledDistance > window.innerHeight * 0.7 && fadeIn
            ? "hide"
            : "visible"
        }`}
        style={{
          opacity: `${opacity}`,
          fontWeight: `${weight}`,
          color: `${colour}`,
          lineHeight: lineHeight,
          filter: `${
            blur &&
            `blur(${
              textItem.current.getBoundingClientRect().y > 1 &&
              (textItem.current.getBoundingClientRect().y / 100) *
                textItem.current.getBoundingClientRect().y >
                0.9
                ? 0
                : scrolledDistance / window.innerHeight
            }px)`
          }`,
        }}
        ref={textItem}
      >
        {children}
      </p>
    );
  }
};

export default Text;
