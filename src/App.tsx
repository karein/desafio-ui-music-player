import { GlobalStyles } from './styles/global';
import { Container } from './style';

import { MusicInfo } from './components/MusicInfo';
import { AlbumCover } from './components/AlbumCover';
import { ProgressBar } from './components/ProgressBar';
import { ActionButtons } from './components/ActionButtons';
import { useState } from 'react';

interface SongsInfoProps {
  title: string;
  artist: string;
}

const songsObj = [
  { title: "Magic Shop", artist: "BTS" },
  { title: "Cure For Me", artist: "Aurora" },
  { title: "I Love My Body", artist: "HWASA" },
  { title: "You Never Know", artist: "BLACKPINK" },
  { title: "HOLO", artist: "Lee Hi" },
]

export function App() {
  const [songList, setSongList] = useState<SongsInfoProps[]>([]);



  const handleChangeSongs = () => {
    let arr: SongsInfoProps[] = [];
    // console.log('arr 0', arr)


    // const newArr = songsObj.filter((value, index) => songsObj.indexOf(value) === index);

    // const ids = songsObj.map(({ title }) => title);
    // const filtered = songsObj.filter(({ title }, index) => !ids.includes(title, index + 1));


    while (arr.length < 3) {
      // sorteando um item da lista
      const song = songsObj[Math.floor(Math.random() * songsObj.length)];
      arr = [...arr, song];

      // removendo itens repetidos caso algum tenha sido sorteado 
      const ids = arr.map(({ title }) => title);
      const filtered = arr.filter(({ title }, index) => !ids.includes(title, index + 1));
      arr = [...filtered];
    }

    console.log('arr 3', arr)
    setSongList(arr)


    // for (let i = 0; i < 3; i++) {
    //   const song = songsObj[Math.floor(Math.random() * songsObj.length)];
    //   arr.push({ ...new Set(song) })
    // }

    // const tests = arr.splice(arr.length, 0, songsObj[0], songsObj[1], songsObj[2]);
    // console.log('teste', tests);

    // console.log('arr', arr);
    // setSongList(arr)
  }

  return (
    <>
      <Container>
        <button onClick={handleChangeSongs} className='randomBtn'>sdasd</button>
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

              <ProgressBar width='300px' height='8px' />
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