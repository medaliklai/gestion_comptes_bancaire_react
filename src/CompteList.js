
import {Link} from "react-router-dom"
const CompteList = (props) => {
 const comptes = props.comptes;
 const title = props.title;

    return (
<div class="compte-list">
        <div className="container">
        <h2 className="main-heading">{title}</h2>
        <table className="table">
        <thead>
        <th>id</th>
        <th>Numéro de compte</th>
        <th>Data de création</th>
        <th>Solde</th>
        <th>Action</th>
        </thead>
         {comptes.map((compte)=>(
            <tr>
                <td>{compte.id}</td>
                <td>{compte.numCompte}</td>
                <td>{compte.date}</td>
                <td>{compte.sole + "dt"}</td>
                <td><Link to={`/show/${compte.id}`}>Show</Link></td>
            </tr>
        ))}
        </table>
        </div>
        </div>
     );
}

export default CompteList;