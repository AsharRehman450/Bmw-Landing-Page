import React from 'react';
import styles from "../Components/LandingPage.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { VscSearch } from "react-icons/vsc";
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/slider1-hd.webp";
import img2 from "../assets/slider2.media-hd.webp";
import img3 from "../assets/slder 3 .media-hd.webp";
import img4 from '../assets/slider4media-hd.webp';
import img11 from "../assets/11-teaser-square.jpg"
import img12 from "../assets/12-00-teaser-square.webp"
import img13 from "../assets/img1313-media-hd.webp"
import img14 from "../assets/img14...18-media-hd.webp"
import img15 from "../assets/img15...media-hd.webp"
import { IoIosArrowForward } from "react-icons/io";
import video1 from "../assets/vid1-stage-hd9.mp4"
import bmw1 from "../assets/bmw1-00-teaser-hd.webp"
import bmw2 from "../assets/bmw2-00-teaser-hd.webp"
import bmw3 from "../assets/bmw3.webp"
import bmw4 from "../assets/bmw4.webp"
import bmw5 from "../assets/bmw6.webp"
import bmw6 from "../assets/bm5.webp"
import bmw7 from "../assets/bmw7.webp"
import bmw8 from "../assets/bmw8.webp"
import bmw9 from "../assets/bmw9.jpg"
import bmw10 from "../assets/bmw10.webp"
import bmw11 from "../assets/bmw11.webp"
import bmw12 from "../assets/bmw12.jpg"
import bmw13 from "../assets/bmw13.webp"
import bmw14f from "../assets/bmw14f.webp"
import bmw15 from "../assets/bmw15.webp"
import bmw16 from "../assets/bmw16.webp"
import bmw17 from "../assets/bmw17.jpg"
import bmw18 from "../assets/bmw18.webp"


function LandingPage() {
    return (
        <>
            {/* Navbar */}
            <Navbar expand="lg" className={`${styles.navbarWhite} bg-body-tertiary fixed-top`} style={{ marginTop: "20px", width: "98%", marginLeft: "12px" }}>
                <Container>
                    <Navbar.Brand href="#home" className={styles.navbarBrand}>
                        <img className={styles.logoImg} src="/src/assets/logo.jpg" alt="logo" />
                        <div className={styles.line}></div>
                        Sheer Driving Pleasure
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={styles.navliks}>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Circular World</Nav.Link>
                            <Nav.Link href="#link">Digital Journey</Nav.Link>
                            <Nav.Link href="#link">Electric Future</Nav.Link>
                            <Nav.Link href="#home">Freude</Nav.Link>
                            <Nav.Link href="#home">Models</Nav.Link>
                            <VscSearch className={styles.searchIcon} />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Carousel Slider */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption className={styles.heading}>
                        <h3>BMW iDrive</h3>
                        <h1>Nulla vitae elit libero, a pharetra augue mollis interdum.</h1>
                        <button>Read more</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="First slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption className={styles.heading}>
                        <h3>BMW iDrive</h3>
                        <h1>Nulla vitae elit libero, a pharetra augue mollis interdum.</h1>
                        <button>Read more</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption className={styles.heading}>
                        <h3>BMW iDrive</h3>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                        <button>Read more</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption className={styles.heading} >
                        <h3>BMW iDrive</h3>
                        <h1> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h1>
                        <button>Read more</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



            <div >
                <div className="row">
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                        <div className={styles.imageContainer}>
                            <img src={img11} alt="Image 11" />
                            <div className={styles.textOverlay}>
                                <p className={styles.p1}>Smart Assistance</p>
                                <h1 className={styles.head1}>The BMW Driving Companionship</h1>
                                <button className={styles.butt2}>Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                        <div className={styles.imageContainer}>
                            <img src={img12} alt="Image 12" />
                            <div className={styles.textOverlay}>
                                <p className={styles.p2}>Smart Assistance</p>
                                <h1 className={styles.head2}>The BMW Driving Companionship</h1>
                                <button className={styles.butt3}>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <div className="row">
                    {/* First column with text */}
                    <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                        <div className={styles.text}>
                            Learn everything about
                            <div className={styles.text2}>
                                BMW here
                            </div>
                            <div className={styles.text3}>
                                <IoIosArrowForward /> BMW NEWS
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-7 d-flex justify-content-center align-items-center" style={{ marginTop: "30px" }}>
                        <Carousel style={{ width: "550px", height: "300px" }}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={img13}
                                    alt="First slide"
                                    style={{ height: "300px", objectFit: "cover" }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={img14}
                                    alt="Second slide"
                                    style={{ height: "300px", objectFit: "cover" }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={img15}
                                    alt="Third slide"
                                    style={{ height: "300px", objectFit: "cover" }}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className={styles.padding1}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <video autoPlay loop muted style={{ marginLeft: '70px', width: "100%", height: "80%" }}
                            src={video1}
                            className="video-fluid"
                        ></video>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className={styles.textContainer}>
                            <div className={styles.textFirst}>
                                Become a BMW expert
                            </div>
                            <div className="textTwo">
                                <IoIosArrowForward /> BMW Explain
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second last section  */}
            <div>
                <h1 style={{ textAlign: 'center', fontSize: '50px' }}>ALL BMW MODELS</h1>
                <div>
                    <div className="row" style={{ marginTop: '50px' }}>
                        <div className="col-8" >
                            <img src={bmw1} alt="" style={{ width: '100%' }} />
                        </div>
                        <div className="col-4" style={{ marginLeft: '-20px' }}>
                            <img src={bmw2} alt="" style={{ width: '100%', marginTop: '0px', objectFit: 'cover' }} />
                            <img src={bmw3} alt="" style={{ width: '100%', marginTop: '10px', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <img src={bmw4} alt="" style={{ width: '100%', marginTop: '10px' }} />
                        </div>
                        <div className="col-4">
                            <img src={bmw5} alt="" style={{ width: '100%', marginTop: '10px', marginLeft: '-10px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-4">
                            <img src={bmw6} alt="" style={{ width: '100%', marginTop: '10px', marginLeft: '-20px', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-4">
                            <img src={bmw7} alt="" style={{ width: '100%', marginTop: '10px' }} />
                            <img src={bmw9} alt="" style={{ width: '100%', marginTop: '10px' }} />
                        </div>
                        <div className="col-8">
                            <img src={bmw8} alt="" style={{ width: '99%', marginTop: '10px', marginLeft: '-10px' }} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src={bmw10} alt="" style={{ width: '100%', marginTop: '10px' }} />
                    </div>
                    <div className="col-4">
                        <img src={bmw11} alt="" style={{ width: '100%', marginTop: '10px', marginLeft: '-10px', objectFit: 'cover' }} />
                    </div>
                    <div className="col-4">
                        <img src={bmw12} alt="" style={{ width: '100%', marginTop: '10px', marginLeft: '-20px', objectFit: 'cover' }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src={bmw14f} alt="" style={{ width: '100%', marginTop: '10px', height: "98%" }} />
                        {/* <img src={bmw15} alt="" style={{ width: '100%', marginTop: '10px' }} /> */}
                    </div>
                    <div className="col-8">
                        <img src={bmw13} alt="" style={{ width: '99%', marginTop: '10px', marginLeft: '-10px' }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src={bmw16} alt="" style={{ width: '100%', marginTop: '10px' }} />
                    </div>
                    <div className="col-4">
                        <img src={bmw17} alt="" style={{ width: '100%', marginTop: '10px', marginLeft: '-10px', objectFit: 'cover' }} />
                    </div>
                    <div className="col-4">
                        <img src={bmw18} alt="" style={{ width: '100%', marginTop: '10px', marginLeft: '-20px', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>


            {/* footer */}

            <div className={styles.footer}>
                <div className={styles.footerLinks}>
                    <div className="row">
                        <div className="col-4">
                            <h4 className={styles.quickLinksHeader}>Quick Links</h4>
                            <hr className={styles.hr1} />
                            <ul className={styles.linksList}>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">BMW in your country</a></li>
                                <li><a href="#">BMW Group Careers</a></li>
                                <li><a href="#">EU Detergents Regulation</a></li>
                                <li><a href="#">REACH Regulation</a></li>
                                <li><a href="#">Compatibility Check</a></li>
                                <li><a href="#">Accessories Update</a></li>
                                <li><a href="#">Connected Test Vehicle</a></li>
                                <li><a href="#">Service Page Charging Products</a></li>
                                <li><a href="#">Cooperation Test Car</a></li>
                                <li><a href="#">EU Battery Regulation</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h4 className={styles.quickLinksHeader}>More BMW Websites</h4>
                            <hr className={styles.hr1} />
                            <ul className={styles.linksList}>
                                <li><a href="#">BMW M</a></li>
                                <li><a href="#">BMW M Motorsport</a></li>
                                <li><a href="#">BMW Golfsport</a></li>
                                <li><a href="#">BMW M Driving Experience</a></li>
                                <li><a href="#">BMW Welt</a></li>
                                <li><a href="#">BMW Group Classic</a></li>
                                <li><a href="#">BMW Corporate/Direct Sales</a></li>
                                <li><a href="#">BMW Group</a></li>
                                <li><a href="#">BMW Group Culture</a></li>
                                <li><a href="#">BMW ConnectedDrive Upgrades</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h4 className={styles.quickLinksHeader}>BMW.com</h4>
                            <hr className={styles.linkss} />
                            <ul className={styles.linksList}>
                                <li><a href="#">About BMW.com</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Cookies</a></li>
                                <li><a href="#">Imprint</a></li>
                                <li><a href="#">Legal Notice / Data protection</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h4 className={styles.quickLinksHeader}>Visit us on</h4>
                            <hr className={styles.linkss} />
                            <ul className={styles.linksList}>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">X</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footerCopy}>
                    <p>© BMW AG 2025</p>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
