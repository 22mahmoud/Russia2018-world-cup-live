import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
`;

export const TodayMatchCardWrapper = styled.div`
  border: 1px solid #000;
  width: 100%;
`;
