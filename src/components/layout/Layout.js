import React from "react";
import AppRouting from "../AppRouting";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Layout.css";
function Layout() {
    const userLogin = useSelector((state) => state.user.userLogin);

    return (
        <React.Fragment>
            <div className="header-client">
                <div className="logo-homepage">
                    <Link to="/">Home</Link>
                </div>
                <ul className="nav nav-tabs">
                  
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/customerManager">CustomerManager</Link></li>
                            <li><Link className="dropdown-item" to="/customer">Customer</Link></li>
                            <li>   <Link className="dropdown-item" to="/setting">Setting</Link></li>

                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Menu</a>
                        <ul className="dropdown-menu">
                            
                            <li><Link className="btn btn-primary mx-2 my-2" to="/prisedent">Prisedent</Link></li>
                            <li><Link className="btn btn-primary mx-2  my-2" to="/state">State</Link></li>
                            <li>   <Link className="btn btn-primary mx-2 my-2" to="/state_detail">StateDetail</Link></li>

                        </ul>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="btn btn-primary mx-2 my-2" to="/setting">setting</Link>
                    </li>

                </ul>
                <div className="login-homepage">
                    <Link to="login">Login</Link>
                </div>
            </div>
            


            <AppRouting />
        </React.Fragment>
    );
}

export default Layout;
