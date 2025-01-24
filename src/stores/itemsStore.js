import { create } from "zustand";
import { itemLists } from "../lib/constants";
import { persist } from "zustand/middleware";
export const useItemsStore = create(
  persist(
    (set) => ({
      items: itemLists,
      addItem: (itemName) => {
        const newItem = {
          id: new Date(),
          name: itemName,
          packed: false,
        };
        set((state) => ({ items: [...state.items, newItem] }));
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetItems: () => {
        set(() => ({ items: itemLists }));
      },
      markAllAsComplete: () => {
        set((state) => {
          const newList = state.items.map((i) => {
            return { ...i, packed: true };
          });
          return { items: newList };
        });
      },
      markAllAsIncomplete: () => {
        set((state) => {
          const newList = state.items.map((i) => {
            return { ...i, packed: false };
          });
          return { items: newList };
        });
      },
      deleteTask: (id) => {
        set((state) => {
          const newList = state.items.filter((l) => l.id !== id);
          return { items: newList };
        });
      },
      toggleTaskStatus: (id) => {
        set((state) => {
          const newList = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });
          return { items: newList };
        });
      },
    }),
    {
      name: "items",
    }
  )
);
