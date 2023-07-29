import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  const onRedirectToJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">
          Find THe Job That <br /> Fits Your Life
        </h1>
        <p className="home-paragraph">
          Millions of people are searching for jobs, salary information,company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link className="retry-btn-link" to="/jobs">
          <button
            type="button"
            className="home-jobs-button"
            onClick={onRedirectToJobs}
          >
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
