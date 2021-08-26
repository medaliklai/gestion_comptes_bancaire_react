import { useState } from "react";
import {Link} from "react-router-dom";


// import useFetch from './useFetch';
const Chercher = () => {
const [numCompte,setNumCompte] = useState('');
const [Data,setData] = useState(null);
const handleSubmit = (e)=>{
 e.preventDefault();
 fetch(' http://localhost:8083/SpringMVC/servlet/chercher-par-compte'+numCompte).then(res=>{
  if (!res.ok) {
      throw Error('could not fetch the data');
  }
   return res.json();
}).then(Data=>{
  setData(Data);
  console.log(Data)
});
  
}

    return (
        <div className="container">
        <div className="chercher">
          <form onSubmit={handleSubmit}>
              <input
                     type="number"
                     required
                    
                     value={numCompte}
                     onChange = {(e)=> setNumCompte(e.target.value)}

              />
              <input class="btn-valider" type="submit"/>
          </form>
          { Data  && <table className="table">
        <thead>
        <th>id</th>
        <th>Numéro de compte</th>
        <th>Data de création</th>
        <th>Solde</th>
        <th>Action</th>
        </thead>
         {Data.map((compte)=>(
            <tr  key={compte.id} >
                <td>{compte.id}</td>
                <td>{compte.numCompte}</td>
                <td>{compte.date}</td>
                <td>{compte.sole + "dt"}</td>
                <td><Link to={`/show/${compte.id}`}>Show</Link></td>
                <td><Link to={`/Versement/${compte.numCompte}`}>Versement</Link></td>
                <td><Link to={`/Retrieve/${compte.numCompte}`}>Retrieve</Link></td>
            </tr>
        ))}
        </table> }
        </div>
        </div>
     );
}
export default Chercher;