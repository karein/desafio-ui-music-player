import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center; // vertical
  justify-content: center; // horizontal

  div {
    &.container-grid {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "full half half"
        "full min min";

      /* border: 1px solid red; */
      gap: 0.25rem;

      div {
        &.full-ui-view {
          display: flex;
          flex-direction: column;

          grid-area: full;

          background: #2A2141;
          border-radius: 9px;

          padding: 2.375rem;
          gap: 28px;

          div {
            &.music-info {
              display: flex;
              flex-direction: column;
            }
          }

          div {
            &.action-buttons{
              display: flex;
              justify-content: space-between;
            }
          }

          div {
            &.time-progress {
              display: flex;
              justify-content: space-between;
              color: #C4C4CC;
              font-size: 14px;
              opacity: 50%;
            }
          }
        }

        &.half-ui-view {
          background: #1f2128;
          grid-area: half;
          padding: 1.813rem;
          /* padding: 0.25rem; */
        }

        &.min-ui-view {
          background: #ff9637;
          grid-area: min;
          /* padding: 0.25rem; */
          padding: 1.813rem;
        }
      }
    }
  }
`;

export const Title = styled.text`
  font-size: 24px;
  font-weight: bold;
`
export const SubTitle = styled.text`
  font-size: 18px;
  /* color: #C4C4CC; */
  opacity: 50%;
`

// export const Container = styled.div`
//   display: flex;
//   height: 100vh;
//   align-items: center;
//   justify-content: center;

//   div {
//     &.container-grid {
//       /* display: grid;
//       text-align: center;
//       background-color: red;

//       align-content: center;

//       grid-template-rows: 0.2fr 1fr 0.5fr;
//       grid-template-areas:
//         "full half half"
//         "full min min"; */

//         display: grid;
//         height: 100vh;
//         grid-template-rows: 0.2fr 1fr 0.5fr;
//         grid-template-areas:
//         "sidebar main main"
//         "sidebar footer footer";
//         text-align: center;
//         grid-gap: 0.25rem;
//         transition: all 0.25s ease-in-out;
//         @media (max-width: 550px) {
//         grid-template-columns: 1fr;
//         grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
//         grid-template-areas:
//           "sidebar"
//           "main"
//           "footer";
//         }
//         color: white;
//     }
//   }
// `;