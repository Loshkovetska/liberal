import { Tab, Tabs } from "@/components/ui/tabs";
import { accountTabs, adminTabs } from "@/lib/constants/menu";
import { useState } from "react";

const AccountTabs = ({
  role,
  defaultTab,
}: {
  role: string;
  defaultTab?: number;
}) => {
  const [currentTab, setCurrentTab] = useState(defaultTab ?? 0);

  const getTabs = () => {
    if (role === "user") {
      return accountTabs;
    } else return adminTabs;
  };

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
    >
      {getTabs().map((tab, idx) => (
        <Tab
          id={idx}
          href={tab.link}
          key={tab.title}
        >
          {tab.title}
        </Tab>
      ))}
    </Tabs>
  );
};

export default AccountTabs;
