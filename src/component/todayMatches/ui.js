import styled from 'styled-components';

import { COLORS } from '../../config/constants';

export const MatchCardWrapper = styled.div`
  background: ${COLORS.BLUE};
  color: ${COLORS.WHITE};
  width: 100%;
  padding: 0.8em;
`;

export const Status = styled.span`
  margin-top: 1.8em;
  margin-bottom: 0.8em;
  padding: 0.3em;
  background: ${({ status }) => {
    switch (status) {
      case 'future':
        return COLORS.WHITE;
      case 'in progress':
        return COLORS.RED;
      default:
        return COLORS.GREEN;
    }
  }};
  color: ${({ status }) => {
    switch (status) {
      case 'future':
        return COLORS.BLUE;
      case 'in progress':
        return COLORS.WHITE;
      default:
        return COLORS.BLUE;
    }
  }};
`;

export const Time = styled.span`
  color: ${COLORS.WHITE};
  opacity: 0.8;
`;
