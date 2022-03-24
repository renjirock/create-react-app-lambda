import React, { Fragment } from "react";

class Form extends React.Component {
  render() {
    document.body.style.backgroundColor = "#212529"; 
    const studentId = localStorage.getItem("studentId")
    return (
        <Fragment>
            <section class="page-section bg-dark text-white">
                <div class="container px-4 px-lg-5 text-center">
                    <h2 class="mb-4">Contesta la siguente encuesta</h2>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Id del studiante</label>
                            <input type="text" readonly class="form-control-plaintext text-white text-center" id="staticEmail" value={studentId}/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputState" class="form-label">¿En qué sede asiste la mayoría del tiempo?</label>
                            <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">¿En qué comuna vive?</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label"> ¿A qué nivel pasa en inglés?</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
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
