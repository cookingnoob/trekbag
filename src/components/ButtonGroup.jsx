import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

const ButtonGroup = ({ removeAllItems, resetToInitial }) => {
  const buttons = [
    { text: "Reset to initial", action: resetToInitial },
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
