import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

const ButtonGroup = () => {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetItems = useItemsStore((state) => state.resetItems);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const buttons = [
    { text: "Mark all as complete", action: markAllAsComplete },
    { text: "Mark all as incomplete", action: markAllAsIncomplete },
    { text: "Reset to initial", action: resetItems },
    { text: "Remove all items", action: removeAllItems },
  ];

  return (
    <section className="button-group">
      {buttons.map((button) => {
        return (
          <Button onClick={button.action} key={button.text} buttonType="group">
            {button.text}
          </Button>
        );
      })}
    </section>
  );
};

export default ButtonGroup;
