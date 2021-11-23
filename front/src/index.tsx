import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import {LoginReturn42} from './pages/login/loginReturn';
import Report from './pages/report/report';
import PageMover from './utils/PageMover';
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';

function Router() {
  const navigate = useNavigate();
  PageMover.init(navigate);
  return (
    <Routes>
      <Route
        path={`${process.env.REACT_APP_HOME_PATH}*`}
        element={<Home></Home>}
      />
      <Route
        path={process.env.REACT_APP_LOGIN_PATH}
        element={<Login></Login>}
      />
      <Route
        path={process.env.REACT_APP_REPORT_PATH}
        element={<Report></Report>}
      />
      <Route
        path={process.env.REACT_APP_42_LOGINRETURN_PATH}
        element={<LoginReturn42></LoginReturn42>}
      ></Route>
    </Routes>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
