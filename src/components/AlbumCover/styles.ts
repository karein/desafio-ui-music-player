import styled from "styled-components";

export const ImgAlbumCover = styled.img`
  height: ${(props) => props.height ? props.height : 'auto'};
  width: ${(props) => props.width ? props.width : 'auto'};
`;

