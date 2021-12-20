
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Allsupplier from './components/Allsupplier';
 import Addsupplier from './components/Addsupplier';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Addemployee from './components/Addemployee';
import AllEmployee from './components/Allemployee';
import EditForm from './components/editemployee';

function App() {
  return (
    <Router>
   <div>
     <Nav/>
     <Header/>
     
     <Route path = "/addsup" exact component={Addsupplier}/>
     <Route path = "/allsup" exact component={Allsupplier}/>
     <Route path = "/addemp" exact component={Addemployee}/>
     <Route path = "/allemp" exact component={AllEmployee}/>
     <Route path = "/getemp" exact component={EditForm}/>
     
   </div>
   </Router>
  );
}

export default App;
