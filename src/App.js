import './App.css';
import {Route, Switch} from "react-router-dom";
import DashboardPage from "./pages/dashboard/dashboard-page";
import CouponsPage from "./pages/coupons/coupons-page";

function App() {
  return (
    <Switch>
      <Route exact={true} path="/" component={DashboardPage}/>
      <Route exact={true} path="/coupons" component={CouponsPage}/>
    </Switch>
  );
}

export default App;
