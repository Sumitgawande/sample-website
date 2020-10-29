import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import CardItem from '../../components/CardItems/Trending_blogs'
import './categories.css'
import Hero from '../../components/Hero/HeroComponent'
/**
* @author
* @function Techbuzz
**/


function Techbuzz(props) {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="posts-container">
                <h2 style={{ marginTop: '10px', textAlign: 'center' }}>Tech-buzz posts</h2>
                <div className="category-cards" style={{ marginTop: '10px' }}>
                    <div className="category_cards_container">
                        <div className="category_cards__wrapper">
                            <ul className="category_cards__Items">
                                <CardItem imgsrc='/travel_vlog.jpg'
                                    text="Explore the latest political news"
                                    header='Politics posts'
                                    category="political"
                                    marginTop='0vh'
                                    path="/services" />
                            </ul>
                        </div>
                        <div className="category_cards__wrapper">
                            <ul className="category_cards__Items">
                                <CardItem imgsrc='/travel_vlog.jpg'
                                    text="Explore the latest political news"
                                    header='Politics posts'
                                    category="political"
                                    marginTop='0vh'
                                    path="/services" />
                            </ul>
                        </div>
                        <div className="category_cards__wrapper">
                            <ul className="category_cards__Items">
                                <CardItem imgsrc='/travel_vlog.jpg'
                                    text="Explore the latest political news"
                                    header='Politics posts'
                                    category="political"
                                    marginTop='0vh'
                                    path="/services" />
                            </ul>
                        </div>
                        <div className="category_cards__wrapper">
                            <ul className="category_cards__Items">
                                <CardItem imgsrc='/travel_vlog.jpg'
                                    text="Explore the latest political news"
                                    header='Politics posts'
                                    category="political"
                                    marginTop='0vh'
                                    path="/services" />
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />

        </div>
    )

}


export default Techbuzz;