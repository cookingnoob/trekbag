import Select from "react-select/base";
import EmptyView from "./EmptyView";
import Item from "./Item";
import { useState } from "react";

const ItemList = ({ list, deleteTask, toggleTaskStatus }) => {
  const [sortBy, setSortBy] = useState("default");
  return (
    <ul className="item-list">
      {list.length === 0 && <EmptyView />}
      {list.length > 0 && <Select className="sorting" />}
      {list.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteTask={deleteTask}
            onToggleStatus={toggleTaskStatus}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;
