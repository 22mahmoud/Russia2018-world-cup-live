import React from 'react';
import moment from 'moment-timezone';
import { connect } from 'react-redux';
import { getTodayMatches } from '../actions';

class HomeRoute extends React.Component {
  async componentDidMount() {
    this.props.getTodayMatches();
  }

  render() {
    const {
      todayMatches: { loading, matches },
    } = this.props;
    if (loading) {
      return <h1> loading.... </h1>;
    }
    return (
      <div>
        {matches.map(match => (
          <div
            key={match.fifa_id}
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <p> {match.home_team.country} </p>
            <p> {match.home_team.goals} </p>

            <p>{match.status}</p>
            <p> {moment.tz(match.datetime, moment.tz.guess()).calendar()} </p>

            <p> {match.away_team.goals} </p>
            <p> {match.away_team.country} </p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ todayMatches }) => ({ todayMatches: { ...todayMatches } });

const Home = connect(
  mapStateToProps,
  { getTodayMatches },
)(HomeRoute);

export default Home;
