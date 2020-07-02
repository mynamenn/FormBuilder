import './App.css';
import React, { Component } from 'react';
import Menu from './components/Menu.jsx';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';


function App() {
  return (
    <div className="App">
      <h1> HEllO </h1>
      <DndProvider backend={HTML5Backend}>
        <Menu />
      </DndProvider>
    </div>
  );
}

export default App;
