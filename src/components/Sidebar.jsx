import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({ addItem, removeAllItems }) => {
  return (
    <div className="sidebar">
      <AddItemForm addItem={addItem} />
      <ButtonGroup removeAllItems={removeAllItems} />
    </div>
  );
};

export default Sidebar;
