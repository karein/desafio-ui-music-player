import { GlobalStyles } from './styles/global';
import { Container } from './style';

import { MusicInfo } from './components/MusicInfo';
import { AlbumCover } from './components/AlbumCover';
import { ProgressBar } from './components/ProgressBar';
import { ActionButtons } from './components/ActionButtons';


export function App() {
  return (
    <>
      <Container>
        <div className='container-grid'>
          <div className='full-ui-view'>
            <AlbumCover />

            <MusicInfo title='Cure For Me' subtitle='Aurora' />

            <ActionButtons />

            <ProgressBar />
          </div>

          <div className='half-ui-view'>
            <div>
              <div className='imgContainer'>
                <AlbumCover height='84px' width='84px' />
              </div>

              <MusicInfo title='You Never Know' subtitle='BLACKPINK' />
            </div>

            <ActionButtons />

            <ProgressBar width='300px' height='8px' />
          </div>

          <div className='min-ui-view'>
            <div>
              <div className='imgContainer'>
                <AlbumCover height='84px' width='84px' />
              </div>

              <MusicInfo title="I Love My Body" subtitle='HWASA' />
            </div>

            <ActionButtons />
          </div>
        </div>
      </Container>
      <GlobalStyles />
    </>
  );
}