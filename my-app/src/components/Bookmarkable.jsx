import React, { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import About from "./tabs/About";
import Profile from "./tabs/Profile";
import Security from "./tabs/Security";
import { useSearchParams } from "react-router-dom";
export default function Bookmarkable() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const tabs = ["about", "profile", "security"];

  useEffect(() => {
    const activeTab = searchParams.get("activeTab");
    if (activeTab) {
      const index = tabs.indexOf(activeTab);
      const selectedTabIndex = index < 0 ? 0 : index;
      setSelectedIndex(selectedTabIndex);
    } else {
      setSearchParams({
        activeTab: tabs[0],
      });
    }
  }, [searchParams]);

  const handleOnChange = (index) => {
    setSearchParams({
      activeTab: tabs[index],
    });
  };
  return (
    <div>
      <br />
      <p className="display-6">Bookmarkable Component</p>
      <hr />

      <Tabs selectedIndex={selectedIndex} onSelect={handleOnChange}>
        <TabList>
          <Tab key="about">About</Tab>
          <Tab key="profile">Profile</Tab>
          <Tab key="security">Security</Tab>
        </TabList>
        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <Profile />
        </TabPanel>
        <TabPanel>
          <Security />
        </TabPanel>
      </Tabs>
    </div>
  );
}
