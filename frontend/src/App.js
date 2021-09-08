
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Allsupplier from './components/Allsupplier';
 import Addsupplier from './components/Addsupplier';
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
   <div>
     <Nav/>
     <Header/>
     
     <Route path = "/addsup" exact component={Addsupplier}/>
     <Route path = "/allsup" exact component={Allsupplier}/>
     
   </div>
   </Router>
  );
}

export default App;
