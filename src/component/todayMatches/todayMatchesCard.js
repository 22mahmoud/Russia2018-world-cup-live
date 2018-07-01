import React from 'react';
import moment from 'moment-timezone';

import { Flex } from '../../ui/flex';
import { MatchCardWrapper, Status, Time } from './ui';

const TodayMatchs = ({
  home_team: homeTeam, away_team: awayTeam, datetime, status,
}) => [
  <MatchCardWrapper>
    <Flex justify="space-around">
      <h4> {homeTeam.country} </h4>
      <h4> {awayTeam.country} </h4>
    </Flex>
    {status !== 'future' ? (
      <Flex justify="space-around">
        <span> {homeTeam.goals} </span>
        <span> {awayTeam.goals} </span>
      </Flex>
    ) : (
      <Flex justify="space-around">
        <span> - </span>
        <span> - </span>
      </Flex>
    )}
    <Flex direction="column">
      <Status status={status}>{status}</Status>
      <Time> {moment.tz(datetime, moment.tz.guess()).calendar()} </Time>
    </Flex>
  </MatchCardWrapper>,
];

export default TodayMatchs;
