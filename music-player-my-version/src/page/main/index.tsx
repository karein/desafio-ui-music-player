import { Container } from './styles'
import playerImg from '../../assets/image-player.png'
import {
  BsFillSkipBackwardFill,
  BsPlayFill,
  BsFillSkipForwardFill
} from 'react-icons/bs'


export function Main() {
  return (
    <Container>
      <div className='palyer-content'>
        <div className='img-card-player'>
          <img src={playerImg} alt="" />
        </div>

        <div className='info-player'>
          <span className='title-info'>Nome Musica</span>
          <span className='subtitle-info'>Nome banda</span>
        </div>

        <div className='buttons-player'>
          <button><BsFillSkipBackwardFill size={28} /></button>
          <button><BsPlayFill size={28} /></button>
          <button><BsFillSkipForwardFill size={28} /></button>
        </div>

        <div className='marcadores'>
          <span>03:20</span>
          <span>03:20</span>
        </div>
      </div>

    </Container>
  )
}