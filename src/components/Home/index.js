import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <div className="bg-container">
      <Header />
      <div className="home-container">
        <div className="description-box">
          <h1 className="heading">Cloths That Get You Noticed</h1>
          <p className="paragraph">
            Fashion is the part of daily air and it doesn't quite help that it
            changes all the time. Cloths have always been a market of era and we
            are in a revolution. Your fashion makes you been seen and heared
            that way you are. So,celebrate teh seasons new and existing fashion
            in your way.
          </p>
          <button className="shop-now-button">Shop Now</button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="fashion-image"
        />
      </div>
    </div>
  )
}

export default Home
