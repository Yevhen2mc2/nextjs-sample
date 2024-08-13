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
          <Tab className={"data-[selected]:underline"} key={tab.title}>
            {tab.title}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab) => (
          <TabPanel key={tab.title}>{tab.element}</TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Tabs;
