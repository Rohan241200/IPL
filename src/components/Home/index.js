import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(each => ({
      id: each.id,
      teamName: each.name,
      teamImgUrl: each.team_image_url,
    }))

    this.setState({teamList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, teamList} = this.state
    return (
      <div className="bg-card">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="dashboard-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
            </div>
            <ul className="team-items">
              {teamList.map(each => (
                <TeamCard teams={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default Home
