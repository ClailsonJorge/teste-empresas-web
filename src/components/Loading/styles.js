import styled from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const Spinner = styled(AiOutlineLoading3Quarters)`
  font-size: 66px;
  color: #57bbbc;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  animation: rotate 1s ease infinite;
`;
