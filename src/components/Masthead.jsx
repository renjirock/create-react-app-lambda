import React, { Fragment } from "react";

class Masthead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentId: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }
    handleSubmit(event) {
        if (
            this.state.password === "123456"
        ) {
            localStorage.setItem("login", true);
            localStorage.setItem("studentId", this.state.studentId);
            window.location.href = "";
        }
        event.preventDefault();
    }
    render() {
        return (
            <Fragment>
                <header class="masthead">
                    <div class="container px-4 px-lg-5 h-100">
                        <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                            <div class="col-lg-8 align-self-end">
                                <h1 class="text-white font-weight-bold">Login</h1>
                                <hr class="divider" />
                            </div>
                            <div class="col-lg-8 align-self-baseline">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="studentId" className="form-label text-white">
                                            ID del estudiante
                                        </label>
                                        <input type="text" className="form-control"  id="studentId" name="studentId" aria-describedby="emailHelp" value={this.state.value}  onChange={this.handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label text-white">
                                            Contraseña
                                        </label>
                                        <input type="password" className="form-control" id="password" name="password" value={this.state.value} onChange={this.handleChange}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-xl">
                                        Ingresar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </header>
            </Fragment>
        );
    }
}

export default Masthead;
