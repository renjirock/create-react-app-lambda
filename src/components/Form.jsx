import React, { Fragment } from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputState: "",
            inputAddress: "",
            inputLevel: ""
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
        localStorage.setItem("inputState", this.state.inputState);
        localStorage.setItem("inputAddress", this.state.inputAddress);
        localStorage.setItem("inputLevel", this.state.inputLevel);
        console.log(this.state.inputState);
        console.log(this.state.inputAddress);
        console.log(this.state.inputLevel);
        event.preventDefault();
    }
  render() {
    document.body.style.backgroundColor = "#212529"; 
    const studentId = localStorage.getItem("studentId")
    return (
        <Fragment>
            <section class="page-section bg-dark text-white">
                <div class="container px-4 px-lg-5 text-center">
                    <h2 class="mb-4">Contesta sa la siguente encuesta</h2>
                    <form class="row g-3" onSubmit={this.handleSubmit}>
                        <div class="col-md-6">
                            <label for="staticEmail" class="form-label">Id del studiante</label>
                            <input type="text" readonly class="form-control-plaintext text-white text-center" name="staticEmail" id="staticEmail" value={studentId}/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputState" class="form-label">¿En qué sede asiste la mayoría del tiempo?</label>
                            <select id="inputState" name="inputState" class="form-select">
                                <option selected>selecciona una...</option>
                                <option>csu</option>
                                <option>jardin</option>
                                <option>salud</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">¿En qué comuna vive?</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div class="col-12">
                            <label for="inputLevel" class="form-label"> ¿A qué nivel pasa en inglés?</label>
                            <select id="inputLevel" name="inputLevel" class="form-select">
                                <option selected>selecciona una...</option>
                                <option>A1</option>
                                <option>A21</option>
                                <option>A22</option>
                                <option>B11</option>
                                <option>B12</option>
                                <option>B21</option>
                                <option>B22</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
            </section>
        </Fragment>
    );
  }
}

export default Form;
