import React, { Fragment } from "react";
import Sidebar from "./Sidebar";

class Index extends React.Component {
    render() {
        return (
            <Fragment>
                <div id="wrapper">
                    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                        <Sidebar></Sidebar>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Index;