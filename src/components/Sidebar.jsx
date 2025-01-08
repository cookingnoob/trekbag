import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({ addItem, removeAllItems, resetToInitial }) => {
  return (
    <div className="sidebar">
      <AddItemForm addItem={addItem} />
      <ButtonGroup
        removeAllItems={removeAllItems}
        resetToInitial={resetToInitial}
      />
    </div>
  );
};

export default Sidebar;
