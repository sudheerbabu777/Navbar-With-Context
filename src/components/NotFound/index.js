// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const Heading = isDarkTheme ? 'not-title dark' : 'not-title light'

      const Description = isDarkTheme ? 'description dark' : 'description light'

      const imageClassName = isDarkTheme ? 'not-image dark' : 'not-image light'

      const bgColor = isDarkTheme
        ? 'home-container bg-light'
        : 'home-container bg-dark'

      return (
        <>
          <Navbar />
          <div className={bgColor}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className={imageClassName}
            />
            <h1 className={Heading}> Lost Your Way?</h1>

            <p className={Description}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
