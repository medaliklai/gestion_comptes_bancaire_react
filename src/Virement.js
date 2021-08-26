import { useState } from "react";
import { useHistory} from "react-router-dom";

const Virement = () => {
    const [numC1,setNumC1] = useState('');
    const [numC2,setNumC2] = useState('');
    const [mantant,setMantant] = useState('');
    const [error,setError] = useState(true);
    const history = useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch('http://localhost:8083/SpringMVC/servlet/virement/' + numC1 + '/' + numC2 + '/' + mantant,{
                        method:'Get',
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
    const handleAnnuler = ()=>{
        setNumC1('');
        setNumC2('');
        setMantant('')
    }
    return ( 
        <div class="container">
        <div className="virement">
        <h2 className="main-heading">Virement</h2>
        { !error && <div className="error">Compte n'existe pas ou solde insuffisant</div>}
           <form onSubmit = { handleSubmit }>
               <table>
                   <tr><td>Numéro de compte:</td>
                   <td><input
                    type="text"
                    required
                    value = {numC1}
                    onChange = { (e)=>{
                        setNumC1(e.target.value);
                    }
                    }
                   /></td></tr>
                   <tr>
                       <td>Numéro de compte</td>
                       <td><input
                       type="number"
                       required
                       value = {numC2}
                       onChange = {
                           (e)=>{
                               setNumC2(e.target.value)
                           }
                       }

                       /></td>
                   </tr>
                   <tr><td>Montant</td>
                   <td><input type="number"
                    required
                    value = { mantant }
                    onChange = {
                        (e)=>{
                            setMantant(e.target.value)
                        }
                    }
                   /></td></tr>

                   <tr>
                       <td></td>
                       <td><button className="btn-valider">Valider</button><button classeName="btn-annule" onClick = {handleAnnuler}>Annuler</button></td>
                   </tr>
               </table>
           </form>
        </div>
        </div>
     );
}
 
export default Virement;