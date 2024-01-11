import { useState } from 'react';

import DOMPurify from "dompurify";
import ReactHtmlParser from "html-react-parser";

import { MusicInfo } from './components/MusicInfo';
import { AlbumCover } from './components/AlbumCover';
import { ProgressBar } from './components/ProgressBar';
import { ActionButtons } from './components/ActionButtons';

import { Container } from './style';
import { GlobalStyles } from './styles/global';

import { ReactComponent as Shuffle } from './assets/icons/Shuffle.svg';
import { songsArray } from './helpers/songs/songsList'
import { musicLyricsArr } from './helpers/songs/formatLyrics'


export interface SongsInfoProps {
  title: string;
  artist: string;
  id: string
}

const songsObj = songsArray;
export function App() {
  const [songList, setSongList] = useState<SongsInfoProps[]>([]);
  const [lyric, setLyric] = useState<string>('');
  const [songId, setSongId] = useState<string | null>(null);

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

  const handleSong = (idSong: string) => {
    // console.log(idSong)
    // console.log('musicLyricsArr', musicLyricsArr)
    setSongId(idSong)
    const hasLyrics = musicLyricsArr.filter(e => e.name === idSong)

    console.log('handleSong hasLyrics', hasLyrics)

    const lyricString = hasLyrics[0] ? hasLyrics[0].lyrics.replace(/<br\/>/gm, '') : ''

    setLyric(lyricString)
  }

  // const returnLyrics = () => {
  //   return (
  //     <pre>
  //       I run from the liars, the fuel on the fire<br />
  //       I know I created myself<br />
  //       I know I can't fight the sad days and bad nights<br />
  //       But I never asked for your help<br />
  //       <br></br >
  //       You got nerves<br />
  //       But they never show unless they hurt<br />
  //       So you blamed it all on my love<br />
  //       The moving heart I got<br />
  //       <br></br >
  //       But I don't need a cure for me<br />
  //       I don't need it<br />
  //       No, I don't need a cure for me<br />
  //       I don't need it<br />
  //       No, I don't need a cure for me<br />
  //       I don't need it<br />
  //       I don't need it<br />
  //     </pre>
  //   )
  // }

  const returnLyrics = () => {
    const hasLyrics = musicLyricsArr.filter(e => e.name === songId)
    const lyricString = hasLyrics[0] ? hasLyrics[0].lyrics : null

    console.log('lyricString', lyricString, '\n\n')

    if (lyricString) {
      /* forma 1 */
      // const lines = lyricString.split('<br/>')
      // console.log('lines', lines, '\n\n')
      // const content = lines.map((line, index) => <p key={index}>{line}</p>)

      /* forma 2 */
      // const content = lyricString.join('')
      // console.log('content', content)

      /* forma 3 */
      const sanitizedData = DOMPurify.sanitize(lyricString);
      console.log('sanitizedData', sanitizedData, '\n\n')

      const content = ReactHtmlParser(sanitizedData);
      console.log('content', content, '\n\n')

      return (
        <div>{content}</div>
      )
    }
    return (<p>vazio</p>)
  }

  return (
    <>
      <Container>
        <div className='lyrics'>
          <div className="animation_content">
            {/* {returnLyrics()} */}

            {/* <p dangerouslySetInnerHTML={{ __html: lyric || '' }} > */}
            {/* </p> */}

            {lyric}
          </div>
        </div>

        <div className='container-grid'>

          <div className='left-side'>
            <div className='full-ui-view'>
              <AlbumCover />

              <MusicInfo title={songList[0]?.title} subtitle={songList[0]?.artist} />

              <ActionButtons songInfo={songList[0]} handleSong={handleSong} />

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

              <ActionButtons songInfo={songList[1]} handleSong={handleSong} />

              <ProgressBar />
            </div>

            <div className='min-ui-view'>
              <div>
                <div className='imgContainer'>
                  <AlbumCover height='84px' width='84px' />
                </div>

                <MusicInfo title={songList[2]?.title} subtitle={songList[2]?.artist} />
              </div>

              <ActionButtons songInfo={songList[2]} handleSong={handleSong} />
            </div>
          </div>

        </div>

        <div className='translation'>
          <div className="animation_content">
            {returnLyrics()}
          </div>
        </div>

        <button onClick={handleChangeSongs} className='randomBtn'> <Shuffle size={16} /> </button>

      </Container>
      <GlobalStyles />
    </>
  );
}