import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import Trainingcalendar from "./components/Trainingcalendar";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            PersonalTrainer
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <div>
          <ButtonGroup variant="text" color="secondary" aria-label="outlined secondary button group"
            style={{ padding: '20px' }}>
            <Button component={Link} to="/">Customers</Button>
            <Button component={Link} to="/components/Traininglist">Trainings</Button>
            <Button component={Link} to="/components/Trainingcalendar">Calendar</Button>
          </ButtonGroup>
          <Switch>
            <Route exact path="/" component={Customerlist} />
            <Route path="/components/Traininglist" component={Traininglist} />
            <Route path="/components/Trainingcalendar" component={Trainingcalendar} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
