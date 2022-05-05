import React, {Fragment} from 'react';

function Dashboard() {
    return(
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
                                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-header">Dropdown Header:</div>
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
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
                                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-header">Dropdown Header:</div>
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart-pie pt-4 pb-2">
                                <canvas id="myPieChart"></canvas>
                            </div>
                            <div className="mt-4 text-center small">
                                <span className="mr-2">
                                    <i className="fas fa-circle text-primary"></i> Jardin
                                </span>
                                <span className="mr-2">
                                    <i className="fas fa-circle text-success"></i> SCU
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
                                    className="float-right">20%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "20%"}}
                                    aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">A21 <span
                                    className="float-right">40%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "40%"}}
                                    aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">A22 <span
                                    className="float-right">60%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar" role="progressbar" style={{width: "60%"}}
                                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">B11 <span
                                    className="float-right">80%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-info" role="progressbar" style={{width: "80%"}}
                                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">B12 <span
                                    className="float-right">80%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-info" role="progressbar" style={{width: "80%"}}
                                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">B21 <span
                                    className="float-right">80%</span></h4>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-info" role="progressbar" style={{width: "80%"}}
                                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h4 className="small font-weight-bold">B22 <span
                                    className="float-right">Complete!</span></h4>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: "100%"}}
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
                            <p>Add some quality, svg illustrations to your project courtesy of <a
                                    target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                constantly updated collection of beautiful svg images that you can use
                                completely free and without attribution!</p>
                            <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                unDraw &rarr;</a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        </Fragment>
    );
}
export default Dashboard;