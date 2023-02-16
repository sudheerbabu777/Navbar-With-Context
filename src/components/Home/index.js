// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const isDark = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const className = isDarkTheme ? 'home-title dark' : 'home-title light'

      const homeClassName = isDarkTheme
        ? 'home-container bg-light'
        : 'home-container bg-dark'

      return (
        <>
          <Navbar />
          <div className={homeClassName}>
            <img src={isDark} alt="home" className="home-image" />
            <h1 className={className}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
