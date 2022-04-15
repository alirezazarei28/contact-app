import { AlphabeticContact, DataType } from "../Types/types";
import { prepareTabsData } from "../utils/utils";
import ContactsList from "../components/ContactsList";
import Tab from "../components/Tab/Tab";
import Tabs from "../components/Tab/Tabs";

const Container = ({ data }: { data: DataType }) => {
  const alphabeticContacts: AlphabeticContact = prepareTabsData(data);

  return (
    <Tabs>
      {Object.keys(alphabeticContacts).map((char: string) => {
        return (
          <Tab
            key={char}
            label={char}
            subLabel={alphabeticContacts[char].length}
          >
            <ContactsList {...alphabeticContacts[char]} />
          </Tab>
        );
      })}
    </Tabs>
  );
};

export default Container;
