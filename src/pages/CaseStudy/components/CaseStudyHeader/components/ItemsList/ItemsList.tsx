import Heading, {
  TextColour,
} from "../../../../../../components/base/Heading/Heading";
import Icon from "../../../../../../components/base/Icon/Icon";
import Text, {
  LineHeight,
  TextSize,
  TextWeight,
} from "../../../../../../components/base/Text/Text";
import VerticalSpacing from "../../../../../../components/base/VerticalSpacing/VerticalSpacing";

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
            <div className="row itemsList__teamMember" key={Math.random()}>
              <span className="margin-right-1 bold-text col itemsList__teamMemberName">
                <Text
                  size={TextSize.md}
                  weight={TextWeight.bold}
                  lineHeight={LineHeight.standard}
                >
                  {copy.name}
                </Text>
              </span>
              <div className="col">
                {copy.role.length &&
                  copy.role.map((role) => {
                    return (
                      <Text size={TextSize.md} lineHeight={LineHeight.standard}>
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

export default ItemsList;
