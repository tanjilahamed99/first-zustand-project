"use client";

import useUser from "@/zustand/store";

const CreateNewUser = () => {
  const addUser = useUser((state: any) => state.addUser);

  const handleNewUser = (e: any) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const company = form.company.value;
    const number = form.number.value;

    addUser({
      id: Math.ceil(Math.random() * 8734593457),
      name: name,
      company: company,
      number : number
    });
  };

  return (
    <div>
      <form onSubmit={handleNewUser} className="space-y-2 border-2 p-5 w-fit">
        <div>
          <h3>name</h3>
          <input
            className="border-2 px-4 py-2"
            placeholder="name"
            name="name"
            type="text"
            required
          />
        </div>
        <div>
          <h3>company</h3>
          <input
            className="border-2 px-4 py-2"
            placeholder="company"
            name="company"
            type="text"
            required
          />
        </div>
        <div>
          <h3>number</h3>
          <input
            className="border-2 px-4 py-2"
            placeholder="number"
            name="number"
            type="number"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-purple-500  w-full py-2 rounded-lg text-white"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateNewUser;
