import { Container, Title, SubTitle } from './styles';

interface TextProps {
  title?: string;
  subtitle?: string;
}

export function MusicInfo({ title, subtitle }: TextProps) {
  return (
    <Container>
      <Title>{title || "TITLE"}</Title>
      <SubTitle>{subtitle || "ARTIST"}</SubTitle>
    </Container>
  );
}
