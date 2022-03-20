import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import About from './tabs/About';
import Profile from './tabs/Profile';
import Security from './tabs/Security';
export default function Bookmarkable() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOnChange = (index) => {
    setSelectedIndex(index);
  };
  return (
    <div>
      <br />
      <p className="display-6">Bookmarkable Component</p>
      <hr />

      <Tabs selectedIndex={selectedIndex} onSelect={handleOnChange}>
        <TabList>
          <Tab id="about">About</Tab>
          <Tab id="profile">Profile</Tab>
          <Tab id="security">Security</Tab>
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
