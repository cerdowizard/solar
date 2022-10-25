import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/home.scss'
import solar from '../assets/Group 7.png'
import whiteman from '../assets/man-with-white-helmet-near-solar-panel 1.png'
import plus from '../assets/Group 15.png'
import clear from '../assets/clarity_group-outline-badged.png'
import user from '../assets/clarity_group-outline-badged.png'
import solaMan from '../assets/Mask group.png'
import phone from '../assets/bxs_phone-call.png'
import firstImage from '../assets/Component 1.png'
import secImage from '../assets/Component 2.png'
import thirdImage from '../assets/Component 3.png'
import Footer from "../components/Footer";
const Home = () => {
    return (
        <div>
            <div id="Home">
                <Navbar />
                <div className=" bgHolder">
                    <div className="textHolder">
                        <h1>Own Your Free Electricity
                            with Solar Panel by
                            Helios Energeia</h1>
                        <p>We make the process easy by providing
                            the support and resources you need, each step of the way.</p>
                        <div className="btnHolder">
                            <button className="leftBtn">Discover more</button>
                            <button className="rightBtn">Learn more</button>
                        </div>
                    </div>

                </div>
                <div className="ourServices container">
                    <div className="row">

                        <div className="col-md-6 left">
                            <h3>OUR SERVICES</h3>
                            <h2>We Drive The Transition
                                To Reliable Energy</h2>
                            <div className="details">
                                <div className="icon">
                                    <img src={solar} alt="" />
                                </div>
                                <div className="text">
                                    <h1>Solar Panel Services</h1>
                                    <p>Solar panels system are capital intensive assets can produce
                                        a significant income they are operated to a high standard.</p>
                                </div>
                            </div>

                            <div className="details one">
                                <div className="icon">
                                    <img src={solar} alt="" />
                                </div>
                                <div className="text">
                                    <h1>Inverter Inspection</h1>
                                    <p>Solar panels system are capital intensive assets can produce
                                        a significant income they are operated to a high standard.</p>
                                </div>
                            </div>

                            <div className="details">
                                <div className="icon">
                                    <img src={solar} alt="" />
                                </div>
                                <div className="text">
                                    <h1>Updates & Monitoring</h1>
                                    <p>Solar panels system are capital intensive assets can produce
                                        a significant income they are operated to a high standard.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="white">
                                <p>We drive the transition to moresustainable, reliable & affordable energy system. With our innovative technologies, we energize society!</p>
                                <img src={whiteman} alt="" />
                                <p>A Leading Supplier Of Solar Materials For Manufacturers, Installers & Contractors. Our sales warehouses include PV industry enables us to provide in-depth material sourcing expertise for every production process.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="ourProject">
                    <h1>Our Projects</h1>
                    <button>See Details</button>
                </div>
                <div className="sectionCounter container">
                    <div className="holder">
                        <div className="iconHolder">
                            <div className="circle">
                                <img src={plus} alt="" />

                            </div>
                            <div className="content">
                                <span>100+</span>
                                <p>Installed Capacity</p>
                            </div>
                        </div>
                        <div className="iconHolder">
                            <div className="circle">
                                <img src={clear} alt="" />

                            </div>
                            <div className="content">
                                <span>10+</span>
                                <p>Customers Globally</p>
                            </div>
                        </div>
                        <div className="iconHolder">
                            <div className="circle">
                                <img src={user} alt="" />

                            </div>
                            <div className="content">
                                <span>5+</span>
                                <p>Customers Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="demo container mb-5">
                    <div className="row">
                        <div className="col-md-6 left">
                            <div className="textContainer">
                                <h1>Solar Solutions</h1>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                <button><img src={phone} alt="" /> Call Now</button>
                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <img src={solaMan} alt="" />
                        </div>
                    </div>
                </div>
                <div className="about">
                    <div className="content container">
                        <div className="row">
                            <div className="col-md-6 right">
                                <h1>ABOUT  <span>HELIOS ENERGEIA</span></h1>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation</p>
                                <button className='btn'>Learn More</button>
                            </div>
                            <div className="col-md-6 left">
                                <img src={solaMan} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="contact container">
                    <h1 className='text-center '>CONTACT US</h1>
                    <div className="row mt-5">
                        <div className="col-md-6 left">
                            <div className="fes">
                                <img src={firstImage} alt="" />
                                <div className="lilcontent">
                                    <h5>Location:</h5>
                                    <span>9, Wharf Road, Kariko Tower,
                                        (5th Floor), Apapa, Lagos</span>
                                </div>

                            </div>
                            <div className="fes">
                                <img src={secImage} alt="" />
                                <div className="lilcontent">
                                    <h5 className=''>Email:</h5>
                                    <span>info@procuremasters.com</span>
                                </div>

                            </div>
                            <div className="fes">
                                <img src={thirdImage} alt="" />
                                <div className="lilcontent">
                                    <h5>Call:</h5>
                                    <span className='one'>(+234)81 1580 0891</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <form action="">
                                <div className="fes">
                                    <input type="text" placeholder='First Name' />
                                    <input type="text" placeholder='Last Name' />
                                </div>
                                <div className="fes">
                                    <input type="text" placeholder='Your Email' />
                                    <input type="text" placeholder='Phone Number' />
                                </div>
                                <div className="div">
                                    <textarea placeholder='Message'></textarea>
                                </div>
                                <div className="btns">
                                    <button className="btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default Home