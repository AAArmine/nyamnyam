import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import Content from './components/Profile/Profile.jsx';
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="grid">
       
        <Header />
        <Nav fre = {props.state.navPage}/>
        <div className="content_wrapper">
          <Route path='/profile' render = { () => 
          <Content state = {props.state.profilePage} 
          addPost = {props.addPost} /> }  />
          <Route path='/dialogs' render = { () => <Dialogs dia= {props.state.dialogsPage} /> } />
        </div>
      </div> 
      
    </BrowserRouter>
  );
}
export default App;
