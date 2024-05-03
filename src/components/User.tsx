"use client";

import useUser from "@/zustand/store";

const User = ({ data }: any) => {
  const { updateUser, removeUser } = useUser((state) => ({
    updateUser: state.updateUser,
    removeUser: state.removeUser,
  }));

  const handleDelete = (id: any) => {
    removeUser(id);
  };

  const handleUpdate = (id: any) => {
    updateUser(id);
    console.log(id)
  };


  console.log(data)



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

        {data.jobs ? (
          <button className="border-2 border-green-500 text-green px-5 py-2">
            Yes
          </button>
        ) : (
          <button
          onClick={() => handleUpdate(data?.id)}
            className="border-2 border-red-500 text-red px-5 py-2 "
          >
            {data?.jobs ? "yes" : "no"}
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
