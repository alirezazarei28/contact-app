import "../../Sass/Tab.scss";

import { useState, useCallback } from "react";

const Tabs = ({ children }) => {
  const initialTab = children[0].props.label;
  const [activeTab, setActiveTab] = useState(initialTab);
  const handleActiveTab = useCallback((label) => setActiveTab(label), []);

  const tabs = children.map((child) => {
    return (
      <button
        tabIndex={child.props.subLabel === 0 ? -1 : 0}
        onClick={(e) => {
          e.preventDefault();
          handleActiveTab(child.props.label);
        }}
        className={` ${
          child.props.label === activeTab
            ? ["tabs__tab", "tabs__tab--active"].join(" ")
            : "tabs__tab"
        }
      ${child.props.subLabel === 0 ? "tabs__tab--disable" : ""}
      `}
        key={child.props.label}
      >
        <div>
          {child.props.label}
          <sub className="tabs__sub-label">{child.props.subLabel}</sub>
        </div>
      </button>
    );
  });

  const tabContent = children.filter(
    (child) => child.props.label === activeTab
  );

  return (
    <div className="tabs__wrapper">
      <div className="tabs__box">{tabs}</div>
      <div className="tabs__content">{tabContent}</div>
    </div>
  );
};

export default Tabs;
