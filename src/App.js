import './App.css';
import {Route, Switch} from "react-router-dom";
import DashboardPage from "./pages/dashboard/dashboard-page";
import CouponsPage from "./pages/coupons/coupons-page";
import UsedCouponsPage from "./pages/used-coupons/used-coupons-page";

function App() {
  return (
    <Switch>
      <Route exact={true} path="/" component={DashboardPage}/>
      <Route exact={true} path="/coupons" component={CouponsPage}/>
        <Route exact={true} path="/used-coupons" component={UsedCouponsPage}/>
    </Switch>
  );
}

export default App;
