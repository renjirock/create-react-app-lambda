import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Topbar from "./Topbar";

class Index extends React.Component {
    render() {
        return (
            <Fragment>
                <div id="wrapper">
                    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                        <Sidebar></Sidebar>
                    </ul>
                    <Topbar></Topbar>
                    <Dashboard></Dashboard>
                </div>
            </Fragment>
        );
    }
}

export default Index;