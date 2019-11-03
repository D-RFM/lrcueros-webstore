import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';


import Header from './components/Header';
import Aside from "./components/Aside";
import Footer from "./components/Footer";

import CategoriasList from "./components/almacen/CategoriasList";
import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";




function App() {
  return (
    <Router>
      
      <Header/>
      <Aside/>
      
      <Route path="/" exact component={NotesList} />
      <Route path="/almacen/categoria" exact component={CategoriasList} />
      
      <Route path="/edit/:id" component={CreateNote} />
      <Route path="/create" component={CreateNote} />
      <Route path="/user" component={CreateUser} />
      
      <Footer/>
      
    </Router>

  );
}

export default App;
