import React from "react";
import "../components/team.css"
import team01 from "../images/team-01.png"
import team02 from "../images/team-02.png"
import team03 from "../images/team-03.png"
import team04 from "../images/team-04.png"

const teamMembers = [
    {
        imgUrl: team01,
        name: 'Joe Hart',
        position: 'CEO '
    },
    {
        imgUrl: team02,
        name: 'Linda Norman',
        position: 'Product Designer'
    },
    {
        imgUrl: team03,
        name: 'Norman Masika',
        position: 'UX/UI'
    },
    {
        imgUrl: team04,
        name: 'Felix Kibe',
        position: 'Front-End Developer'
    },
]


const Team = () => {
    return (
        <section className="our_team">
            <div className="container">
                <div className="team_content">
                    <h6 className="subtitle"> Our Team </h6>
                    <h2>
                        Meet with <span className="highlight"> our team </span>
                    </h2>
                </div>
                <div className="team_wrapper">
                    {teamMembers.map((item, index) => (
                    <div className="team_item" key={index}>
                        <div className="team_img">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="team_details">
                            <h4>{item.name}</h4>
                            <p className="description">{item.position}</p>
                        </div>
                        <div className="team_member-social">
                            <span><i class="ri-linkedin-line"></i></span>
                            <span><i class="ri-twitter-line"></i></span>
                        </div>
                    </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team