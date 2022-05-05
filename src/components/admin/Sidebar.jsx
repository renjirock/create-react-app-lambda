import React, { Fragment } from "react";

class Sidebar extends React.Component {
    render() {
        const login = localStorage.getItem("login");
        return (
            <Fragment>
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>
                <hr class="sidebar-divider my-0"/>
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>
            </Fragment>
        );
    }
}

export default Sidebar;