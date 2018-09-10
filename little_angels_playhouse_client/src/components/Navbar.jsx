import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (

       <ul>
<li><Link href="#" class="active">Home</Link></li>
<li class="dropdown"><Link href="dropbtn" href="#">About</Link></li>
<div class="content"> </div>
   <Link href="#">Experience</Link>
   <Link href="#">Contact</Link>


<li><Link href="#"></Link>Contact</li>
</ul>
    )
}

export default Navbar