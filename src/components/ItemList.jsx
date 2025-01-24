import Select from "react-select";
import EmptyView from "./EmptyView";
import Item from "./Item";
import { useMemo, useState } from "react";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

const ItemList = () => {
  const items = useItemsStore((state) => state.items);
  const deleteTask = useItemsStore((state) => state.deleteTask);
  const toggleTaskStatus = useItemsStore((state) => state.toggleTaskStatus);
  const [sortBy, setSortBy] = useState("default");

  const sortedList = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        } else if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
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
