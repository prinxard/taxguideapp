import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import MakePayment from './pages/MakePayment';
import MonthlyRemittance from './pages/MonthlyRemittance';
import Introduction from './pages/Introduction';
import UploadMonthly from './pages/UploadMonthly';
import ATOModule from './pages/ATOModule';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>

      <Router>
      <ScrollToTop />
        <Sidebar />
        <Switch>
          <div className="page-div">
            <main className="page-body container">
              <Route path='/' exact component={Introduction} />
              <Route path='/onboarding' exact component={Onboarding} />
              <Route path='/makepayment' exact component={MakePayment} />
              <Route path='/monthlyremittance' exact component={MonthlyRemittance} />
              <Route path='/uploadmonthly' exact component={UploadMonthly} />
              <Route path='/atomodule' exact component={ATOModule} />
            </main>

          </div>

        </Switch>
      </Router>

    </>
  );
}

export default App;