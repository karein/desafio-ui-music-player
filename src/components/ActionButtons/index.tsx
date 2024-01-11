import { Container } from './styles';

import backButton from '../../assets/back-button.png'
import playButton from '../../assets/play-button.png'
import forwardButton from '../../assets/forward-button.png'
import { SongsInfoProps } from '../../App';

interface IActionButtons {
  songInfo?: SongsInfoProps,
  handleSong: (songId: string) => void
}

export function ActionButtons({ songInfo, handleSong }: IActionButtons) {
  const haSong = !!songInfo?.id

  return (
    <Container >
      <img src={backButton} alt="" />
      <button disabled={!haSong} onClick={() => haSong && handleSong(songInfo.id)}>
        <img src={playButton} alt="" />
      </button>
      <img src={forwardButton} alt="" />
    </Container>
  );
}
