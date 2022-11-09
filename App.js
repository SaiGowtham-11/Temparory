import './App.css'
import './index.css'
import {
  faBed,
  faCheck,
  faGlobe,
  faHouse,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <>
      <img
        class='logo'
        src='https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo-2020-present.jpg'
        alt='logo'
      ></img>
      <div class='buttonGroup'>
        <button class='button'>
          Hotels <FontAwesomeIcon icon={faBed} />
        </button>
        <button class='button'>
          Vacation Rentals <FontAwesomeIcon icon={faHouse} />
        </button>
        <button class='button'>
          Things to Do <FontAwesomeIcon icon={faCheck} />
        </button>
        <button class='button'>
          Restaurants <FontAwesomeIcon icon={faUtensils} />
        </button>
        <button class='button'>
          Travel Stories <FontAwesomeIcon icon={faGlobe} />
        </button>
        <button class='button'>More ...</button>
      </div>
      <div class='searchBar'></div>
    </>
  )
}

export default App
