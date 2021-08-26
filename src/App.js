import './index.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Compte from './Comptes';
import Virement from './Virement';
import Chercher from './Chercher';
import Show from './Show';
import Versement from './Versement';
import Retrieve from './Retrieve';
import Footer from './footer'

function App() {
  
  return (
    <Router>
    <div className="App">
    <div className="header"><Nav/></div>
     
<div className="content"> 
<Switch>
<Route exact path="/"><Home/></Route>
<Route path="/comptes"><Compte/></Route>
<Route path="/virement"><Virement/></Route>
<Route path="/chercher"><Chercher/></Route>
 <Route path="/show/:id"><Show/></Route>
 <Route path="/Versement/:numC"><Versement/></Route>
 <Route path="/Retrieve/:numC"><Retrieve/></Route>
     </Switch>
     </div>
     <div className="footer"><Footer/></div>
    
    </div>
    </Router>
  );
}

export default App;
