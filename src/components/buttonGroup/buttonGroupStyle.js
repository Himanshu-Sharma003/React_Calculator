import styled from "styled-components";

export const ButtonGroupRoot = styled.div`
  background-color: #858694;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 0 auto;
  height:70%;
`;

export const ButtonGroupRow = styled.div`
  width: 100%;
  margin-bottom: 1px;
  flex: 1 0 auto;
  display: flex;
  :last-child {
    margin-bottom:30px;
  }
`;
