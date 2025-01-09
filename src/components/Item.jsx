const Item = ({ item, deleteTask, toggleTaskStatus }) => {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => toggleTaskStatus(item.id)}
          type="checkbox"
          checked={item.packed}
        />
        {item.name}
      </label>
      <button onClick={() => deleteTask(item.id)}>❌</button>
    </li>
  );
};

export default Item;
