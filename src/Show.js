
import useFetch from './useFetch';
import {Link,useParams,useHistory} from 'react-router-dom';
const Show =()=>{

    const {id} = useParams() ;
    const history = useHistory()
    const  {Data, isPanding} = useFetch('http://localhost:8083/SpringMVC/servlet/one-compte/'+ id);
    console.log(Data);
    const handleClick = ()=>{
        fetch('http://localhost:8083/SpringMVC/servlet/remove-compte'+Data.id,{
            method:"DELETE"
        }).then(()=>{
            history.push('/comptes')

        })
    }
    return(
        <div className="container">
        <div className="box">
     <h2 className="main-heading">Compte Details</h2>
         {isPanding && <div>Loading...</div>}
         {
             Data && (
             <article>
                 <p>client name</p>
                 <p>Numéro de compte : {Data.numCompte}</p>
                 <p>Date de création{Data.date}</p>
                 <p>Solde : {Data.sole}</p>
                 <Link to="/comptes">Go-Back</Link>
         <button className="btn-delete"onClick={handleClick}>Delete</button>
             </article>

         )}
         
         </div>
         </div>
        

    );
}
export default Show;