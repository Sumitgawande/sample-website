import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  
    return (

        <div className="sidebar-container"  >
         <h2>Featured posts</h2>
            <section className="featured-posts-section">
               
                <div className="sidebar-card">
                    <Link>This is sidebar of website</Link>
                </div>
            </section>
            <h2 className="catgory-heading">Categories</h2>
            <section className="categories-section">
                <div className="categories">
                    <ul className="category-links">
                     <li className="category-link">
                     <Link>Trending</Link>
                     </li>
                     <li className="category-link">
                   <Link>Political</Link>
                   </li>
                   <li>
                   <Link>Business</Link>
                   </li>
                    <li>
                    <Link>Sports</Link>
                    </li>
                    <li>
                    <Link>Tech-buzz</Link>
                    </li>
                    </ul>
                </div>
            </section>
        </div>
    )

}

export default Sidebar