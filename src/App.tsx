import { GlobalStyles } from './styles/global';
import { Container, Title, SubTitle } from './style';

import albumCover from './assets/image-player.png'
import progressBar from './assets/progress-bar.png'
import backButton from './assets/back-button.png'
import playButton from './assets/play-button.png'
import forwardButton from './assets/forward-button.png'

export function App() {
  return (
    <>
      <Container>
        <div className='container-grid'>
          <div className='full-ui-view'>
            <img src={albumCover} alt="" className='albumCoverImg' />

            <div className='music-info'>
              <Title>titulo</Title>
              <SubTitle>subtitulo</SubTitle>
            </div>

            <div className='action-buttons'>
              <img src={backButton} alt="" />
              <img src={playButton} alt="" />
              <img src={forwardButton} alt="" />
            </div>

            <div>
              <img src={progressBar} alt="" />
              <div className='time-progress'>
                <span>03:20</span>
                <span>00:12</span>
              </div>
            </div>
          </div>

          <div className='half-ui-view'>
            <div>
              <div>
                <img src={albumCover} alt="" className='albumCoverImgHalf' />
              </div>

              <div className='music-info-half'>
                <Title>titulo</Title>
                <SubTitle>subtitulo</SubTitle>
              </div>
            </div>

            <div className='action-buttons'>
              <img src={backButton} alt="" />
              <img src={playButton} alt="" />
              <img src={forwardButton} alt="" />
            </div>

            <div className='progressInfo'>
              <img src={progressBar} alt="" />

              <div className='time-progress'>
                <span>03:20</span>
                <span>00:12</span>
              </div>
            </div>
          </div>

          <div className='min-ui-view'>
            <div>
              <div>
                <img src={albumCover} alt="" className='albumCoverImgHalf' />
              </div>

              <div className='music-info-half'>
                <Title>titulo</Title>
                <SubTitle>subtitulo</SubTitle>
              </div>
            </div>

            <div className='action-buttons'>
              <img src={backButton} alt="" />
              <img src={playButton} alt="" />
              <img src={forwardButton} alt="" />
            </div>
          </div>
        </div>
      </Container>
      <GlobalStyles />
    </>
  );
}


/* 

import "./styles.css";
import styled from "styled-components";
const App = () => {
  return (
    <MainContainer>
      <Container>
        <Main>Main</Main>
        <SideBar>SideBar</SideBar>
        <Footer>Footer</Footer>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: red;
`;

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 1fr 0.5fr;
  grid-template-areas:
    "sidebar main main"
    "sidebar footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "sidebar"
      "main"
      "footer";
  }
  color: white;
`;

const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;
const SideBar = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.25rem;
`;

const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`;

export default App;

*/