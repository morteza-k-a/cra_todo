import React from "react";
import styled from "@emotion/styled";

const Root = styled.div`
  height: calc(100% - 72px);
  padding-top: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >img{
    height: auto;
    width: 650px;
    @media (max-width: 700px) {
      width: 350px;
    } 
  }
`;

export function EmptyList() {
  return (
    <Root>
      <h3>Your tasks will be shown here!</h3>
      <img src={"/todo.jpg"} alt={"Todo"} loading={"lazy"} />
    </Root>
  );
}
