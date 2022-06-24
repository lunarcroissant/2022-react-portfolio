import { memo } from "react";
import { TextColour } from "../../../../../../components/base/Heading/Heading";
import Icon from "../../../../../../components/base/Icon/Icon";
import Text, {
  LineHeight,
  TextSize,
  TextWeight,
} from "../../../../../../components/base/Text/Text";
import VerticalSpacing from "../../../../../../components/base/VerticalSpacing/VerticalSpacing";
import useViewportSize from "../../../../../../hooks/useViewportSize/useViewportSize";

import "./ItemsList.css";

interface CopyItem {
  name: string;
  role: string[];
}

interface IProps {
  title: string;
  copy?: CopyItem[];
  // copy: string;
  // subcopy: string;
  icons?: string[];
}

const ItemsList = ({ title, copy, icons }: IProps) => {
  const isMobile = useViewportSize(1024);
  return (
    <div className="itemsList col">
      <Text
        size={isMobile ? TextSize.sm : TextSize.md}
        colour={TextColour.lightGrey}
        weight={TextWeight.bold}
      >
        {title}
      </Text>
      <VerticalSpacing size="xs" />
      {icons ? (
        <div className="row">
          {icons.map((icon: any) => {
            return (
              <Icon
                size={`${isMobile ? "md" : "lg"}`}
                icon={icon.icon}
                label={icon.name}
                key={icon.name}
                hoverText={icon.name}
                noleftMargin
              />
            );
          })}
        </div>
      ) : (
        copy?.map((copy) => {
          return (
            <div className="row itemsList__teamMember" key={copy.name}>
              <span className="margin-right-1 bold-text col itemsList__teamMemberName">
                <Text
                  size={isMobile ? TextSize.sm : TextSize.md}
                  weight={TextWeight.bold}
                  lineHeight={LineHeight.standard}
                  animate
                >
                  {copy.name}
                </Text>
              </span>
              <div className="col">
                {copy.role.length &&
                  copy.role.map((role) => {
                    return (
                      <Text
                        size={isMobile ? TextSize.sm : TextSize.md}
                        lineHeight={LineHeight.standard}
                        key={role}
                        animate
                      >
                        {role}
                      </Text>
                    );
                  })}
              </div>
            </div>
          );
        })
      )}
      <VerticalSpacing size="md" />
    </div>
  );
};

export default memo(ItemsList);
