import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teams} = props
  const {id, teamName, teamImgUrl} = teams

  return (
    <Link to={`/team-matches/${id}`} className="team-banner-lists">
      <li className="team-lists">
        <img src={teamImgUrl} alt={teamName} className="team-banner-img" />
        <p className="team-banner-heading">{teamName}</p>
      </li>
    </Link>
  )
}

export default TeamCard
