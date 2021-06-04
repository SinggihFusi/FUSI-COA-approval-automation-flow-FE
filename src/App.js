import './App.css';
import Login from './component/login/login'
import Submission from './component/submission/submission'
import Approval from './component/approval/approval'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import './style/main.css'
import { Fragment } from 'react';
import axios from 'axios'
import { baseUrl } from './environment/environment';

axios.defaults.baseURL = baseUrl;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {
          (localStorage.getItem("data") == null)
          ?
            <Fragment>
              <Redirect to="/login"/>
              <Route path="/login">
                <Login/>
              </Route>
            </Fragment>
          :
            <Fragment>
              <Redirect to="/submission"/>
              <Route exact path="/">
                  <Redirect to="/submission"/>
              </Route>
              <Route path="/submission">
                  <Submission/>
              </Route>
              <Route path="/approval">
                  <Approval/>
              </Route>
            </Fragment>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
