import styled from 'styled-components';

interface SubTitleProps {
  color?: 'white' | 'black';
}

export const SubTitle = styled.h3<SubTitleProps>`
  font-size: 14px;
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 2rem;
  word-wrap: break-word;
  color: ${({ color }) => (color === 'white' ? '#fff' : '#000')};
  max-width: 322px;
  text-align: center;
`;
