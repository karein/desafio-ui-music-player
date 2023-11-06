
import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  gap: 10px;

  div {
    &.time-progress {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      span {
        color: #C4C4CC;
        /* opacity: 70%; */
      }
    }
  }
`