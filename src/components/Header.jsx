import Counter from "./Counter";
import Logo from "./Logo";

const Header = ({ totalItems, packedItems }) => {
  return (
    <header>
      <Logo />
      <Counter totalItems={totalItems} packedItems={packedItems} />
    </header>
  );
};

export default Header;
