import Item from "./Item";

const ItemList = ({ list, deleteTask, toggleTaskStatus }) => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            deleteTask={deleteTask}
            toggleTaskStatus={toggleTaskStatus}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;
