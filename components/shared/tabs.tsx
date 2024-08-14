import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ReactNode } from "react";

interface ITab {
  title: string;
  element: ReactNode;
}

interface IProps {
  tabs: ITab[];
}

const Tabs = ({ tabs }: IProps) => {
  return (
    <TabGroup>
      <TabList className={"flex justify-around"}>
        {tabs.map((tab) => (
          <Tab
            className={
              "w-full rounded p-2 text-sm outline-none data-[selected]:bg-sky-50"
            }
            key={tab.title}
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>
      <TabPanels className={"mt-1"}>
        {tabs.map((tab) => (
          <TabPanel key={tab.title}>{tab.element}</TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Tabs;
