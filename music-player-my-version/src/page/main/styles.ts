import styled from "styled-components";
// import playerImg from '../../assets/image-player.png'

export const Container = styled.main`
  display: flex;
  background: #000;  
  margin: 0 auto;
  padding: 2.5rem 1rem;

  div{

    &.palyer-content{
      background:#2A2141;
      padding: 38px;
      display: flex;
      margin: 0 auto;
      flex-direction:column ;
      border-radius: 6px;
      line-height: 28px ;
    }
  
    &.img-card-player{
      border-radius: 6px ;
      /* background: url(playerImg) ; */
    }
  
    img{
      height: 12rem;
      width: 12rem;
    }

    &.info-player{
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      padding: 1rem 0;
      gap: 0.50rem;
      margin: 0;
    }

    &.buttons-player{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0.25rem 0;
      margin: 0;
      gap: 0.50rem;

      button{
        border: none;
        outline: none;
        background-color: transparent;
        color: #fff;
      }
    }

    &.marcadores{
      display: block;
    }

    &.barTime{
      width: 95% ;
      height: 0.50rem;
      background: #D9D9D9;
      margin: 1rem 0;
      border-radius: 5px;
    }
    
    &.timer{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0.25rem 0;

      span {
        font-size: 14px;
        font-weight: 400;
        color: #C4C4CC;
        opacity:0.7;
      }
    }

    span{
      &.title-info {
        font-size: 24px;
        font-weight: 600;
        color: #E1E1E6 ;
      }

      &.subtitle-info{
        font-size: 19px;
        font-weight: 400;
        color: #E1E1E6;
        opacity:0.8;
      }
    }
  }
`;