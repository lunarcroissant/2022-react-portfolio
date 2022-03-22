import Icon from "../../../../components/base/Icon/Icon";
import Text, {
  TextSize,
  TextWeight,
} from "../../../../components/base/Text/Text";
import VerticalSpacing from "../../../../components/base/VerticalSpacing/VerticalSpacing";

import "./ItemTile.css";

interface IProps {
  label: string;
  subInfo: string;
  icon: string;
}

const ItemTile = ({ label, subInfo, icon }: IProps) => {
  return (
    <div className="itemTile" key={`itemTileFor${label}`}>
      <div className="width-100">
        <Text size={TextSize.lg} weight={TextWeight.bold} theme="off-white">
          {label}
        </Text>
        <Text size={TextSize.lg} opacity="0.75" theme="off-white">
          {subInfo}
        </Text>
      </div>
      <VerticalSpacing size="md" />
      <div className="row justify-end align-end">
        <img
          src={`${process.env.PUBLIC_URL}/assets/${icon}.svg`}
          alt={icon}
          style={{ opacity: 0.2 }}
        />
      </div>

      {/* <Icon size="xl" icon="react-icon--white" opacity="20%"></Icon> */}
    </div>
  );
};

export default ItemTile;
