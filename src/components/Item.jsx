const Item = ({ item, onDeleteTask, onToggleStatus }) => {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleStatus(item.id)}
          type="checkbox"
          checked={item.packed}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteTask(item.id)}>❌</button>
    </li>
  );
};

export default Item;
