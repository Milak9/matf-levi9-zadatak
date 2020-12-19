import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="admin">Admin</Link>
          </li>
        </ul>
      </nav>

    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/admin"><Admin/></Route>
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