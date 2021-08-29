import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import MakePayment from './pages/MakePayment';
import UploadYearly from './pages/UploadYearly';
import Introduction from './pages/Introduction';
import UploadMonthly from './pages/UploadMonthly';
import UploadWithholding from './pages/UploadWithholding';
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
              <Route path='/makepayment' exact component={MakePayment} />
              <Route path='/uploadyearly' exact component={UploadYearly} />
              <Route path='/onboarding' exact component={Onboarding} />
              <Route path='/uploadmonthly' exact component={UploadMonthly} />
              <Route path='/uploadwithholding' exact component={UploadWithholding} />
            </main>

          </div>

        </Switch>
      </Router>

    </>
  );
}

export default App;