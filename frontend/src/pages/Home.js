import React from 'react'

import Logo from '../images/logo.jpeg'

import Slide1 from '../images/slide-1.jpg'
import Slide2 from '../images/slide-2.jpg'
import Slide3 from '../images/slide-3.jpg'

import About from '../images/about-logo.png'
import About1 from '../images/about-1.jpg'
import About2 from '../images/about-2.jpg'
import About3 from '../images/about-3.jpg'

import Team1 from '../images/team-1.jpg'
import Team2 from '../images/team-2.jpg'
import Team3 from '../images/team-3.jpg'
import Team4 from '../images/team-4.jpg'

import Post1 from '../images/post-1.jpg'
import Post2 from '../images/post-2.jpg'
import Post3 from '../images/post-3.jpg'

import Sponsor1 from '../images/sponsor-1.png'
import Sponsor2 from '../images/sponsor-2.png'
import Sponsor3 from '../images/sponsor-3.png'
import Sponsor4 from '../images/sponsor-4.png'
import Sponsor5 from '../images/sponsor-5.png'

import '../App.css'

export default function Home() {
    return (
        <div>
            <section className="slider_section">
                <ul id="main-slider" className="owl-carousel main_slider">
                    <li className="main_slide d-flex align-items-center" style={{ backgroundImage: `url(${Slide1})` }} >
                        <div className="container">
                            <div className="slider_content">
                                <h3>Its Not Just a Haircut, Its an Experience.</h3>
                                <h1>Being a barber is about <br/>taking care of the people.</h1>
                                <p>Our barbershop is the territory created purely for males who appreciate<br/> premium
                                    quality, time and flawless look.</p>
                                <a href="#" className="default_btn">Make Appointment</a>
                            </div>
                        </div>
                    </li>
                    <li className="main_slide d-flex align-items-center" style={{ backgroundImage: `url(${Slide2})` }} >
                        <div className="container">
                            <div className="slider_content">
                                <h3>Classic Hair Style & Shaves.</h3>
                                <h1>Our hair styles<br/>enhances your smile.</h1>
                                <p>Our barbershop is the territory created purely for males who appreciate<br/> premium
                                    quality, time and flawless look.</p>
                                <a href="#" className="default_btn">Make Appointment</a>
                            </div>
                        </div>
                    </li>
                    <li className="main_slide d-flex align-items-center" style={{ backgroundImage: `url(${Slide3})` }} >
                        <div className="container">
                            <div className="slider_content">
                                <h3>Its Not Just a Haircut, Its an Experience.</h3>
                                <h1>Where mens want <br/>to look there very best.</h1>
                                <p>Our barbershop is the territory created purely for males who appreciate<br/> premium
                                    quality, time and flawless look.</p>
                                <a href="#" className="default_btn">Make Appointment</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

            <section id="about" className="about_section bd-bottom padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_content align-center">
                                <h3 className="wow fadeInUp" data-wow-delay="100ms">Introducing</h3>
                                <h2 className="wow fadeInUp" data-wow-delay="200ms">The Barber Shop <br/>Science 1991
                                </h2>
                                <img className="wow fadeInUp" data-wow-delay="500ms" src={About}
                                     alt="logo" />
                                    <p className="wow fadeInUp" data-wow-delay="600ms">Barber is a person whose
                                        occupation is mainly to cut dress groom style and shave men's and boys' hair. A
                                        barber's place of work is known as a "barbershop" or a "barber's". Barbershops
                                        are also places of social interaction and public discourse. In some instances,
                                        barbershops are also public forums.</p>
                                    <a href="#" className="default_btn wow fadeInUp" data-wow-delay="600ms">More About
                                        Us</a>
                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-block">
                            <div className="about_img">
                                <img src={About1} alt="idea-images" className="about_img_1 wow fadeInLeft"
                                     data-wow-delay="200ms" />
                                    <img src={About2} alt="idea-images" className="about_img_2 wow fadeInRight"
                                         data-wow-delay="400ms" />
                                        <img src={About3} alt="idea-images"
                                             className="about_img_3 wow fadeInLeft" data-wow-delay="600ms" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service_section bg-grey padding">
                <div className="container">
                    <div className="section_heading text-center mb-40 wow fadeInUp" data-wow-delay="300ms">
                        <h3>Trendy Salon &amp; Spa</h3>
                        <h2>Our Services</h2>
                        <div className="heading-line"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="200ms">
                            <div className="service_box">
                                <i className="bs bs-scissors-1"></i>
                                <h3>Haircut Styles</h3>
                                <p>Barber is a person whose occupation is mainly to cut dress style.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="300ms">
                            <div className="service_box">
                                <i className="bs bs-razor-2"></i>
                                <h3>Beard Trimming</h3>
                                <p>Barber is a person whose occupation is mainly to cut dress style.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="400ms">
                            <div className="service_box">
                                <i className="bs bs-brush"></i>
                                <h3>Smooth Shave</h3>
                                <p>Barber is a person whose occupation is mainly to cut dress style.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="500ms">
                            <div className="service_box">
                                <i className="bs bs-hairbrush-1"></i>
                                <h3>Face Masking</h3>
                                <p>Barber is a person whose occupation is mainly to cut dress style.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="book_section padding">
                <div className="book_bg"></div>
                <div className="map_pattern"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-6">
                            <form action="appointment.php" method="post" id="appointment_form"
                                  className="form-horizontal appointment_form">
                                <div className="book_content">
                                    <h2>Make an appointment</h2>
                                    <p>Barber is a person whose occupation is mainly to cut dress groom <br/>style and
                                        shave men's and boys hair.</p>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-6 padding-10">
                                        <input type="text" id="app_name" name="app_name" className="form-control"
                                               placeholder="Name" required />
                                    </div>
                                    <div className="col-md-6 padding-10">
                                        <input type="email" id="app_email" name="app_email" className="form-control"
                                               placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-6 padding-10">
                                        <input type="text" id="app_phone" name="app_phone" className="form-control"
                                               placeholder="Your Phone No" required />
                                    </div>
                                    <div className="col-md-6 padding-10">
                                        <input type="text" id="app_free_time" name="app_free_time"
                                               className="form-control" placeholder="Your Free Time" required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-6 padding-10">
                                        <select className="form-control" id="app_services" name="app_services">
                                            <option>Services</option>
                                            <option>Hair Styling</option>
                                            <option>Shaving</option>
                                            <option>Face Mask</option>
                                            <option>Hair Wash</option>
                                            <option>Beard Trimming</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 padding-10">
                                        <select className="form-control" id="app_barbers" name="app_barbers">
                                            <option>Choose Barbers</option>
                                            <option>Michel Brown</option>
                                            <option>Jonathan Smith</option>
                                            <option>Jack Tosan</option>
                                            <option>Martin Lane</option>
                                        </select>
                                    </div>
                                </div>
                                <button id="app_submit" className="default_btn" type="submit">Make Appointment</button>
                                <div id="msg-status" className="alert" role="alert"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section id="team" className="team_section bd-bottom padding">
                <div className="container">
                    <div className="section_heading text-center mb-40 wow fadeInUp" data-wow-delay="300ms">
                        <h3>Trendy Salon &amp; Spa</h3>
                        <h2>Our Barbers</h2>
                        <div className="heading-line"></div>
                    </div>
                    <ul className="team_members row">
                        <li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="200ms">
                            <div className="team_member">
                                <img src={Team1} alt="Team Member" />
                                    <div className="overlay">
                                        <h3>Kyle Frederick</h3>
                                        <p>WEB DESIGNER</p>
                                    </div>
                            </div>
                        </li>
                        <li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="300ms">
                            <div className="team_member">
                                <img src={Team2} alt="Team Member" />
                                    <div className="overlay">
                                        <h3>José Carpio</h3>
                                        <p>WORDPRESS DEVELOPER</p>
                                    </div>
                            </div>
                        </li>
                        <li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="400ms">
                            <div className="team_member">
                                <img src={Team3} alt="Team Member" />
                                    <div className="overlay">
                                        <h3>Michel Ibáñez</h3>
                                        <p>ONLINE MARKETER</p>
                                    </div>
                            </div>
                        </li>
                        <li className="col-lg-3 col-md-6 sm-padding wow fadeInUp" data-wow-delay="500ms">
                            <div className="team_member">
                                <img src={Team4} alt="Team Member" />
                                    <div className="overlay">
                                        <h3>Adam Castellon</h3>
                                        <p>JAVA SPECIALIST</p>
                                    </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="reviews" className="testimonial_section padding">
                <div className="container">
                    <ul id="testimonial_carousel" className="testimonial_items owl-carousel">
                        <li className="testimonial_item">
                            <p>"There are design companies, and then there are user experience design interface
                                design<br/> professional. By far one of the worlds best known brands."</p>
                            <h4 className="text-white">Anita Tran, IT Solutions.</h4>
                        </li>
                        <li className="testimonial_item">
                            <p>"There are design companies, and then there are user experience design interface
                                design<br/> professional. By far one of the worlds best known brands."</p>
                            <h4 className="text-white">Leslie Williamson, Developer.</h4>
                        </li>
                        <li className="testimonial_item">
                            <p>"There are design companies, and then there are user experience design interface
                                design<br/> professional. By far one of the worlds best known brands."</p>
                            <h4 className="text-white">Fred Moody, Network Software.</h4>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="pricing_section bg-grey bd-bottom padding">
                <div className="container">
                    <div className="section_heading text-center mb-40 wow fadeInUp" data-wow-delay="300ms">
                        <h3>Save 20% On Beauty Spa</h3>
                        <h2>Our Barber Pricing</h2>
                        <div className="heading-line"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 sm-padding">
                            <div className="price_wrap">
                                <h3>Hair Styling</h3>
                                <ul className="price_list">
                                    <li>
                                        <h4>Hair Cut</h4>
                                        <p>Barber is a person whose occupation is mainly to cut dress groom style and
                                            shave men.</p>
                                        <span className="price">$8</span>
                                    </li>
                                    <li>
                                        <h4>Hair Styling</h4>
                                        <p>Barber is a person whose occupation is mainly to cut dress groom style and
                                            shave men.</p>
                                        <span className="price">$9</span>
                                    </li>
                                    <li>
                                        <h4>Hair Triming</h4>
                                        <p>Barber is a person whose occupation is mainly to cut dress groom style and
                                            shave men.</p>
                                        <span className="price">$10</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 sm-padding">
                            <div className="price_wrap">
                                <h3>Shaving</h3>
                                <ul className="price_list">
                                    <li>
                                        <h4>Clean Shaving</h4>
                                        <p>Barber is a person whose occupation is mainly to cut dress groom style and
                                            shave men.</p>
                                        <span className="price">$8</span>
                                    </li>
                                    <li>
                                        <h4>Beard Triming</h4>
                                        <p>Barber is a person whose occupation is mainly to cut dress groom style and
                                            shave men.</p>
                                        <span className="price">$9</span>
                                    </li>
                                    <li>
                                        <h4>Smooth Shave</h4>
                                        <p>Barber is a person whose occupation is mainly to cut dress groom style and
                                            shave men.</p>
                                        <span className="price">$10</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 sm-padding">
                            <div className="price_wrap">
                                <h3>Face Masking</h3>
                                <ul className="price_list">
                                    <li>
                                        <h4>White Facial</h4>
                                        <p>Barber is a person whose occupation is mainly to cut dress groom style and
                                            shave men.</p>
                                        <span className="price">$8</span>
                                    </li>
                                    <li>
                                        <h4>Face Cleaning</h4>
                                        <p>Barber is a person whose occupation is mainly to cut dress groom style and
                                            shave men.</p>
                                        <span className="price">$9</span>
                                    </li>
                                    <li>
                                        <h4>Bright Tuning</h4>
                                        <p>Barber is a person whose occupation is mainly to cut dress groom style and
                                            shave men.</p>
                                        <span className="price">$10</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta_section padding">
                <div className="container">
                    <div className="display-table">
                        <div className="table-cel">
                            <div className="cta_content align-center wow fadeInUp" data-wow-delay="300ms">
                                <h2>Making You Look Good <br/> Is In Our Haritage.</h2>
                                <p>Barber is a person whose occupation is mainly to cut dress groom <br/>style and shave
                                    men's and boys hair.</p>
                                <a href="#" className="default_btn">Make Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-section bd-bottom padding">
                <div className="container">
                    <div className="section-heading text-center mb-40 wow fadeInUp" data-wow-delay="300ms">
                        <h3>From Blog</h3>
                        <h2>A Good Newspaper Is A <br/> Nation Talking To Itself</h2>
                    </div>

                    <div className="row blog-wrap">
                        <div className="col-lg-4 col-md-6 sm-padding wow fadeInUp" data-wow-delay="200ms">
                            <div className="blog-item">
                                <div className="blog-thumb">
                                    <img src={Post1} alt="post" />
                                        <span className="category"><a href="#">interior</a></span>
                                </div>
                                <div className="blog-content">
                                    <h3><a href="#">Minimalist trending in modern architecture 2019</a></h3>
                                    <p>Building first evolved out dynamics between needs means available building
                                        materials attendant skills.</p>
                                    <a href="#" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 sm-padding wow fadeInUp" data-wow-delay="300ms">
                            <div className="blog-item">
                                <div className="blog-thumb">
                                    <img src={Post2} alt="post" />
                                        <span className="category"><a href="#">Architecture</a></span>
                                </div>
                                <div className="blog-content">
                                    <h3><a href="#">Terrace in the town yamazaki kentaro design workshop.</a></h3>
                                    <p>Building first evolved out dynamics between needs means available building
                                        materials attendant skills.</p>
                                    <a href="#" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 sm-padding wow fadeInUp" data-wow-delay="400ms">
                            <div className="blog-item">
                                <div className="blog-thumb">
                                    <img src={Post3} alt="post" />
                                        <span className="category"><a href="#">Design</a></span>
                                </div>
                                <div className="blog-content">
                                    <h3><a href="#">W270 house são paulo arquitetos fabio jorge architeqture.</a></h3>
                                    <p>Building first evolved out dynamics between needs means available building
                                        materials attendant skills.</p>
                                    <a href="#" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sponsor_section bg-grey padding">
                <div className="container">
                    <ul id="sponsor_carousel" className="sponsor_items owl-carousel">
                        <li className="sponsor_item">
                            <img src={Sponsor1} alt="sponsor-image" />
                        </li>
                        <li className="sponsor_item">
                            <img src={Sponsor2} alt="sponsor-image" />
                        </li>
                        <li className="sponsor_item">
                            <img src={Sponsor3} alt="sponsor-image" />
                        </li>
                        <li className="sponsor_item">
                            <img src={Sponsor4} alt="sponsor-image" />
                        </li>
                        <li className="sponsor_item">
                            <img src={Sponsor5} alt="sponsor-image" />
                        </li>
                        <li className="sponsor_item">
                            <img src={Sponsor1} alt="sponsor-image" />
                        </li>
                        <li className="sponsor_item">
                            <img src={Sponsor2} alt="sponsor-image" />
                        </li>
                        <li className="sponsor_item">
                            <img src={Sponsor3} alt="sponsor-image" />
                        </li>
                    </ul>
                </div>
            </div>

            <section className="widget_section padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 sm-padding">
                            <div className="footer_widget">
                                <img className="mb-15" src={Logo} alt="Brand" />
                                    <p>Our barbershop is the created for men who appreciate premium quality, time and
                                        flawless look.</p>
                                    <ul className="widget_social">
                                        <li><a href="#"><i className="social_facebook"></i></a></li>
                                        <li><a href="#"><i className="social_twitter"></i></a></li>
                                        <li><a href="#"><i className="social_googleplus"></i></a></li>
                                        <li><a href="#"><i className="social_instagram"></i></a></li>
                                        <li><a href="#"><i className="social_linkedin"></i></a></li>
                                    </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 sm-padding">
                            <div className="footer_widget">
                                <h3>Headquarters</h3>
                                <p>962 Fifth Avenue, 3rd Floor New York, NY10022</p>
                                <p>Hello@dynamiclayers.net <br/>(+123) 456 789 101</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 sm-padding">
                            <div className="footer_widget">
                                <h3>Opening Hours</h3>
                                <ul className="opening_time">
                                    <li>Monday - Friday 11:30am - 2:008pm</li>
                                    <li>Saturday – Monday: 9am – 8pm</li>
                                    <li>Monday - Friday 5:30am - 11:008pm</li>
                                    <li>Saturday - Sunday 4:30am - 1:00pm</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 sm-padding">
                            <div className="footer_widget">
                                <h3>Subscribe to our contents</h3>
                                <div className="subscribe_form">
                                    <form action="#" className="subscribe_form">
                                        <input type="email" name="email" id="subs-email" className="form_input"
                                               placeholder="Email Address..." />
                                            <button type="submit" className="submit">SUBSCRIBE</button>
                                            <div className="clearfix"></div>
                                            <div id="subscribe-result">
                                                <p className="subscription-success"></p>
                                                <p className="subscription-error"></p>
                                            </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};