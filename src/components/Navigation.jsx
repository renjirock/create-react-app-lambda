import React, { Fragment } from "react";

class Navigation extends React.Component {
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
        const login = localStorage.getItem("login");
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div className="container px-4 px-lg-5">
                        <a className="navbar-brand" href="#page-top">UNAB LENGUAJES</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0">
                                {login === 'true' ? 
                                    <li className="nav-item"><button  className="btn btn-primary" onClick={this.handleSubmit}>Salir</button ></li>
                                 : ''}
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>
        );
    }
}

export default Navigation;
