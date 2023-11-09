import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center; 
  justify-content: center;

  /* border: 1px solid blue; */

  div {
    &.container-grid {
      gap: 32px;
      display: flex;
      flex-wrap: wrap;

      /* border: 1px solid red; */

      div {
        &.left-side {
          display: flex;

          /* border: 1px solid green; */
          
          div {
            &.full-ui-view {
              display: flex;
              flex-direction: column;
    
              border-radius: 9px;
              background: #2A2141;
    
              gap: 28px;
              padding: 38px;

              /* border: 1px solid pink; */
            }
          }
        }
      }

      div {
        &.right-side {
          flex: 1;
          gap: 32px;
          display: flex;
          flex-direction: column;

          /* border: 1px solid yellow; */

          div {
            &.half-ui-view {
              background: #2A2141;
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
          }
    
          div {
            &.min-ui-view {
              gap: 28px;
              padding: 29px;
              background: #2A2141;
              border-radius: 10px;
      
              display: flex;
              flex-direction: column;

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

    }
  }
`;