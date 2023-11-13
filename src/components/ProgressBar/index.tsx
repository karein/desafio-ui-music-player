import { Container } from './styles';

import progressBar from '../../assets/progress-bar.png'

export function ProgressBar() {

  return (
    <Container>
      <img src={progressBar} alt="" />
      <div className='time-progress'>
        <span>03:20</span>
        <span>00:12</span>
      </div>
    </Container>
  );
}
