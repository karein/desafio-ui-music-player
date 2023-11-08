import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  
  min-height: 100vh;

  div {
    &.container-grid {
      display: flex;
      flex-wrap: wrap;
      align-items: center; 
      justify-content: center;

      /* border: 1px solid red; */
      gap: 32px;

      div {
        &.left-side {
          display: flex;
          
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
          }
        }
      }

      div {
        &.right-side {
          display: flex;
          flex-direction: column;
          gap: 32px;

          div {
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
          }
    
          div {
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

    }
  }
`;