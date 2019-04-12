import React from 'react';
import { Link } from 'react-router-dom';

class Driver extends React.Component{
  constructor(props){
    super(props);

    this.state = {};
  }
    render(){
        return(
            <div>
              <div class="header pb-8 pt-5 pt-md-8">
                  <div class="container-fluid">
                      <div class="header-body">
                      <div class="row">
                          <div class="col-xl-4 col-lg-6">
                          <div class="card card-stats mb-4 mb-xl-0">
                              <div class="card-body">
                              <div class="row">
                                  <div class="col">
                                  <span class="h2 font-weight-bold mb-0">Today</span>
                                  <h5 class="card-title text-uppercase text-muted mb-0">Signed Up Drivers</h5>
                                  </div>
                                  <div class="col-auto">
                                  <h1>74</h1>
                                  </div>
                              </div>
                              </div>
                          </div>
                          </div>
                          <div class="col-xl-4 col-lg-6">
                          <div class="card card-stats mb-4 mb-xl-0">
                              <div class="card-body">
                              <div class="row">
                                  <div class="col">
                                  <span class="h2 font-weight-bold mb-0">This Month(April)</span>
                                  <h5 class="card-title text-uppercase text-muted mb-0">Signed Up Drivers</h5>
                                  </div>
                                  <div class="col-auto">
                                  <h1>256</h1>
                                  </div>
                              </div>
                              </div>
                          </div>
                          </div>
                          <div class="col-xl-4 col-lg-6">
                          <div class="card card-stats mb-4 mb-xl-0">
                              <div class="card-body">
                              <div class="row">
                                  <div class="col">
                                  <span class="h2 font-weight-bold mb-0">This Year(2019)</span>
                                  <h5 class="card-title text-uppercase text-muted mb-0">Signed Up Drivers</h5>
                                  </div>
                                  <div class="col-auto">
                                  <h1>2045</h1>
                                  </div>
                              </div>
                              </div>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>

              <div class="container-fluid mt--7">
                  <div class="row mt-5">
                      <div class="col">
                      <div class="card bg-default shadow">
                          <div class="card-header bg-transparent border-0">
                          <h3 class="text-white mb-0">All Drivers</h3>
                          </div>
                          <div class="table-responsive">
                          <table class="table align-items-center table-dark table-flush">
                              <thead class="thead-dark">
                              <tr>
                                <th>Driver Name</th>
                                <th>Phone</th>
                                <th>Created</th>
                                <th>City</th>
                                <th>Car No#</th>
                                <th>Rating</th>
                                <th>Completed</th>
                                <th>Action</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                  <th><Link class="text-white" to='/driver/profile'>John Doe</Link></th>
                                  <td>(252) 252 5248</td>
                                  <td>2019/04/09</td>
                                  <td>Dhaka</td>
                                  <td>DHA-255-59</td>
                                  <td>3.4</td>
                                  <td>125 Ride</td>
                                  <td>
                                    <Link className="btn btn-action" to='/driver/profile'>DETAIL</Link>
                                  </td>
                              </tr>
                              <tr>
                                  <th><Link class="text-white" to='/driver/profile'>John Doe</Link></th>
                                  <td>(252) 252 5248</td>
                                  <td>2019/04/09</td>
                                  <td>Dhaka</td>
                                  <td>DHA-255-59</td>
                                  <td>3.4</td>
                                  <td>125 Ride</td>
                                  <td>
                                    <Link className="btn btn-action" to='/driver/profile'>DETAIL</Link>
                                  </td>
                              </tr>
                              <tr>
                                  <th><Link class="text-white" to='/driver/profile'>John Doe</Link></th>
                                  <td>(252) 252 5248</td>
                                  <td>2019/04/09</td>
                                  <td>Dhaka</td>
                                  <td>DHA-255-59</td>
                                  <td>3.4</td>
                                  <td>125 Ride</td>
                                  <td>
                                    <Link className="btn btn-action" to='/driver/profile'>DETAIL</Link>
                                  </td>
                              </tr>
                              <tr>
                                  <th><Link class="text-white" to='/driver/profile'>John Doe</Link></th>
                                  <td>(252) 252 5248</td>
                                  <td>2019/04/09</td>
                                  <td>Dhaka</td>
                                  <td>DHA-255-59</td>
                                  <td>3.4</td>
                                  <td>125 Ride</td>
                                  <td>
                                    <Link className="btn btn-action" to='/driver/profile'>DETAIL</Link>
                                  </td>
                              </tr>
                              <tr>
                                  <th><Link class="text-white" to='/driver/profile'>John Doe</Link></th>
                                  <td>(252) 252 5248</td>
                                  <td>2019/04/09</td>
                                  <td>Dhaka</td>
                                  <td>DHA-255-59</td>
                                  <td>3.4</td>
                                  <td>125 Ride</td>
                                  <td>
                                    <Link className="btn btn-action" to='/driver/profile'>DETAIL</Link>
                                  </td>
                              </tr>
                              <tr>
                                  <th><Link class="text-white" to='/driver/profile'>John Doe</Link></th>
                                  <td>(252) 252 5248</td>
                                  <td>2019/04/09</td>
                                  <td>Dhaka</td>
                                  <td>DHA-255-59</td>
                                  <td>3.4</td>
                                  <td>125 Ride</td>
                                  <td>
                                    <Link className="btn btn-action" to='/driver/profile'>DETAIL</Link>
                                  </td>
                              </tr>
                              <tr>
                                  <th><Link class="text-white" to='/driver/profile'>John Doe</Link></th>
                                  <td>(252) 252 5248</td>
                                  <td>2019/04/09</td>
                                  <td>Dhaka</td>
                                  <td>DHA-255-59</td>
                                  <td>3.4</td>
                                  <td>125 Ride</td>
                                  <td>
                                    <Link className="btn btn-action" to='/driver/profile'>DETAIL</Link>
                                  </td>
                              </tr>
                              <tr>
                                  <th><Link class="text-white" to='/driver/profile'>John Doe</Link></th>
                                  <td>(252) 252 5248</td>
                                  <td>2019/04/09</td>
                                  <td>Dhaka</td>
                                  <td>DHA-255-59</td>
                                  <td>3.4</td>
                                  <td>125 Ride</td>
                                  <td>
                                    <Link className="btn btn-action" to='/driver/profile'>DETAIL</Link>
                                  </td>
                              </tr>
                              <tr>
                                  <th><Link class="text-white" to='/driver/profile'>John Doe</Link></th>
                                  <td>(252) 252 5248</td>
                                  <td>2019/04/09</td>
                                  <td>Dhaka</td>
                                  <td>DHA-255-59</td>
                                  <td>3.4</td>
                                  <td>125 Ride</td>
                                  <td>
                                    <Link className="btn btn-action" to='/driver/profile'>DETAIL</Link>
                                  </td>
                              </tr>

                              </tbody>
                          </table>
                          </div>
                      </div>
                      </div>
                  </div>
                  <footer class="footer">
                      <div class="row align-items-center justify-content-xl-between">
                      <div class="col-xl-12">
                          <div class="copyright text-center text-xl-right text-muted">
                          &copy; 2019 <a class="font-weight-bold ml-1" href="#">Comingoo</a>
                          </div>
                      </div>
                      </div>
                  </footer>
                  </div>
            </div>
        );
    }
}

export default Driver;
