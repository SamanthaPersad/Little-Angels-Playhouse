import React from 'react';

const Navbar = (props) => {
    return (

       <ul>
<li><a href="#" className="active">Home</a></li>
<li><button onClick={props.toggleAbout } className="active">About</button></li>
<li><a href="#" className="active">Experience</a></li>
<li><button onClick={props.toggleContact } className="active">Contact</button></li>
<li><button onClick={props.toggleForm } className="active">Register</button></li>
</ul>

    )
}

export default Navbar