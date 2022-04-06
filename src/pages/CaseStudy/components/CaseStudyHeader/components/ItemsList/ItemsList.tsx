import Heading, {
  TextColour,
} from "../../../../../../components/base/Heading/Heading";
import Icon from "../../../../../../components/base/Icon/Icon";
import Text, {
  TextSize,
  TextWeight,
} from "../../../../../../components/base/Text/Text";
import VerticalSpacing from "../../../../../../components/base/VerticalSpacing/VerticalSpacing";

import "./ItemsList.css";

interface CopyItem {
  name: string;
  role: string;
}

interface IProps {
  title: string;
  copy?: CopyItem[];
  // copy: string;
  // subcopy: string;
  icons?: string[];
}

const ItemsList = ({ title, copy, icons }: IProps) => {
  return (
    <div className="itemsList col">
      <Text
        size={TextSize.md}
        colour={TextColour.lightGrey}
        weight={TextWeight.bold}
      >
        {title}
      </Text>
      <VerticalSpacing size="xs" />
      {icons ? (
        <div className="row">
          {icons.map((icon: any) => {
            return <Icon size="md" icon={icon.icon} label={icon.name} />;
          })}
        </div>
      ) : (
        copy?.map((copy) => {
          return (
            <div className="row" key={Math.random()}>
              <span className="margin-right-1 bold-text">
                <Text size={TextSize.md} weight={TextWeight.bold}>
                  {copy.name}
                </Text>
              </span>
              <Text size={TextSize.md}>{copy.role}</Text>
            </div>
          );
        })
      )}
      <VerticalSpacing size="md" />
    </div>
  );
};

export default ItemsList;
