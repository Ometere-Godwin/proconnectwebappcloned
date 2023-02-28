import './navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="left">
        <img className='logo' src="/assets/logo.png" alt="" />
      </div>
      <div className="middle">
        <a href="#">Home</a>
        <a href="#">Webinar</a>
        <a href="#">Testimonials</a>
        <a href="#">List of Schools</a>
        <a href="#">Countries</a>
        <a href="#">Study Abroad Pathway</a>
      </div>
      <div className="right">
        <button className="getStarted">Get Started</button>
      </div>
    </div>
  )
}
