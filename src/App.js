import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import Introduction from "./components/Introduction";
import MakePayment from "./components/MakePayment";
import Onboarding from "./components/Onboarding";
import UploadComponent from "./components/UploadComponent";
import UploadMonthly from "./components/UploadMonthly";
import UploadWithholding from "./components/UploadWithholding";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Introduction} />
            <Route exact path="/onboarding" component={Onboarding} />
            <Route
              exact
              path="/upload_view_annual"
              component={UploadComponent}
            />
            <Route exact path="/upload_view_monthly" component={UploadMonthly} />
            <Route exact path="/upload_view_withholding" component={UploadWithholding} />
            <Route exact path="/make_payment" component={MakePayment} />
          </Switch>
        </Router>
        {/* <Introduction /> */}
        {/* <Onboarding /> */}
        {/* <UploadMonthly /> */}
        {/* <UploadWithholding /> */}
      </div>
    </div>
  );
}

export default App;
