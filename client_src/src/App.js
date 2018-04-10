import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {Link} from 'react-router-dom'
import './App.css';
import Main from './Components/Main'
import Navbar from './Components/Navbar'

const App = () => (
  <MuiThemeProvider>
    <Navbar/>
    <Main/>
    <div className="fab">
      <Link to="/meetups/add">
        <FloatingActionButton secondary={true}>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
    </div>
  </MuiThemeProvider>
)

export default App;
