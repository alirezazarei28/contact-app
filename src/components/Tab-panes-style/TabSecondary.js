import "../../Sass/Tab-Secondary.scss";

const TabSecondary = ({ char, active, length, onClick }) => {
  return (
    <div
      className={`tab ${char === active ? "tab--no-bb" : ""} ${
        length ? "" : "tab--disable"
      }`}
      onClick={() => onClick(char)}
    >
      <p>{char}</p>
      <p className="tab__number">{length}</p>
    </div>
  );
};

export default TabSecondary;
