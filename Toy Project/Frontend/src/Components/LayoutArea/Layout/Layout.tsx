import { BrowserRouter, NavLink, Redirect, Route, Switch } from "react-router-dom";
import addToy from "../../toysArea/addToy/addToy";
import toysList from "../../toysArea/toysList/toysList";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <BrowserRouter>
        <div className="Layout">
			<nav>
                <NavLink to="/toys/new">Add Toy</NavLink>
                <span> | </span>
                <NavLink to="/toys">Toys</NavLink>
            </nav>
            <hr />
            <h1>Best Toys Ever</h1>
            
        

        <Switch>
            <Route path="/toys" component={toysList} exact />
            <Route path="/toys/new" component={addToy} exact />
            <Redirect from="/" to="/toys" exact />
        </Switch>

        </div>
        </BrowserRouter>
    );
}

export default Layout;
