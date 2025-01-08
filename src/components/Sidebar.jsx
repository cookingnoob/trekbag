import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({
  addItem,
  removeAllItems,
  resetToInitial,
  markAllAsComplete,
  markAllAsIncomplete,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm addItem={addItem} />
      <ButtonGroup
        removeAllItems={removeAllItems}
        resetToInitial={resetToInitial}
        markAllAsComplete={markAllAsComplete}
        markAllAsIncomplete={markAllAsIncomplete}
      />
    </div>
  );
};

export default Sidebar;
