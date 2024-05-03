import CreateNewUser from "@/components/CreateNewUser";
import DisplayUser from "@/components/DisplayUser";

export default function Home() {
  return (
    <div className="mt-5">
      <h2 className="text-3xl text-center  font-bold text-purple-700">
        First Zustand projects
      </h2>

      <div className="flex gap-5 items-start mt-5">
        <div className="w-[70%] border p-5">
          <DisplayUser />
        </div>
        <div className="w-[30%]">
          <CreateNewUser />
        </div>
      </div>
    </div>
  );
}
