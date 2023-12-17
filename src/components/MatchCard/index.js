import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchCard

  const isWon = matchStatus === 'Won' ? 'isWon' : 'isLost'

  return (
    <li className="recent-match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-match-logo"
      />
      <p className="recent-match name">{competingTeam}</p>
      <p className="recent-match result">{result}</p>
      <p className={`recent-match ${isWon}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
