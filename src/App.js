import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReportIssue from './components/CreateNewIssue';
import AdminsIssueList from './components/AdminsIssueList';
// import ListIssue from './components/IssueList';
import IssuesList from './components/IssuesList';

import './css/App.css';

function App() {

  var location = window.location.href;
  var dashboardClass = location.includes("/dashboard") ? "nav-item active" : "nav-item";
  var issueNewReportClass = location.includes("/reportIssue") ? "nav-item active" : "nav-item";
  var dashboardClass = location.includes("/AdminIssueList") ? "nav-item active" : "nav-item";
  // var listIssueClass = location.includes("/ListIssue") ? "nav-item active" : "nav-item";
  var listIssuesClass = location.includes("/issuesList") ? "nav-item active" : "nav-item";

  return (
    <Router>
      <div className="container" style={{ 'max-width': '1500px' }}>
        <br />
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/dashboard">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEOyvXCfHCgVLPI-Kg733Cn1hEeoZRbUQcw&usqp=CAU" width="30" height="30" class="d-inline-block align-top" alt="" />
                &nbsp; Issue Reporting
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class={dashboardClass}><a class="nav-link" href="/dashboard">HOME <span class="sr-only">(current)</span></a></li>
              <li class={issueNewReportClass}><a class="nav-link" href="/reportIssue">REPORT NEW ISSUE</a></li>
              <li class={issueNewReportClass}><a class="nav-link" href="/AdminsIssueList">REPORTED ISSUES BY USERS</a></li>
              {/* <li class={listIssueClass}><a class="nav-link" href="/ListIssue">REPORTED ISSUES</a></li> */}
              <li class={listIssuesClass}><a class="nav-link" href="/issuesList"> MY REPORTED ISSUES</a></li>
            </ul>
          </div>
        </nav>
        <br />
        <Switch>
          <Route exact path='/reportIssue' component={ReportIssue} />
          <Route exact path='/AdminsIssueList' component={AdminsIssueList} />
          {/* <Route exact path='/ListIssue' component={ListIssue} /> */}
          <Route exact path='/issuesList' component={IssuesList} />
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
