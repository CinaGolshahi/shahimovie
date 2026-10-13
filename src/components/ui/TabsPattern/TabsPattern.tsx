import { useState } from "react";
import type { ITabsProps } from "./TabsPattern.type";

const TabsPattern = (props: ITabsProps) => {
  const { tabs } = props;
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="container mx-auto flex flex-col gap-4 bg-gray-900 p-2 md:rounded-2xl xl:rounded-none 2xl:rounded-2xl">
      <div className="flex gap-2">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setSelectedTab(index)}
            className={`cursor-pointer rounded-xl px-6 py-2 transition-all delay-75 duration-300 hover:opacity-80 ${selectedTab === index ? "bg-blue-500" : "bg-gray-950"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-full rounded-xl bg-gray-950 p-4">
        {tabs[selectedTab]?.content}
      </div>
    </div>
  );
};

export default TabsPattern;
