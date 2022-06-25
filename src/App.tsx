import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import TodoList from './components/Todo/List'

import './App.css';

function App() {
  return (
    <CssBaseline>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todos
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <div className="app">
        <Paper>
          <TodoList />
        </Paper>
      </div>

    </CssBaseline>
  );
}

export default App;
