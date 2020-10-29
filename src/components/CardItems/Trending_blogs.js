import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Trending_blogs.css'


const CardItem = (props) => {

    const [excerpt, setExcerpt] = useState(true);

   useEffect(()=>{
   
        // if (props.blogcontent.length > 13) {
        //     setExcerpt(true);
        // }
        // else
        //     setExcerpt(false);
   

   },[excerpt])

   
    const toggeleExcerpt = () => setExcerpt(!excerpt)

    return (
        <>
            <div className="card-items" >
                <div className="card-items-wrapper" >
                    <div className="card-item">
                        <li className="cards__item" >
                            <Link className="cards__item__link" >
                                <div className="blog_container">
                                    <figure className="figure__item__pic__wrap" data-category={props.category}>
                                        <img src={props.imgsrc} alt="travel_image" className="cards__item__img" />
                                    </figure>
                                    <div className="cards__item__info">
                                        <h5 className="cards__item__text">{props.text}</h5>
                                       <div className="inline-text"> <p className={excerpt ? 'ellipsis-text' : 'full-text'}>
                                           {props.blogcontent}</p></div><div className="inline-text excerpt-text" onClick={toggeleExcerpt}> 
                                           {excerpt ? 'read more' : '...read less' }
                                            </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
        </>
    )

}


export default CardItem;