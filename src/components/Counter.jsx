import { useItemsStore } from "../stores/itemsStore";

const Counter = () => {
  const items = useItemsStore((state) => state.items);
  const packedItems = items.filter((i) => i.packed === true).length;
  const totalItems = items.length;
  return (
    <p>
      <b>{packedItems}</b> / {totalItems} items
    </p>
  );
};

export default Counter;
