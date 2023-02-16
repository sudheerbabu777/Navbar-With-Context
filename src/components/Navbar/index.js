// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickButton = () => {
        toggleTheme()
      }

      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const homeClassName = isDarkTheme ? 'home dark' : 'home light'

      const aboutClassName = isDarkTheme ? 'about dark' : 'about light'

      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navBarContainer = isDarkTheme
        ? 'navbar-container nav-dark'
        : 'navbar-container nav-light'

      return (
        <nav className={navBarContainer}>
          <Link to="/">
            <img src={logoUrl} alt="website logo" className="logo-image" />
          </Link>
          <ul className="list-container">
            <Link to="/">
              <li className={homeClassName}>Home</li>
            </Link>
            <Link to="/about">
              <li className={aboutClassName}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="button"
            onClick={onClickButton}
            data-testid="theme"
          >
            <img src={themeUrl} alt="theme" className="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
