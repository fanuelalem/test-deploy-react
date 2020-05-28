import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
 import '../App.css';
import UserForm from "../container/userForm"
import UserListItem from "../container/userListItem"
import NavBar from "./navBar"
// import Comments from "./../container/Comments"

const App = props => (
  <Router>

    <div className="App">

       <div className="container">
         <div className="row">
           <div className="col-12">
             <NavBar/>
             <Route exact path="/" component={UserForm}/>
             <Route exact path="/users/:userId" component={UserListItem}/>

              
                 {/* <Route exact path ="/" component ={UserForm}/> */}
                 {/* <Route exact path ="/comments" component={Comments}/> */}

           </div>
         </div>
       </div>

    </div>
    </Router>


  );


export default App;
