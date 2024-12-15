import styled from 'styled-components';

export const ArrowButton = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  justify-self: start;
  border: none;
  cursor: pointer;
  margin-left: 9rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
  }

  @media (max-width: 360px) {
    margin-left: 0;
  }
`;
