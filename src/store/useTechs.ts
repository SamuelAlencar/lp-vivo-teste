import { create } from "zustand";

type useTechsStoreT = {
  title: string;
  setTitle: (newTitle: string) => void
};

const useTechsStore = create<useTechsStoreT>()((set) => ({
  title: "Esim",
  setTitle: (newTitle) => set({ title: newTitle }),
}));


export default useTechsStore