import React from 'react';

import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats'
import ChatScreen from './ChatScreen';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Building Tinder Clone 🚀 </h1> 
      <Router>
      
        <Switch>

          <Route path="/chat/:person">
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          
          <Route path="/chat">  
            <Header backButton='/' />
            {/* Header */}
            <Chats /> 
          </Route>
          <Route path="/">
            <Header />
            {/* Header */}  
            <TinderCards />
            <SwipeButtons />
          </Route>

        </Switch>
        

        {/* Buttons below Tinder Cards */}

        {/* Chat screen */}
        {/* Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
