const CreateNewUser = () => {
  const handleNewUser = (e: any) => {
    e.preventDefault();
    const form = e.target;
  };

  return (
    <div>
      <form className="space-y-2">
        <div>
          <h3>name</h3>
          <input
            className="border-2 px-4 py-2"
            placeholder="name"
            name="name"
            type="text"
          />
        </div>
        <div>
          <h3>company</h3>
          <input
            className="border-2 px-4 py-2"
            placeholder="company"
            name="company"
            type="text"
          />
        </div>
        <div>
          <h3>number</h3>
          <input
            className="border-2 px-4 py-2"
            placeholder="number"
            name="name"
            type="number"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateNewUser;
