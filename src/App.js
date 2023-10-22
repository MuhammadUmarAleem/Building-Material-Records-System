import './App.css';
import {Switch,Route} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Roles from './Components/Roles';
import CreateCompany from './Components/CreateCompany';
import DealersHome from './Components/DealersHome';
import DealersProfile from './Components/DealersProfile';
import CustomerHome from './Components/CustomerHome';
import CompanyHome from './Components/CompanyHome';
import CompanyProfile from './Components/CompanyProfle';
import CompanyAddProduct from './Components/CompanyAddProducts'
import Check from './Components/AddProductCompany';
import CompanyViewProducts from './Components/CompanyViewProducts';
import SpecificProduct from './Components/CompanySpecificProduct';
import CompanyThreshold from './Components/CompanyThresholdProduct';
import check from './Components/check';
import DealerSpecificProduct from './Components/DealerSpecificProducts';
import DealerCart from './Components/DealerCart';
import DealerOrders from './Components/DealerOrders';
import Header from './Components/abc';
import DealerStock from './Components/DealerStock';
import DealerStockSpecificProduct from './Components/DealerStockSpecificProduct';
import DealerThreshold from './Components/DealerThreshold';
import CustomerSpecificProduct from './Components/CustomerSpecificProduct';
import CustomerCart from './Components/CustomerCart';
import CustomerOrders from './Components/CustomerOrders';
import CustomerReports from './Components/CustomerReports';
import DealerReports from './Components/DealerReports';
import CompanyReports from './Components/CompanyReports';
// import Payment from './Components/Payment';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component={Login}/>
        <Route exact path = '/CustomerSignup' component={Signup}/>
        <Route exact path = '/Roles' component={Roles}/>
        <Route exact path = '/CreateCompany' component={CreateCompany}/>
        <Route exact path = '/DealersHome' component={DealersHome}/>
        <Route exact path = '/DealersProfile' component={DealersProfile}/>
        <Route exact path = '/CustomersHome' component={CustomerHome}/>
        <Route exact path = '/CompanysHome' component={CompanyViewProducts}/>
        <Route exact path = '/CompanysProfile' component={CompanyProfile}/>
        <Route exact path = '/CompanyAddProduct' component={Check}/>
        <Route exact path = '/CompanySpecificProduct' component={SpecificProduct}/>
        <Route exact path = '/CompanyThresholdProducts' component={CompanyThreshold}/>
        <Route exact path = '/DealerSpecificProduct' component={DealerSpecificProduct}/>
        <Route exact path = '/DealerCart' component={DealerCart}/>
        <Route exact path = '/DealerOrders' component={DealerOrders}/>
        <Route exact path = '/DealerStock' component={DealerStock}/>
        <Route exact path = '/DealerStockSpecificProduct' component={DealerStockSpecificProduct}/>
        <Route exact path = '/DealerThreshold' component={DealerThreshold}/>
        <Route exact path = '/CustomerSpecificProduct' component={CustomerSpecificProduct}/>
        <Route exact path = '/CustomerCart' component={CustomerCart}/>
        <Route exact path = '/CustomerOrders' component={CustomerOrders}/>
        <Route exact path = '/CustomerReports' component={CustomerReports}/>
        <Route exact path = '/DealerReports' component={DealerReports}/>
        <Route exact path = '/CompanyReports' component={CompanyReports}/>
      </Switch>
    </div>
  );
}

export default App;
