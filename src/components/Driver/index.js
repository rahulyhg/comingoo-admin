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
                  <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4 className="title"></h4>
                                <p className="category">
                                  <div className="pretty p-icon p-curve p-tada">

                                        <div className="pretty p-icon p-curve p-jelly">
                                            <input type="radio" name="radio66" />
                                            <div className="state p-warning">
                                                <i className="icon mdi mdi-check"></i>
                                                <label> Today</label>
                                            </div>
                                        </div>
                                        <div className="pretty p-icon p-curve p-jelly">
                                            <input type="radio" name="radio66" />
                                            <div className="state p-warning">
                                                <i className="icon mdi mdi-check"></i>
                                                <label> Monthly</label>
                                            </div>
                                        </div>
                                        <div className="pretty p-icon p-curve p-jelly">
                                            <input type="radio" name="radio66" />
                                            <div className="state p-warning">
                                                <i className="icon mdi mdi-check"></i>
                                                <label> Yearly</label>
                                            </div>
                                        </div>
                                  </div>
                                </p>
                            </div>
                            <div className="content table-responsive table-full-width">
                                <Drivers />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                      <h4><b>Total Driver: </b><span>85876</span></h4>
                    </div>
                </div>

            </div>
        );
    }
}

export default Driver;
