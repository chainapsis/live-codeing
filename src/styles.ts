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
    gap: 8px;
  `,
  Buttons: styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
  `,
  Delete: styled.div`
    cursor: pointer;
  `,
  Flex1: styled.div`
    flex: 1;
  `,
};
