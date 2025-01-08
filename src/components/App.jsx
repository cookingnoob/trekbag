import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { itemLists } from "../lib/constants";

function App() {
  const [list, setList] = useState(itemLists);

  const addItem = (itemName) => {
    const newItem = {
      id: new Date(),
      name: itemName,
      packed: false,
    };

    const newItems = [...list, newItem];

    setList(newItems);
  };

  const removeAllItems = () => {
    setList([]);
  };

  const resetToInitial = () => {
    setList(itemLists);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList list={list} />
        <Sidebar
          addItem={addItem}
          removeAllItems={removeAllItems}
          resetToInitial={resetToInitial}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
