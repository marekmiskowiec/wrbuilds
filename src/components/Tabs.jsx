import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Passive", "Tab 2", "Tab 3", "Tab 4"];
  const tabContent = [
    "Zawartość dla zakładki 1",
    "Zawartość dla zakładki 2",
    "Zawartość dla zakładki 3",
    "Zawartość dla zakładki 4",
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={activeTab === index ? "active" : ""}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">{tabContent[activeTab]}</div>

      <style jsx>{`
        .tab-buttons button {
          padding: 10px;
          margin-right: 5px;
          cursor: pointer;
        }
        .tab-buttons .active {
          background-color: #007bff;
          color: white;
        }
        .tab-content {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Tabs;
