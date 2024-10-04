import ProjectItem from "./ProjectItem";
import noted from "/noted.png";
import travel_tracker from "/travel-tracker.png";
import zzz from "/zzz.png";
import { useState } from "react";

function Project() {

    const [proj, setProj] = useState([
        {name:"Note-D", desc:"A simple notes app using React as frontend and node+express backend. PostgreSQL as database.", imgSrc:noted, link:"https://harshtarkar.github.io/Note-D-nonDB/"},
        {name:"zzz battery charge tracker", desc:"A simple tracker to track in-game activities and rewards using React.", imgSrc:zzz, link:"https://harshtarkar.github.io/zzz-battery-charge-tracker/"},
        {name:"Travel tracker", desc:"Travel tracker for keeping a track of all the places you visit and display them on a map.", imgSrc:travel_tracker, link:"https://github.com/HarshTarkar/Travel-Tracker"},
    ])

    return (
        <div className="project-list">
            {proj.map((proj,index) => {
                return(
                    <ProjectItem name={proj.name} desc={proj.desc} imgSrc={proj.imgSrc} link={proj.link} key={index}/>
                )
            })}
        </div>
    )
}

export default Project;