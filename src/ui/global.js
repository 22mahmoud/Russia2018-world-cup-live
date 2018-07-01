import styled, { keyframes } from 'styled-components';
import { COLORS } from '../config/constants';

const fill = keyframes`
  0%{
    transform:rotate(0deg)
  }
  100%{
    transform:rotate(180deg)
  }
`;

export const Loading = styled.div`
  width: 50px;
  height: 50px;
  align-self: center;
  background: transparent;
  border-radius: 50%;
  margin: 0 auto;
  border-top: 10px solid ${COLORS.BLUE};
  border-right: 10px solid ${COLORS.WHITE};
  border-bottom: 10px solid ${COLORS.WHITE};
  border-left: 10px solid ${COLORS.WHITE};
  transform: rotate(-45deg);
  animation: ${fill} 0.5s infinite linear;
`;
