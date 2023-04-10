import React from "react";
import { Styles } from "./styles";
import { ItemType } from "./types";

const tempItems: ItemType[] = [
  { id: 1, label: "item 1" },
  { id: 2, label: "item 2" },
  { id: 3, label: "item 3" },
  { id: 4, label: "item 4" },
  { id: 5, label: "item 5" },
];

function App() {
  return (
    <Styles.Container className="App">
      <Styles.Content>
        <Styles.Top>
          <Styles.Input type="text" />
        </Styles.Top>

        <Styles.Title>
          <input type="checkbox" />
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
          {tempItems.map((item) => {
            return (
              <Styles.Item key={item.id}>
                <input type="checkbox" /> <div>{item.label}</div>
                <Styles.Flex1 />
                <Styles.Delete>X</Styles.Delete>
              </Styles.Item>
            );
          })}
        </Styles.ItemList>
      </Styles.Content>
    </Styles.Container>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
