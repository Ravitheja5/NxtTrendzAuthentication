import {Link} from "react-router-dom"
import './index.css'

const Header = () => {
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="header-image"
      />
      <div className="container">
        <p className="nav-link">Home</p>
        <p className="nav-link">Products</p>
        <p className="nav-link">Cart</p>
        <Link to="/login" ><button className="nav-link-button">Logout</button></Link>
      </div>
    </nav>
  )
}

export default Header
