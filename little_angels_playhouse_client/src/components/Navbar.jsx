import React from 'react';

const Navbar = (props) => {
    return (

       <ul>
<li><a href="#" class="active">Home</a></li>
<li><a href="#" class="active">About</a></li>
<li><a href="#" class="active">Experience</a></li>
<li><a href="#" class="active">Contact</a></li>
<li><button onClick={props.toggleForm } class="active">Register</button></li>
</ul>

    )
}

export default Navbar