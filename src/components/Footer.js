import '../styles/footer.scss'
const Footer = () => {
  return (
    <div id='Footer'>
      <div className="">
        <div className="fesLayer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 left">
                <h1>Our Newsletter</h1>
                <p>Renewable energy world is the authoritative source for information on markets,
                  policy and finance covering all renewable technologies. </p>
              </div>
              <div className="col-md-6 right">
                <div className="iconHolder">
                  <input type="text" placeholder='Example@email.com' />
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="secondLayer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="titles">
                  <h1>USEFUL LINKS</h1>
                </div>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Projects</li>
                  <li>Contacts</li>

                </ul>
              </div>
              <div className="col-md-3">
                <div className="titles">
                  <h1>OUR SERVICES</h1>
                </div>
                <ul>
                  <li>Residental Services</li>
                  <li>Commercial Services</li>
                  <li>Solar Services</li>
                  <li>Testing & Tagging</li>
                  <li>Commercial Lighting</li>

                </ul>
              </div>
              <div className="col-md-3">
                <div className="titles">
                  <h1>CONTACT US</h1>
                </div>
                <ul>
                  <li>9, Wharf Road, Kariko Tower,
                    (5th Floor), Apapa, Lagos</li>
                  <li>Phone: (234)81 1580 0891</li>
                  <li>Email: info@procuremasters.com</li>
                </ul>
              </div>

              <div className="col-md-3">
                <div className="titles">
                  <h1>About Helios Energeia</h1>
                </div>
                <p>Helios Energeia is one of the leading
                  residential and commercial electrical
                  contractors which offer high quality
                  electrical services to our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lastLayer">
        <p>Copyright Helios Energeia. All Rights Reserved</p>
        <p>Designed by JAROW</p>
      </div>
    </div>
  )
}

export default Footer