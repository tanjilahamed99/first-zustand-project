"use client";

import useUser from "@/zustand/store";

const User = ({ data }: any) => {
  const deleteUser = useUser((state) => state.removeUser);

  const handleDelete = (id: any) => {
    deleteUser(id);
  };

  return (
    <div>
      <div className="space-y-2 border-2  p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">{data?.name}</h2>
          <button
            onClick={() => handleDelete(data?.id)}
            className=" border p-2 border-black"
          >
            delete
          </button>
        </div>
        <h2 className="font-medium text-sm">{data?.company}</h2>
        <h2>{data?.number}</h2>
      </div>
    </div>
  );
};

export default User;
