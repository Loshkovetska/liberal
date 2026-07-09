import { Tab, Tabs } from "@/components/ui/tabs";
import { accountTabs, adminTabs } from "@/lib/constants/menu";
import { useState } from "react";

const AccountTabs = ({ role }: { role: string }) => {
  const [currentTab, setCurrentTab] = useState(0);

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
