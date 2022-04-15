import "../../Sass/Tab.scss";

import React, {
  useState,
  PropsWithChildren,
  ReactElement,
  useCallback,
} from "react";
import { TabProps } from "../../Types/types";
import Tab from "./Tab";

interface TabsProps {
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  // const initialTab = children[0].props.label;
  const [activeTab, setActiveTab] = useState("A");
  const handleActiveTab = useCallback(
    (label: string) => setActiveTab(label),
    []
  );

  const tabs = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    const item = child as ReactElement<PropsWithChildren<TabProps>>;

    return (
      <button
        tabIndex={item.props.subLabel === 0 ? -1 : 0}
        onClick={(e) => {
          e.preventDefault();
          handleActiveTab(item.props.label);
        }}
        className={` ${
          item.props.label === activeTab
            ? ["tabs__tab", "tabs__tab--active"].join(" ")
            : "tabs__tab"
        }
      ${item.props.subLabel === 0 ? "tabs__tab--disable" : ""}
      `}
        key={item.props.label}
      >
        <div>
          {item.props.tabName}
          <sub className="tabs__sub-label">{item.props.subLabel}</sub>
        </div>
      </button>
    );
  });

  let tabContent;
  React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    const item = child as ReactElement<PropsWithChildren<TabProps>>;
    if (item.props.label === activeTab) {
      tabContent = item;
    }
  });

  return (
    <div className="tabs__wrapper">
      <div className="tabs__box">{tabs}</div>
      <div className="tabs__content">{tabContent}</div>
    </div>
  );
};

export default Tabs;
