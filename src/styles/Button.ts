import styled from 'styled-components';

const Button = styled.button.attrs(() => ({}))`
  width: 100%;
  max-width: 20rem;
  padding: 1.4rem 1.5rem;
  gap: 1.5625rem;
  border-radius: 1rem;
  background-color: #eaeef7;
  border: 0.0625rem solid #e0e0e0;
  margin-bottom: 0.5rem;
  cursor: pointer;
  box-shadow: 2px 2px 6px 0 #543c9740;

  text-align: center;
  word-wrap: break-word;
  white-space: normal;

  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background: linear-gradient(
      165.54deg,
      #141333 -33.39%,
      #202261 15.89%,
      #543c97 55.84%,
      #6939a2 74.96%
    );
    color: #fbfbff;
  }
`;

export default Button;
