import Select from "react-select";
import EmptyView from "./EmptyView";
import Item from "./Item";
import { useState } from "react";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

const ItemList = ({ list, deleteTask, toggleTaskStatus }) => {
  const [sortBy, setSortBy] = useState("default");

  const sortedList = [...list].sort((a, b) => {
    if (sortBy === "packed") {
      return b.packed - a.packed;
    } else if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }
    return;
  });

  return (
    <ul className="item-list">
      {list.length === 0 && <EmptyView />}
      {list.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
          />
        </section>
      )}
      {sortedList.map((item) => {
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
