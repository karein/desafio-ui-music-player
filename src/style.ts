import styled from "styled-components";

export const Container = styled.div`
  gap: 10px;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  display: flex;
  align-items: center; 
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;

  /* border: 1px solid blue; */

  button {
    &.randomBtn{
      position: absolute;

      top: 20px;
      left: 20px;

      height: 48px;
      outline: none;
      color: #666B7A;
      line-height: 1;
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
      min-width: 80px;
      text-align: center;
      white-space: normal;
      letter-spacing: 2px;
      border-radius: 500px;
      /* display: inline-block; */
      padding: 14px;
      transition-duration: .3s;
      text-transform: uppercase;
      border: 1px solid transparent;
      background-color: transparent;
      box-shadow: inset 0 0 0 2px #666B7A;
      transition-property: background-color, border-color, color, box-shadow, filter;

      display: flex;
      justify-content: center;
      align-items: center;
      
      &:hover{
        color: #E1E1E6;
        background-color: #616467;
        box-shadow: 0 0 0 2px #666B7A;
      }

      svg {
        height: 30px;
        width: 30px;
      }
    }

  }

  div {
    &.lyrics, &.translation{
      /* background-color: red; */

      flex: 1;
      /* display: block; */
      height: 100vh;
      /* max-width: 25%; */
      position: relative;
      /* margin-top: calc(20px + 48px); */
      word-break: break-word;

      display: flex;
      align-items: center;
      justify-content: center;

      div {
        &.animation_content{
          /* background-color: gray; */

          display: flex;
          text-align: center;
          align-items: center;
          justify-content: center;


          top: 30%;
          position: absolute;

          width: 100%;
          /* padding-left: 10px; */

          /* animation: scroll 20s linear infinite; */
        }
        &.animation_content p{
          text-align:  center/* justify */;

          font-size: 18px;
          font-weight: bold;
          color: #E1E1E6;

          /* background-color: purple; */
        }
        &.animation_content:hover{
          animation-play-state: paused;
          cursor: default;
        }
      }
    }
    /* &.lyrics::after {
      background-color: green;

      position: absolute;
      content: " ";
      left: 0;
      right: 0;
      top: 0;
      bottom: 80%;
      background-image: -webkit-linear-gradient(
        top,
        rgba(15, 13, 19, 1) 0%,
        transparent 100%
      );
    } */
  
    &.translation::after, &.lyrics::after {
      /* background-color: green; */

      position: absolute;
      content: " ";
      left: 0;
      right: 0;
      top: 0;
      bottom: 60%;
      background-image: -webkit-linear-gradient(
        top,
        rgba(15, 13, 19, 1) 5%,
        transparent 100%
      );
    }
  
    &.container-grid {
      gap: 28px;
      display: flex;
      flex-wrap: wrap;
      
      @media (max-width: 721px) {
        flex-direction: column;
        align-items: center;
        padding-bottom: 5px;
      }

      /* border: 1px solid red; */

      div {
        &.left-side {
          /* flex: 1; */
          display: flex;
          /* max-width: 16.655em; */
          /* max-width: 22em; */
          /* min-height: 31.125em; */
          width: min-content;
          height: auto;

          /* border: 1px solid green; */
          /* @media (max-width: 721px) {
            max-width: 100%;
          } */
          
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
          gap: 28px;
          display: flex;
          flex-direction: column;
          width: 22.357em;

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

  @keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -120%;
    }
  }

  @media (max-width: 865px) {
    /* background-color: pink; */

    /* flex: 1; */
    padding-top: calc(20px + 50px);

    div{
      &.container-grid{
        flex:1;
      }
      &.lyrics, &.translation{
        display: none;
      }
    }
  }
`;