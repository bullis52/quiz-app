import styled from 'styled-components';

interface TitleProps {
  color?: 'white' | 'black';
}

export const Title = styled.h1<TitleProps>`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 700;
  line-height: 2rem;
  word-wrap: break-word;
  color: ${({ color }) => (color === 'white' ? '#fff' : '#000')};
`;
