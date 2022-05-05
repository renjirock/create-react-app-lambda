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
        const inputState = this.state.inputState;
        const inputLevel = this.state.inputLevel;
        const state = localStorage.getItem(inputState) !== NaN ? parseInt(localStorage.getItem("csu")) : 0;
        const level = localStorage.getItem(inputLevel) !== NaN ? parseInt(localStorage.getItem("jardin")) : 0;
        localStorage.setItem(inputState, state + 1);
        localStorage.setItem(inputLevel, level + 1);
        console.log(inputState);
        console.log(localStorage.getItem(inputState));
        console.log(inputLevel);
        console.log(localStorage.getItem(inputLevel));
        event.preventDefault();
    }
  render() {
    document.body.style.backgroundColor = "#212529"; 
    const studentId = localStorage.getItem("studentId")
    return (
        <Fragment>
            <section class="page-section bg-dark text-white">
                <div class="container px-4 px-lg-5 text-center">
                    <h2 class="mb-4">Contesta la siguente encuesta</h2>
                    <form class="row g-3" onSubmit={this.handleSubmit}>
                        <div class="col-md-6">
                            <label for="staticEmail" class="form-label">Id del studiante</label>
                            <input type="text" readonly class="form-control-plaintext text-white text-center" name="staticEmail" id="staticEmail" value={studentId}/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputState" class="form-label">¿En qué sede asiste la mayoría del tiempo?</label>
                            <select id="inputState" name="inputState" value={this.state.value} onChange={this.handleChange} class="form-select">
                                <option selected>selecciona una...</option>
                                <option value={'csu'}>csu</option>
                                <option value={'jardin'}>jardin</option>
                                <option value={'salud'}>salud</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">¿En qué comuna vive?</label>
                            <input type="text" class="form-control" value={this.state.value} onChange={this.handleChange} id="inputAddress" name="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div class="col-12">
                            <label for="inputLevel" class="form-label"> ¿A qué nivel pasa en inglés?</label>
                            <select id="inputLevel" name="inputLevel" value={this.state.value} onChange={this.handleChange} class="form-select">
                                <option selected>selecciona una...</option>
                                <option value={'A1'}>A1</option>
                                <option value={'A21'}>A21</option>
                                <option value={'A22'}>A22</option>
                                <option value={'B11'}>B11</option>
                                <option value={'B12'}>B12</option>
                                <option value={'B21'}>B21</option>
                                <option value={'B22'}>B22</option>
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
