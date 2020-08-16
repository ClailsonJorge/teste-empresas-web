import styled from 'styled-components';

export const Container = styled.div`
  height: 250px;
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  margin: 8px 0;
  cursor: pointer;

  div.image-container {
    img {
      width: 300px;
      height: 200px;
    }
  }

  div.description-container {
    flex: 1;
    margin-left: 8px;
    h1 {
      color: #1a0e49;
      font-size: 24px;
    }
    p {
      color: #8d8c8c;
      font-size: 20px;
    }
    strong {
      color: #8d8c8c;
      font-size: 16px;
    }
  }

  @media (max-width: 1035px) {
    width: 90vw;
    div.description-container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 700px) {
    height: 125px;
    div.image-container {
      img {
        width: 150px;
        height: 100px;
      }
    }
  }
  @media (max-width: 500px) {
    div.description-container {
      h1 {
        color: #1a0e49;
        font-size: 18px;
      }
      p {
        color: #8d8c8c;
        font-size: 14px;
      }
      strong {
        color: #8d8c8c;
        font-size: 10px;
      }
    }
  }
`;
