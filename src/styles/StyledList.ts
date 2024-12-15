import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;

  li {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;

    strong {
      color: #333;
      font-weight: bold;
    }
  }
`;
