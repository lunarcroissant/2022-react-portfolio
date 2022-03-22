import ItemTile from "../ItemTile/ItemTile";
import "./ItemsGrid.css";

interface IProps {
  data?: any;
  filter: string;
}

const ItemsGrid = ({ data, filter }: IProps) => {
  return (
    <div className="itemsGrid width-100">
      {/* <div className="width-100"></div> */}
      {data.map((item: any) => {
        return (
          <ItemTile
            label={item.skill}
            subInfo={item.status}
            icon="react-icon--white"
          />
        );
      })}
    </div>
  );
};

export default ItemsGrid;
