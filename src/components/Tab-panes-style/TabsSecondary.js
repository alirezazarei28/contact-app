import "../../Sass/Tab-Secondary.scss";

import { useState } from "react";

import Tab from "./TabSecondary";

const TabsSecondary = (props) => {
  const data = props.panes;
  const [active, setActive] = useState(data[0].label);

  const handleActive = (char) => {
    setActive(char);
  };

  return (
    <>
      <section className="tabs">
        {data.map(({ label = "no label", length = 0 }) => {
          return (
            <Tab
              char={label}
              key={label}
              onClick={handleActive}
              active={active}
              length={length}
            />
          );
        })}
      </section>
      {data.map(({ label, component = <div /> }) => {
        return label === active && component();
      })}
    </>
  );
};

export default TabsSecondary;
