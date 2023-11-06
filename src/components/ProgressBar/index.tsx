import { Container } from './styles';

import progressBar from '../../assets/progress-bar.png'

interface ProgressBarProps {
  width?: string;
  height?: string;
}


export function ProgressBar({ width, height }: ProgressBarProps) {
  const neWidth = width ? width : 'auto';
  const newHeight = height ? height : 'auto';

  return (
    <Container>
      <img src={progressBar} alt="" width={neWidth} height={newHeight} />
      <div className='time-progress'>
        <span>03:20</span>
        <span>00:12</span>
      </div>
    </Container>
  );
}
