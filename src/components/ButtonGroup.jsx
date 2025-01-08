import Button from "./Button";

const ButtonGroup = () => {
  return (
    <section className="button-group">
      <Button type={"group"}>Mark all as complete</Button>
      <Button type={"group"}>Mark all as incomplete</Button>
      <Button type={"group"}>Reset to initial</Button>
      <Button type={"group"}>Remove all items</Button>
    </section>
  );
};

export default ButtonGroup;
