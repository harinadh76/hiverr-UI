import React from 'react'
import { Link } from 'react-router-dom'
import "./ProjectCard.scss"

const ProjectCard = ({item}) => {
  return (
    <Link to="/">
    <div className='projectCard'>
        <img src={item.img} alt="" />
        <div className="info">
          <img src={item.pp} alt="" />
          <div className="texts">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
          </div>
        </div>
    </div>
    </Link>
  )
}

export default ProjectCard

// import React from "react";
// import { Link } from "react-router-dom";
// import "./CatCard.scss";

// function CatCard({ card }) {
//   return (
//     <Link to="/gigs?cat=design">
//       <div className="catCard">
//         <img src={card.img} alt="" />
//         <span className="desc">{card.desc}</span>
//         <span className="title">{card.title}</span>
//       </div>
//     </Link>
//   );
// }
// export default CatCard;