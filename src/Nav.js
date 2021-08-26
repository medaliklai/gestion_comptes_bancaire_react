import {Link} from 'react-router-dom';

const Nav = ()=>{
    return(
        
        <div className="container">

<div className="logo"><span>G</span> <p>-banque</p> </div>
<nav>
<ul>
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/comptes">Comptes</Link></li>
        <li><Link to="/virement">Virement</Link></li>
        <li><Link to="/chercher">Chercher</Link></li>
    </ul>
    </nav>
    
</div>
    );
}
export default Nav;