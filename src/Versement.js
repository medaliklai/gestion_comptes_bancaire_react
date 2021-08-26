import { useState } from "react";
import { useHistory, useParams} from "react-router-dom";

const Versement = () => {
    
    const {numC} = useParams();
    const [mantant,setMantant] = useState('dfg');
    const [error,setError] = useState(true);
    const history = useHistory();
    console.log(numC)
    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch('http://localhost:8083/SpringMVC/servlet/verser/' + numC + '/'  + mantant,{
                        method:'Post',
                        headers:{'content-type':'application/json'}
        }).then(res=>{
            if (!res.ok){
                setError(false);
            }
            else{
                history.push('/Comptes');
            }
           
        });

    }
    return ( 
        <div class="container">
        <div className="Versement">
        
        <h2>Versement</h2>
        { !error && <div className="error">Compte n'existe pas ou solde insuffisant</div>}
           <form onSubmit = { handleSubmit }>
               <input 
               type="number"
               required
               value={ mantant }
               onChange = {
                 (e)=>{
                     setMantant(e.target.value)
                 }
             }

               />
               <input type="submit"/>
                  
           </form>
        </div>
        </div>
     );
}
 
export default Versement;