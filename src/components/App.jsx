import { useEffect, useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { itemLists } from "../lib/constants";

function App() {
  const [list, setList] = useState(
    () => JSON.parse(localStorage.getItem("items")) || itemLists
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(list));
  }, [list]);

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

  const markAllAsComplete = () => {
    const newList = list.map((i) => {
      return { ...i, packed: true };
    });
    setList(newList);
  };

  const markAllAsIncomplete = () => {
    const newList = list.map((i) => {
      return { ...i, packed: false };
    });
    setList(newList);
  };

  const deleteTask = (id) => {
    const newList = list.filter((l) => l.id !== id);
    setList(newList);
  };

  const toggleTaskStatus = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setList(newList);
  };

  const totalItems = list.length;
  const packedItems = list.filter((i) => i.packed === true).length;

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header totalItems={totalItems} packedItems={packedItems} />
        <ItemList
          list={list}
          deleteTask={deleteTask}
          toggleTaskStatus={toggleTaskStatus}
        />
        <Sidebar
          addItem={addItem}
          removeAllItems={removeAllItems}
          resetToInitial={resetToInitial}
          markAllAsComplete={markAllAsComplete}
          markAllAsIncomplete={markAllAsIncomplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
