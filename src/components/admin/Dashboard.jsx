import React, { Fragment } from "react";

class Dashboard extends React.Component {
    render() {
        const A1      = localStorage.getItem('A1') == null ? 0 : parseInt(localStorage.getItem('A1')) ;
        const A21     = localStorage.getItem('A21') == null ? 0 : parseInt(localStorage.getItem('A21')) ;
        const A22     = localStorage.getItem('A22') == null ? 0 : parseInt(localStorage.getItem('A22')) ;
        const B11     = localStorage.getItem('B11') == null ? 0 : parseInt(localStorage.getItem('B11')) ;
        const B12     = localStorage.getItem('B12') == null ? 0 : parseInt(localStorage.getItem('B12')) ;
        const B21     = localStorage.getItem('B21') == null ? 0 : parseInt(localStorage.getItem('B21')) ;
        const B22     = localStorage.getItem('B22') == null ? 0 : parseInt(localStorage.getItem('B22')) ;
        const csu     = localStorage.getItem('csu') == null ? 0 : parseInt(localStorage.getItem('csu')) ;
        const jardin  = localStorage.getItem('jardin') == null ? 0 : parseInt(localStorage.getItem('jardin')) ;
        const salud   = localStorage.getItem('salud') == null ? 0 : parseInt(localStorage.getItem('salud')) ;
        const students  = csu + jardin + salud;
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="card shadow mb-4">
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Estudiantes Registrados</h6>
                                    <div className="dropdown no-arrow">
                                        <button className="dropdown-toggle" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <button className="dropdown-item" >Action</button>
                                            <button className="dropdown-item" >Another action</button>
                                            <div className="dropdown-divider"></div>
                                            <button className="dropdown-item" >Something else here</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart-area">
                                        <canvas id="myAreaChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Estudiantes por sede</h6>
                                    <div className="dropdown no-arrow">
                                        <button className="dropdown-toggle"  id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <button className="dropdown-item" >Action</button>
                                            <button className="dropdown-item" >Another action</button>
                                            <div className="dropdown-divider"></div>
                                            <button className="dropdown-item" >Something else here</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart-pie pt-4 pb-2">
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{width: (jardin*100/students)+'%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="progress-bar bg-success" role="progressbar" style={{width: (csu*100/students)+"%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="progress-bar bg-info" role="progressbar" style={{width: (salud*100/students)+"%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-center small">
                                        <span className="mr-2">
                                            <i className="fas fa-circle text-primary"></i> Jardin
                                        </span>
                                        <span className="mr-2">
                                            <i className="fas fa-circle text-success"></i> CSU
                                        </span>
                                        <span className="mr-2">
                                            <i className="fas fa-circle text-info"></i> Salud
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Niveles</h6>
                                </div>
                                <div className="card-body">
                                    <h4 className="small font-weight-bold">A1 <span
                                            className="float-right">{(A1*100/students)}%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: (A1*100/students)+"%"}}
                                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">A21 <span
                                            className="float-right">{(A21*100/students)}%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: (A21*100/students)+"%"}}
                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">A22 <span
                                            className="float-right">{(A22*100/students)}%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar" role="progressbar" style={{width: (A22*100/students)+"%"}}
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">B11 <span
                                            className="float-right">{(B11*100/students)}%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: (B11*100/students)+"%"}}
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">B12 <span
                                            className="float-right">{B12*100/students}%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: (B12*100/students)+"%"}}
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">B21 <span
                                            className="float-right">{B21*100/students}%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: (B21*100/students)+"%"}}
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 className="small font-weight-bold">B22 <span
                                            className="float-right">{B22*100/students}%</span></h4>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: (B22*100/students)+"%"}}
                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Informacion</h6>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}}
                                            src="img/undraw_posting_photo.svg" alt="..."/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}
export default Dashboard;