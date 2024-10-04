import resume from "/Harsh Tarkar - Resume.pdf?url"

function Resume() {
    return (
        <div className="resume">
            <a href={resume} download="resume"><button>Download</button></a>
        </div>
    )
}

export default Resume;