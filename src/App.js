import './App.css';
import Navbar from './components/Navbar/Navbar'
import StockUpdate from './components/StockUpdate'
import Analytics from './components/Analytics'
import RequestList from './components/RequestList'


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  const requests = [
    {userName: 'Abhinav Sharma', medName: 'Paracetamol', medQnty: 5, orderDate: '20-05-2021', orderTime: '10:00 Hrs'},
    {userName: 'Gaganpreet Singh', medName: 'Paracetamol', medQnty: 5, orderDate: '20-05-2021', orderTime: '10:00 Hrs'},
    {userName: 'Gaganpreet Singh', medName: 'Paracetamol', medQnty: 5, orderDate: '20-05-2021', orderTime: '10:00 Hrs'},
    {userName: 'Gaganpreet Singh', medName: 'Paracetamol', medQnty: 5, orderDate: '20-05-2021', orderTime: '10:00 Hrs'}
  ]
  return (
    <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' exact render={() => (<RequestList requests={requests}/>) } />
            <Route path='/stockupdate' component={StockUpdate} />
            <Route path='/analytics' component={Analytics} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
