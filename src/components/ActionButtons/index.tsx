import { Container } from './styles';

import backButton from '../../assets/back-button.png'
import playButton from '../../assets/play-button.png'
import forwardButton from '../../assets/forward-button.png'


export function ActionButtons() {
  return (
    <Container>
      <img src={backButton} alt="" />
      <img src={playButton} alt="" />
      <img src={forwardButton} alt="" />
    </Container>
  );
}
