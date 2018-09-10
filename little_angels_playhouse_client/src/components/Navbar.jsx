import React from 'react';

const Navbar = (props) => {
    return (

       <ul>
<li><button onClick={props.toggleHome } className="active">Home</button></li>
<li><button onClick={props.toggleAbout } className="active">About</button></li>
<li><button onClick={props.toggleExperience } className="active">Experience</button></li>
<li><button onClick={props.toggleContact } className="active">Contact</button></li>
<li><button onClick={props.toggleForm } className="active">Register</button></li>
</ul>

    )
}

export default Navbar