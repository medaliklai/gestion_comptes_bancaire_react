import useFetch from './useFetch';
import CompteList from './CompteList';

const Comptes = () => {
    const {Data,isLoading} = useFetch('http://localhost:8083/SpringMVC/servlet/All');
    return ( 
        <div class="container">
        <div className="comptes-preview">
        {isLoading &&   <div class="loading">
      Loading...</div>}
        {Data && <CompteList comptes={Data} title="Listes des comptes" />}
        </div>
        </div>
     );
}
 
export default Comptes;