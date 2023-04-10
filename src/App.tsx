import React, { FunctionComponent } from "react";
import { Styles } from "./styles";
import { ItemType } from "./types";

function App() {
  const items: ItemType[] = [
    { id: 1, label: "Block 1" },
    { id: 2, label: "Block 2" },
    { id: 3, label: "Block 3" },
    { id: 4, label: "Block 4" },
    { id: 5, label: "Block 5" },
  ];

  return (
    <Styles.Container className="App">
      <Styles.Content>
        <Styles.Top>
          <Styles.Input type="text" />
        </Styles.Top>

        <Styles.Title>
          <Styles.CheckBox type="checkbox" />
          <div>Select All</div>

          <Styles.Flex1 />

          <Styles.Buttons>
            <Styles.AddButton>Add</Styles.AddButton>
            <Styles.SortButton>Sort ASC</Styles.SortButton>
            <Styles.SortButton>Sort DESC</Styles.SortButton>
          </Styles.Buttons>
        </Styles.Title>
        <Styles.Divider />
        <Styles.ItemList>
          {items.map((item) => {
            return <CheckItem key={item.id} item={item} />;
          })}
        </Styles.ItemList>
      </Styles.Content>
    </Styles.Container>
  );
}

const CheckItem: FunctionComponent<{
  item: ItemType;
}> = ({ item }) => {
  return (
    <Styles.Item key={item.id}>
      <Styles.CheckBox type="checkbox" readOnly />
      <div>
        <b>[{item.id}]</b> {item.label}
      </div>
      <Styles.Flex1 />
      <Styles.Delete>X</Styles.Delete>
    </Styles.Item>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
