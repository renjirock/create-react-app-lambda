import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Topbar from "./Topbar";

class Index extends React.Component {
    render() {
        return (
            <Fragment>
                <div id="wrapper">
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                        <Sidebar></Sidebar>
                    </ul>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar></Topbar>
                            <Dashboard></Dashboard>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Index;