import Item from "./Item";

const ItemList = ({ list }) => {
  return (
    <ul>
      {list.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default ItemList;
