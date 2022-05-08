import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, Box, Grid } from '@mui/material';
import AppBar from './components/Appbar';
import TemporaryDrawer from './components/LeftMenu';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <TemporaryDrawer />
    </div>
  );
}

export default App;
