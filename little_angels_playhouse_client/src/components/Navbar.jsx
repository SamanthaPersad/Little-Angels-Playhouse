import React from 'react';

const Navbar = (props) => {
    return (

       <ul>
<li><a href="#" className="active">Home</a></li>
<li><a href="#" className="active">About</a></li>
<li><a href="#" className="active">Experience</a></li>
<li><a href="#" className="active">Contact</a></li>
<li><button onClick={props.toggleForm } className="active">Register</button></li>
</ul>

    )
}

export default Navbar