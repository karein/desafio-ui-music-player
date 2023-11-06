import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center; 
  justify-content: center;

  div {
    &.container-grid {
      display: grid;
      grid-template-rows: auto;
      grid-template-areas:
        "full half half"
        "full min min";

      /* border: 1px solid red; */
      gap: 32px;

      div {
        &.full-ui-view {
          display: flex;
          flex-direction: column;

          grid-area: full;

          background: #2A2141;
          border-radius: 9px;

          gap: 28px;
          padding: 38px;
        }

        &.half-ui-view {
          background: #2A2141;
          grid-area: half;
          display: flex;
          padding: 29px;
          gap: 28px;
          flex-direction: column;
          border-radius: 10px;

          div {
            display: flex;

            div {
              &.imgContainer{
                margin-right: 28px;

              }
            }
          }
        }

        &.min-ui-view {
          padding: 29px;
          grid-area: min;
          background: #2A2141;

          display: flex;
          flex-direction: column;
          border-radius: 10px;
          gap: 28px;


          div {
            display: flex;

            div {
              &.imgContainer{
                margin-right: 28px;

              }
            }
          }
        }
      }
    }
  }
`;