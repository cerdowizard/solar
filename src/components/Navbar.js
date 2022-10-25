import img from '../assets/Helios Limited No BG Black-01 1.png'
import img2 from '../assets/ri_customer-service-2-line.png'
import '../styles/home.scss'
const Navbar = () => {
  return (
    <div id='Navbar'>
      <nav>
        <div className="left">
          <img src={img} alt="" />
          <span> Helios Energeia</span>
         
        </div>
        <div className="rigth">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>About</li>
            <li className='Contact'><img src={img2} alt="" /> Contact US</li>
          </ul>

        </div>
      </nav>
    </div>
  )
}

export default Navbar