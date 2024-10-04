function ProjectItem(props){

    console.log(props.link);
    return (
        <div>
            <a href={props.link} >
                <div className="project-item">
                    <img src={props.imgSrc} alt="project-img" />
                    <div>
                        <h3>{props.name}</h3>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </a>
        </div>
        
        
    )
}

export default ProjectItem;