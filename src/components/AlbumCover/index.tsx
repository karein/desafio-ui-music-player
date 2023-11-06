import { ImgAlbumCover } from './styles';

import albumCover from '../../assets/image-player.png'

interface ImgProps {
  height?: string;
  width?: string;
}

export function AlbumCover({ height, width }: ImgProps) {
  return (
    <>
      <ImgAlbumCover src={albumCover} height={height} width={width} />
    </>
  );
}
