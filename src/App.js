import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from '../src/components/home';
import Login from '../src/components/Login';
import Welcome from '../src/components/welcome';
import ShareYourExperience from '../src/components/ShareYourExperience';
import BookANewTrip from '../src/components/BookANewTrip';
import Gallery from '../src/components/Gallery';
import PastTrips from '../src/components/PastTrips';
import Booking from '../src/components/BookingPage';
import LoginForm from './components/LoginForm';
function App() {
  console.log('app also updated')
  return (
    <Router>
      <div className="App">  
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/login' component={Login}/>
          <Route path='/home' component={Home}/>
          <Route path='/welcome' children={<Welcome/>}/>
          <Route path='/shareyourexp' children={<ShareYourExperience/>}/>
          <Route exact path='/bookanewtrip' children={<BookANewTrip/>}/>
          <Route path='/gallery' children={<Gallery/>}/>
          <Route path='/pasttrips/:id' component={PastTrips}/>
          <Route exact path='/bookanewtrip/:location' component={Booking}/>
          <Route exact path='/loginform' component={LoginForm}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
