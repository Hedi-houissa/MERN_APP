import './App.css';
import {Switch,Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import AddEditCategory from './pages/AddEditCategory/AddEditCategory'
import AddEditProduct from './pages/AddEditProduct/AddEditProduct'
import AddEditUser from './pages/AddEditUser/AddEditUser'
import AddOrder from './pages/AddOrder/AddOrder'
import EditOrder from './pages/EditOrder/EditOrder'
import ListOrder from './pages/OrderList/OrderList'
import ListCategory from'./pages/CategoryList/CategoryList'
import ListProduct from'./pages/ProductList/ProductList'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Title from './components/Title/Title';
import PageProduct from './components/Product_Page/ProductPage'
import Login from './pages/login/Login';
import errors from './pages/errors/errors';



function App() {
  return (
    <div className="App">
     <Title/> 
    <NavBar />

     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/Orders" component={ListOrder} />
       <Route exact path="/products" component={ListProduct} />
       <Route exact path="/categorys" component={ListCategory} />
       <Route path="/product" component={PageProduct} />
       <Route path={["/addCategory","/editCategory"]} component={AddEditCategory} />
       <Route path={["/addProduct","editProduct/:id"]} component={AddEditProduct} />
       <Route path={["/addUser","editUser/:id"]} component={AddEditUser} />
       <Route path={"/addOrder"} component={AddOrder} />
       <Route path={"/editOrder"} component={EditOrder} />
       <Route path={"/login"} component={Login}/>
       
       <Route  path="/*" component={errors} />
     </Switch>

<Footer/>
    </div>
  );
}

export default App;
