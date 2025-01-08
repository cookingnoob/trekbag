import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({
  addItem,
  removeAllItems,
  resetToInitial,
  markAllAsComplete,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm addItem={addItem} />
      <ButtonGroup
        removeAllItems={removeAllItems}
        resetToInitial={resetToInitial}
        markAllAsComplete={markAllAsComplete}
      />
    </div>
  );
};

export default Sidebar;
