import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 12;
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            {/* <Routes>
            <Route exact path="/"> <Route element={<News pageSize={this.pageSize} country='in' category='general'/>}/>  </Route>
            <Route exact path="/Business"> <Route element={<News pageSize={this.pageSize} country='in' category='Business'/>}/>  </Route>
            <Route exact path="/Entertainment"> <Route element={<News pageSize={this.pageSize} country='in' category='Entertainment'/>}/>  </Route>
            <Route exact path="/General"> <Route element={<News pageSize={this.pageSize} country='in' category='General'/>}/>  </Route>
            <Route exact path="/Health"> <Route element={<News pageSize={this.pageSize} country='in' category='Health'/>}/>  </Route>
            <Route exact path="/Science"> <Route element={<News pageSize={this.pageSize} country='in' category='Science'/>}/>  </Route>
            <Route exact path="/Sports"> <Route element={<News pageSize={this.pageSize} country='in' category='Sports'/>}/>  </Route>
            <Route exact path="/Technology"> <Route element={<News pageSize={this.pageSize} country='in' category='Technology'/>}/>  </Route>
            </Routes> */}
            <Route exact path="/"> <News key="General" pageSize={this.pageSize} country='in' category='General'/></Route>
            <Route exact path="/Business"> <News key="Business" pageSize={this.pageSize} country='in' category='Business'/></Route>
            <Route exact path="/Entertainment"> <News key="Entertainment" pageSize={this.pageSize} country='in' category='Entertainment'/> </Route> 
            {/* <Route exact path="/General"> <News key="General" pageSize={this.pageSize} country='in' category='General'/></Route> */}
            <Route exact path="/Health"> <News key="Health" pageSize={this.pageSize} country='in' category='Health'/></Route>
            <Route exact path="/Science"> <News key="Science" pageSize={this.pageSize} country='in' category='Science'/></Route>
            <Route exact path="/Sports"> <News key="Sports" pageSize={this.pageSize} country='in' category='Sports'/>  </Route>
            <Route exact path="/Technology"> <News key="Technology" pageSize={this.pageSize} country='in' category='Technology'/></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
