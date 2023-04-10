import styled from "styled-components";

export const Styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Content: styled.div`
    width: 640px;
  `,
  Top: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Input: styled.input`
    width: 100%;
    height: 32px;
  `,
  Divider: styled.div`
    width: 100%;

    margin: 10px 0;
    border: 1px solid lightgray;
  `,
  Title: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 32px;

    padding: 10px;
  `,
  ItemList: styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  `,
  Item: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  `,
  Buttons: styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
  `,
  AddButton: styled.button`
    width: 80px;
    height: 36px;
    cursor: pointer;
    color: white;
    border: 0;
    border-radius: 6px;
    background-color: #2c4be2;
  `,
  SortButton: styled.button`
    width: 80px;
    height: 36px;
    cursor: pointer;
    color: white;
    border: 0;
    border-radius: 6px;
    background-color: #404045;
  `,
  Delete: styled.button`
    width: 36px;
    height: 36px;
    cursor: pointer;
    color: white;
    border: 0;
    border-radius: 6px;
    background-color: #f0224b;
  `,
  Flex1: styled.div`
    flex: 1;
  `,
};
