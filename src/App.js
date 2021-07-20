import './App.css';
import {Route, Switch} from "react-router-dom";
import DashboardPage from "./pages/dashboard/dashboard-page";
import CouponsPage from "./pages/coupons/coupons-page";
import UsedCouponsPage from "./pages/used-coupons/used-coupons-page";
import VerifyAccountPage from "./pages/authentication/verify-account-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import ChangePasswordPage from "./pages/authentication/change-password-page";
import LoginPage from "./pages/authentication/login-page";

function App() {
    return (
        <Switch>
            <Route exact={true} path="/" component={DashboardPage}/>
            <Route exact={true} path="/coupons" component={CouponsPage}/>
            <Route exact={true} path="/used-coupons" component={UsedCouponsPage}/>
            <Route exact={true} path="/auth/login" component={LoginPage}/>
            <Route exact={true} path="/auth/change-password" component={ChangePasswordPage}/>
            <Route exact={true} path="/auth/forgot-password" component={ForgotPasswordPage}/>
            <Route exact={true} path="/auth/verify-account" component={VerifyAccountPage}/>
        </Switch>
    );
}

export default App;
