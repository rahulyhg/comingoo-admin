import React from 'react';
import Drivers from './Drivers';

class Driver extends React.Component{
    render(){
        return(
            <div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="content">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="flex">
                              <img src={process.env.PUBLIC_URL + '/assets/img/driver.png'} className="img-responsive h-100" alt="Driver"/>
                              <div className="info">
                                    <h3 className="warning"><b>Drivers</b></h3>
                                    <p>Total Driver: <b>58475</b></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="content">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="flex">

                              <div className="info">
                                    <h4 className=""><b>Today</b></h4>
                                    <p>Signed Up Drivers: <b>58475</b></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card">
                      <div className="content">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="flex">

                              <div className="info">
                                    <h4 className=""><b>This Month</b></h4>
                                    <p>Signed Up Drivers: <b>58475</b></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card">
                      <div className="content">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="flex">

                              <div className="info">
                                    <h4 className=""><b>This Year</b></h4>
                                    <p>Signed Up Drivers: <b>58475</b></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4 className="title"></h4>
                                <p className="category">
                                  
                                </p>
                            </div>
                            <div className="content table-responsive table-full-width">
                                <Drivers />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Driver;
