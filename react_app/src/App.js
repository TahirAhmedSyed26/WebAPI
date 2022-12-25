import React from 'react';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import './App.css';
import DLookup from './components/DLookup';
import { Container } from '@mui/system';
import { Grid, Paper } from '@mui/material';
function App() {
  return (
    <Paper>
      <Provider store={store}>
        <Container maxWidth="lg">
           <DLookup /> 
          
        </Container>
      </Provider>
    </Paper>
  );
}

export default App;
