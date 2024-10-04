import { useState } from "react";
import { Link } from "react-router-dom";

function Header(){
    
    const [toggle, setToggle] = useState("☼");

    function switchMode(){
        document.body.classList.toggle("light");
        document.querySelector(".toggle").classList.toggle("light");
        document.querySelector(".nav-list").classList.toggle("light");
        document.querySelector(".resume").classList.toggle("light-resume");
        setToggle(toggle==="☾"?"☼":"☾");
    }

    function hideMenu(){
        document.querySelector(".nav-list").classList.toggle("hide");
    }

    return (
        <header>
            <div>
                <nav>
                    <Link to="/self-intro"><div>Harsh Tarkar</div></Link>
                    <ul className='nav-list'>
                        <Link to="/projects"><li>Projects</li></Link>
                        <Link to="/resume"><li>Resume</li></Link>
                        <Link to="/hobbies"><li>Hobbies</li></Link>
                        <li><button className="toggle" onClick={switchMode}>{toggle}</button></li>
                    </ul>
                    <button className="menu-btn" onClick={hideMenu}>☰</button>
                </nav>
            </div>
        </header>
        
    )
        
}

export default Header;
