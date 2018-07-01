import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getTodayMatches } from '../actions';
import TodayMatchs from '../component/todayMatches/todayMatchesCard';
import { Flex } from '../ui/flex';
import { Loading } from '../ui/global';

class HomeRoute extends React.Component {
  async componentDidMount() {
    this.props.getTodayMatches();
  }

  render() {
    const {
      todayMatches: { loading, matches },
    } = this.props;
    if (loading) {
      return (
        <div style={{ height: '100vh', display: 'flex' }}>
          <Loading />
        </div>
      );
    }

    return (
      <Flex justify="space-between">
        {matches.map(match => <TodayMatchs key={match.fifa_id} {...match} />)}
      </Flex>
    );
  }
}

const mapStateToProps = ({ todayMatches }) => ({ todayMatches: { ...todayMatches } });

const Home = connect(
  mapStateToProps,
  { getTodayMatches },
)(HomeRoute);

export default Home;
