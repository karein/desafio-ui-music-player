import { useState } from 'react';

import { MusicInfo } from './components/MusicInfo';
import { AlbumCover } from './components/AlbumCover';
import { ProgressBar } from './components/ProgressBar';
import { ActionButtons } from './components/ActionButtons';

import { Container } from './style';
import { GlobalStyles } from './styles/global';

import { ReactComponent as Shuffle } from './assets/icons/Shuffle.svg';


interface SongsInfoProps {
  title: string;
  artist: string;
}

const songsObj = [
  { title: "Idiota", artist: "Jão" },
  { title: "HOLO", artist: "Lee Hi" },
  { title: "Magic Shop", artist: "BTS" },
  { title: "Slow Dancing", artist: "V" },
  { title: "Cure For Me", artist: "Aurora" },
  { title: "I Love My Body", artist: "HWASA" },
  { title: "You Never Know", artist: "BLACKPINK" },
  { title: "Girassol", artist: "Priscilla ft. Whindersson Nunes" },
  { title: "Rise", artist: "The Glitch Mob, Mako, and The Word Alive" },
]

export function App() {
  const [songList, setSongList] = useState<SongsInfoProps[]>([]);



  const handleChangeSongs = () => {
    let arr: SongsInfoProps[] = [];

    while (arr.length < 3) {
      // sorteando um item da lista
      const song = songsObj[Math.floor(Math.random() * songsObj.length)];
      arr = [...arr, song];

      // removendo itens repetidos caso algum tenha sido sorteado 
      const ids = arr.map(({ title }) => title);
      const filtered = arr.filter(({ title }, index) => !ids.includes(title, index + 1));
      arr = [...filtered];
    }

    setSongList(arr)
  }

  return (
    <>
      <Container>
        <button onClick={handleChangeSongs} className='randomBtn'> <Shuffle size={16} /> </button>
        <div className='container-grid'>

          <div className='left-side'>
            <div className='full-ui-view'>
              <AlbumCover />

              <MusicInfo title={songList[0]?.title} subtitle={songList[0]?.artist} />

              <ActionButtons />

              <ProgressBar />
            </div>
          </div>

          <div className='right-side'>
            <div className='half-ui-view'>
              <div>
                <div className='imgContainer'>
                  <AlbumCover height='84px' width='84px' />
                </div>

                <MusicInfo title={songList[1]?.title} subtitle={songList[1]?.artist} />
              </div>

              <ActionButtons />

              <ProgressBar />
            </div>

            <div className='min-ui-view'>
              <div>
                <div className='imgContainer'>
                  <AlbumCover height='84px' width='84px' />
                </div>

                <MusicInfo title={songList[2]?.title} subtitle={songList[2]?.artist} />
              </div>

              <ActionButtons />
            </div>
          </div>

        </div>
      </Container>
      <GlobalStyles />
    </>
  );
}