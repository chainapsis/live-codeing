import React from "react";
import { Styles } from "./styles";
import { ItemType } from "./types";

const tempItems: ItemType[] = [
  { id: 1, title: "item 1" },
  { id: 2, title: "item 2" },
  { id: 3, title: "item 3" },
  { id: 4, title: "item 4" },
  { id: 5, title: "item 5" },
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
          <button>Add</button>
        </Styles.Title>
        <Styles.Divider />
        <Styles.ItemList>
          {tempItems.map((item) => {
            return (
              <Styles.Item key={item.id}>
                <input type="checkbox" /> <div>{item.title}</div>
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
