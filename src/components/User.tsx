const User = (data: object) => {
  return (
    <div>
      <div className="space-y-2 border-2 p-3">
        <h2 className="text-lg font-bold">{data?.name}</h2>
        <h2 className="font-medium">{data?.company}</h2>
        <h2>{data?.number}</h2>
      </div>
    </div>
  );
};

export default User;
