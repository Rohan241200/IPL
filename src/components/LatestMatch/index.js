import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInning,
    secondInning,
    manOfTheMatch,
    umpires,
  } = latestMatch

  return (
    <div className="latest-match-container">
      <div className="latest-match-details-card">
        <div className="team-date-venue-result">
          <p className="latest-match-text competing-team">{competingTeam}</p>
          <p className="latest-match-text date">{date}</p>
          <p className="latest-match-text venue">{venue}</p>
          <p className="latest-match-text result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-competing-team-logo"
        />
      </div>
      <hr className="separate" />
      <div className="first-second-motm-umpires">
        <p className="latest-match-competing-text">First Innings</p>
        <p className="latest-match-competing-obj">{firstInning}</p>
        <p className="latest-match-competing-text">Second Innings</p>
        <p className="latest-match-competing-obj">{secondInning}</p>
        <p className="latest-match-competing-text">Man Of The Match</p>
        <p className="latest-match-competing-obj">{manOfTheMatch}</p>
        <p className="latest-match-competing-text">Umpires</p>
        <p className="latest-match-competing-obj">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
