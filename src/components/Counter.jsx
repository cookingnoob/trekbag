const Counter = ({ totalItems, packedItems }) => {
  return (
    <p>
      <b>{packedItems}</b> / {totalItems} items
    </p>
  );
};

export default Counter;
