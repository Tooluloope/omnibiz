import React, { useEffect } from 'react';
import './App.css';
import employees from './data';
import { Users } from './page/users.page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { User } from './page/user.page';
import { Reports } from './page/reports.page';

function App() {
  const empWithImage = employees
  
  useEffect(() => {
 
    
    
    fetch('https://randomuser.me/api/?results=10').then(res => res.json()).then(data =>
    data.results).then(result =>
      result.map((res,index) => {
        empWithImage[index].picture = res.picture

        if (localStorage.getItem("attendance") === null) {
          localStorage.setItem('attendance', JSON.stringify([0,1,2,3,4,5,6,7,8,9].fill(null)))
        }
        localStorage.setItem('employees', JSON.stringify(empWithImage))
        
        return empWithImage
      }
      ))
  }, [empWithImage])

  return (
    <Router >
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route exact path='/'>
                <Users />
              </Route>
              <Route exact path='/user/:name'>
                <User />
              </Route>
              <Route exact path='/reports'>
                <Reports />
              </Route>
            </Switch>
          </header>
        </div>
    </Router>
  );
}

export default App;
