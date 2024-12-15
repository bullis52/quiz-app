import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  text-align: center;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 30px;
  }
`;

export default PageContainer;
