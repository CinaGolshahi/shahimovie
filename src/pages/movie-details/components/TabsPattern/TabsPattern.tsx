import { useState } from "react";
import { CastTab } from "./components";

const TabsPattern = () => {
  const tabItems = ["Links", "Details", "Cast"];
  const [tabSelected, setTabSelected] = useState(tabItems[0]);

  return (
    <div className="container mx-auto flex flex-col gap-2 bg-gray-900 p-2 2xl:rounded-2xl">
      <div className="flex gap-2">
        {tabItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setTabSelected(item)}
            className={`cursor-pointer rounded-xl px-6 py-2 transition-all delay-75 duration-300 hover:opacity-80 ${tabSelected === item ? "bg-blue-500" : "bg-gray-950"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="w-full rounded-xl bg-gray-950 p-4">
        {tabSelected === "Cast" && <CastTab />}
      </div>
    </div>
  );
};

export default TabsPattern;
