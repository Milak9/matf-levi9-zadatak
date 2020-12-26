import { Route, Switch } from 'react-router-dom';

import './App.css';

import NavBar from "../NavBar/NavBar";
import CreateNewProduct from "../CreateNewProduct/CreateNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import Admin from "../Admin/Admin";
import Home from "../Home/Home";
import Product from "../Product/Product"

const App = () => {
    return (
        <div>
            <NavBar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/admin/unos-novog-proizvoda" component={CreateNewProduct} />
                <Route exact path="/admin/proizvodi" component={ProductsTable} />
                <Route path="/:id" component={Product} />
            </Switch>
        </div>
        );
}

export default App