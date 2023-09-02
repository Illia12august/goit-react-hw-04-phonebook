import styled from '@emotion/styled';
export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
export const DeleteBtn = styled.button`
  padding: 7px;
  height: 40px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  &:hover,
  :focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    border-color: lightblue;
  }
  &:hover,
  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    outline: none;
    &:hover {
      background-color: lightblue;
    }
  }
`;