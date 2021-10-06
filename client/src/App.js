import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AddEditCategory from "./pages/AddEditCategory/AddEditCategory";
import AddEditProduct from "./pages/AddEditProduct/AddEditProduct";
import AddEditUser from "./pages/AddEditUser/AddEditUser";
import AddOrder from "./pages/AddOrder/AddOrder";
import EditOrder from "./pages/EditOrder/EditOrder";
import ListOrder from "./pages/OrderList/OrderList";
import ListCategory from "./pages/CategoryList/CategoryList";
import ListProduct from "./pages/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Title from "./components/Title/Title";
import Search from "./components/Search/Search";
import PageProduct from "./components/Product_Page/ProductPage";
import Login from "./pages/login/Login";
import errors from "./pages/errors/errors";
import ContactUs from "./pages/Contactus/ContactUs";
import Basket from "./components/Basket/Basket";
import Profile from "./components/profile/Profile";
import PrivateRoute from "./privetRouter/PrivateRoute";
import EditProfile from "./pages/EditProfile/EditProfile";
import EditUsernamePassword from "./pages/EditUsernamePassword/EditUsernamePassword";
import PdfGenerator from "./components/Pdf/PdfGenerator";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />

      <Switch>
        {/* public route  */}
        <Route exact path="/" component={Home} />
        <Route path="/products" component={ListProduct} />
        <Route path="/categorys" component={ListCategory} />
        <Route path="/product" component={PageProduct} />
        <Route path={"/contact"} component={ContactUs} />
        <Route path={"/login"} component={Login} />
        <Route path={"/addUser"} component={AddEditUser} />
        <Route path={"/search"} component={Search} />

        {/* user route  */}
        <PrivateRoute path={"/profile"} component={Profile} />
        <PrivateRoute path={"/addOrder"} component={AddOrder} />
        <PrivateRoute path={"/basketProduct"} component={Basket} />
        <PrivateRoute path={"/editProfile"} component={EditProfile} />
        <PrivateRoute path={"/editPassword"} component={EditUsernamePassword} />
        <PrivateRoute path={"/pdf"} component={PdfGenerator} />

        {/* agen route  */}
        <PrivateRoute path="/Orders" component={ListOrder} />
        <PrivateRoute path={"/editOrder"} component={EditOrder} />

        {/* admin route */}
        <PrivateRoute
          path={["/addCategory", "/editCategory"]}
          component={AddEditCategory}
        />
        <PrivateRoute
          path={["/addProduct", "/editProduct"]}
          component={AddEditProduct}
        />

        <Route path="/*" component={errors} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
