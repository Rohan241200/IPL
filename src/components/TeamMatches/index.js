import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    recentMatches: [],
    latestMatch: {},
    isLoading: true,
    team: '',
    teamBanner: {},
  }

  componentDidMount() {
    this.getRecentTeamMatches()
  }

  getRecentTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const latestMatchDetails = {latestMatch: data.latest_match_details}
    const {latestMatch} = latestMatchDetails

    const recentMatches = data.recent_matches
    const updatedRecentMatch = recentMatches.map(each => ({
      id: each.id,
      competingTeamLogo: each.competing_team_logo,
      competingTeam: each.competing_team,
      result: each.result,
      matchStatus: each.match_status,
    }))

    const updatedLatestMatch = {
      competingTeam: latestMatch.competing_team,
      date: latestMatch.date,
      venue: latestMatch.venue,
      result: latestMatch.result,
      competingTeamLogo: latestMatch.competing_team_logo,
      firstInning: latestMatch.first_innings,
      secondInning: latestMatch.second_innings,
      manOfTheMatch: latestMatch.man_of_the_match,
      umpires: latestMatch.umpires,
    }

    const teambannerUrl = {teamBannerUrl: data.team_banner_url}
    const {teamBannerUrl} = teambannerUrl
    this.setState({teamBanner: teamBannerUrl})

    switch (true) {
      case teamBannerUrl.includes('rcb'):
        this.setState({team: 'rcb'})
        break
      case teamBannerUrl.includes('kkr'):
        this.setState({team: 'kkr'})
        break
      case teamBannerUrl.includes('kxp'):
        this.setState({team: 'kxp'})
        break
      case teamBannerUrl.includes('csk'):
        this.setState({team: 'csk'})
        break
      case teamBannerUrl.includes('rr'):
        this.setState({team: 'rr'})
        break
      case teamBannerUrl.includes('mi'):
        this.setState({team: 'mi'})
        break
      case teamBannerUrl.includes('sh'):
        this.setState({team: 'sh'})
        break
      case teamBannerUrl.includes('dc'):
        this.setState({team: 'dc'})
        break
      default:
        break
    }

    this.setState({
      latestMatch: updatedLatestMatch,
      recentMatches: updatedRecentMatch,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, recentMatches, latestMatch, team, teamBanner} = this.state
    return (
      <div className={`team-banner-container ${team}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-banner-card">
            <img src={teamBanner} alt="team banner" className="banner-img" />
            <p className="team-latest-matches">Latest Matches</p>
            <LatestMatch latestMatch={latestMatch} />
            <ul className="recent-match-card-container">
              {recentMatches.map(each => (
                <MatchCard matchCard={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
