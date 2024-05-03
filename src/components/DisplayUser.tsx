"use client";

import useUser from "@/zustand/store";
import User from "./User";

const DisplayUser = () => {
  const { removeUser, users } = useUser((state) => ({
    users: state.users,
    removeUser: state.removeUser,
  }));

  return (
    <div className="grid grid-cols-3 items-center gap-5">
      {users.map((i, idx) => (
        <div key={idx}>
          <User data={i} />
        </div>
      ))}
    </div>
  );
};

export default DisplayUser;
