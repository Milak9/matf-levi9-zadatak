import { Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from "../NavBar/NavBar";
import CreateNewProduct from "../CreateNewProduct/CreateNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import Admin from "../Admin/Admin";

const App = () => {
    return (
        <div>
            <NavBar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/admin/unos-novog-proizvoda" component={CreateNewProduct} />
                <Route path="/admin/proizvodi" component={ProductsTable} />
            </Switch>
        </div>
        );
}

function Home() {
return <h2>Home</h2>;
}

export default App