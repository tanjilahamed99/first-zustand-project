import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useStore = (set: any) => ({
  users: [],
  addUser: (user: any) => {
    set((state: any) => ({
      users: [user, ...state.users],
    }));
  },

  removeUser: (userId: any) => {
    set((state: any) => ({
      users: state.users.filter((c: any) => c.id !== userId),
    }));
  },
});

const useUser = create(
  devtools(
    persist(useStore, {
      name: "users",
    })
  )
);

export default useUser;
