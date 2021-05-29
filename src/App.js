import './App.css';
import Navbar from './components/Navbar/Navbar'
import StockUpdate from './components/StockUpdate'
import Analytics from './components/Analytics'
import RequestList from './components/RequestList'
import RegisterForm from './components/RegisterForm/RegisterForm'
import LoginForm from './components/LoginForm/LoginForm'


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, { useState } from 'react';


const DashBoard = ({requests, currUser}) => {
  return (
    <>
      <Navbar />
          <Switch>
            <Route path='/dashboard' exact render={() => (<RequestList requests={requests} currUser={currUser}/>) } />
            <Route path='/dashboard/stockupdate' render={()=>(<StockUpdate currUser={currUser}/>)} />
            <Route path='/dashboard/analytics' component={Analytics} />
          </Switch>
    </>
  )
}

const App = () => {
  const[user, setUser] = useState(-1)

  const requests = [
    {userName: 'Abhinav Sharma', medName: 'Paracetamol', medQnty: 5, orderDate: '20-05-2021', orderTime: '10:00 Hrs'},
    {userName: 'Gaganpreet Singh', medName: 'Paracetamol', medQnty: 5, orderDate: '20-05-2021', orderTime: '10:00 Hrs'},
    {userName: 'Gaganpreet Singh', medName: 'Paracetamol', medQnty: 5, orderDate: '20-05-2021', orderTime: '10:00 Hrs'},
    {userName: 'Gaganpreet Singh', medName: 'Paracetamol', medQnty: 5, orderDate: '20-05-2021', orderTime: '10:00 Hrs'}
  ]
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact render={()=>(<LoginForm setUser={setUser} currUser={user} />)} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/dashboard' render={()=>(<DashBoard requests={requests} currUser={user}/>)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
