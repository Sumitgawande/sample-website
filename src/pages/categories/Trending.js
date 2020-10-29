import React from 'react'
import CardItem from '../../components/CardItems/Trending_blogs'
import './categories.css'



const Trending = () => {

    return (
        <div className="cards">
            <h2>Trending posts</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__Items">
                        <CardItem imgsrc='./travel_vlog.jpg'
                            text="Explore the biggest adventure of the jungle where you will"
                            category="jungle"
                            marginTop ='65vh'
                            blogcontent=" I also have the same problem, and the 
                            solution is I didn't bind the event in my
                             onClick. so when it renders for the first
                              time and the data is more, which ends up
                               calling the state setter again, which 
                               triggers React to call your function
                                again and so on.
                                I also have the same problem, and the 
                            solution is I didn't bind the event in my
                             onClick. so when it renders for the first
                              time and the data is more, which ends up
                               calling the state setter again, which 
                               triggers React to call your function
                               I also have the same problem, and the 
                            solution is I didn't bind the event in my
                             onClick. so when it renders for the first
                              time and the data is more, which ends up
                               calling the state setter again, which 
                               triggers React to call your function
                               I also have the same problem, and the 
                            solution is I didn't bind the event in my
                             onClick. so when it renders for the first
                              time and the data is more, which ends up
                               calling the state setter again, which 
                               triggers React to call your function
                               I also have the same problem, and the 
                            solution is I didn't bind the event in my
                             onClick. so when it renders for the first
                              time and the data is more, which ends up
                               calling the state setter again, which 
                               triggers React to call your. "
                            header='Trending Posts'
                            path="/services" />
                    </ul>
                </div>
            </div>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__Items">
                        <CardItem imgsrc='/travel_vlog.jpg'
                            text="Explore the biggest adventure of the jungle where you will"
                            category="jungle"
                            marginTop ='65vh'
                            header='Trending Posts'
                            path="/services" />
                    </ul>
                </div>
            </div>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__Items">
                        <CardItem imgsrc='/travel_vlog.jpg'
                            text="Explore the biggest adventure of the jungle where you will"
                            category="jungle"
                            marginTop ='65vh'
                            header='Trending Posts'
                            path="/services" />
                    </ul>
                </div>
            </div>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__Items">
                        <CardItem imgsrc='/travel_vlog.jpg'
                            text="Explore the biggest adventure of the jungle where you will"
                            category="jungle"
                            marginTop ='65vh'
                            header='Trending Posts'
                            path="/services" />
                    </ul>
                </div>
            </div>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__Items">
                        <CardItem imgsrc='/travel_vlog.jpg'
                            text="Explore the biggest adventure of the jungle where you will"
                            category="jungle"
                            marginTop ='65vh'
                            header='Trending Posts'
                            path="/services" />
                    </ul>
                </div>
            </div>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__Items">
                        <CardItem imgsrc='/travel_vlog.jpg'
                            text="Explore the biggest adventure of the jungle where you will"
                            category="jungle"
                            marginTop ='65vh'
                            header='Trending Posts'
                            path="/services" />
                    </ul>
                </div>
            </div>
        
        </div>



    )

}


export default Trending;