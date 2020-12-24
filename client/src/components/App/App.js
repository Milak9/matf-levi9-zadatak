import logo from '../../logo.svg'

import { Route, Switch } from 'react-router-dom'



import './App.css'
import NavBar from "../NavBar/NavBar"
import CreateNewProduct from "../CreateNewProduct/CreateNewProduct"

const App = () => {
    return (
        <div>
            <NavBar />

            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/admin"><Admin/></Route>
                <Route exact path="/admin/unos-novog-proizvoda" component={CreateNewProduct} />
                <Route path="/admin/proizvodi"><NavBar/></Route>
            </Switch>
        </div>
        );
}

function Home() {
return <h2>Home</h2>;
}

function Admin() {
return <h2>Admin</h2>;
}

function Nesto() {
return <h2>Users</h2>;
}

export default App