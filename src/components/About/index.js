// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const className = isDarkTheme ? 'home-title dark' : 'home-title light'
      const homeClassName = isDarkTheme
        ? 'home-container bg-light'
        : 'home-container bg-dark'

      return (
        <>
          <Navbar />
          <div className={homeClassName}>
            <img src={aboutUrl} alt="about" className="home-image" />
            <h1 className={className}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
