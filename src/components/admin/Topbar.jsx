import React, { Fragment } from "react";

class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleSubmit(event) {
        window.localStorage.removeItem('login');
        window.location.href = '/';
        event.preventDefault();
    }
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>
                <form
                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Buscar..."
                            aria-label="Search" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <button className="nav-link dropdown-toggle"  id="searchDropdown" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <div className="topbar-divider d-none d-sm-block"></div>
                    <li className="nav-item dropdown no-arrow">
                        <button className="nav-link dropdown-toggle"  id="userDropdown" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                            <img className="img-profile rounded-circle"
                                src="src/img/undraw_profile.svg" alt="students"/>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">
                            <button className="dropdown-item" >
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Perfil
                            </button>
                            <button className="dropdown-item" >
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Configuracion
                            </button>
                            <div className="dropdown-divider"></div>
                            <button  className="dropdown-item" onClick={this.handleSubmit}>
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </button>
                        </div>
                    </li>
                </ul>
            </nav>
            </Fragment>
        );
    }
}

export default Topbar;