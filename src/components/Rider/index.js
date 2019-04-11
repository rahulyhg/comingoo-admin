import React from 'react';
import { Link } from 'react-router-dom';

class Rider extends React.Component{
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
                                    <h5 class="card-title text-uppercase text-muted mb-0">Signed Up Riders</h5>
                                    </div>
                                    <div class="col-auto">
                                    <h1>54</h1>                      
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
                                    <h5 class="card-title text-uppercase text-muted mb-0">Signed Up Riders</h5>
                                    </div>
                                    <div class="col-auto">
                                    <h1>117</h1>                      
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
                                    <h5 class="card-title text-uppercase text-muted mb-0">Signed Up Riders</h5>
                                    </div>
                                    <div class="col-auto">
                                    <h1>989</h1>                      
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
                            <h3 class="text-white mb-0">All Riders</h3>
                            </div>
                            <div class="table-responsive">
                            <table class="table align-items-center table-dark table-flush">
                                <thead class="thead-dark">
                                <tr>
                                    <th>Full Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Rating</th>
                                    <th>City</th>
                                    <th>Sign Up date</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th><Link class="text-white" to='/detail'>John Doe</Link></th>
                                    <td>1521456978</td>
                                    <td>john@doe.com</td>
                                    <td>5</td>
                                    <td>Cassablanca</td>
                                    <td>12/10/19</td>
                                    <td>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Option
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 1</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 2</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 3</span>
                                        </a>
                                        </div>
                                    </li>
                                    </td>
                                </tr>
                                <tr>
                                    <th><Link class="text-white" to='/detail'>John Doe</Link></th>
                                    <td>1521456978</td>
                                    <td>john@doe.com</td>
                                    <td>5</td>
                                    <td>Cassablanca</td>
                                    <td>12/10/19</td>
                                    <td>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Option
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 1</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 2</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 3</span>
                                        </a>
                                        </div>
                                    </li>
                                    </td>
                                </tr>
                                <tr>
                                    <th><Link class="text-white" to='/detail'>John Doe</Link></th>
                                    <td>1521456978</td>
                                    <td>john@doe.com</td>
                                    <td>5</td>
                                    <td>Cassablanca</td>
                                    <td>12/10/19</td>
                                    <td>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Option
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 1</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 2</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 3</span>
                                        </a>
                                        </div>
                                    </li>
                                    </td>
                                </tr>
                                <tr>
                                    <th><Link class="text-white" to='/detail'>John Doe</Link></th>
                                    <td>1521456978</td>
                                    <td>john@doe.com</td>
                                    <td>5</td>
                                    <td>Cassablanca</td>
                                    <td>12/10/19</td>
                                    <td>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Option
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 1</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 2</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 3</span>
                                        </a>
                                        </div>
                                    </li>
                                    </td>
                                </tr>
                                <tr>
                                    <th><Link class="text-white" to='/detail'>John Doe</Link></th>
                                    <td>1521456978</td>
                                    <td>john@doe.com</td>
                                    <td>5</td>
                                    <td>Cassablanca</td>
                                    <td>12/10/19</td>
                                    <td>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Option
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 1</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 2</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 3</span>
                                        </a>
                                        </div>
                                    </li>
                                    </td>
                                </tr>
                                <tr>
                                    <th><Link class="text-white" to='/detail'>John Doe</Link></th>
                                    <td>1521456978</td>
                                    <td>john@doe.com</td>
                                    <td>5</td>
                                    <td>Cassablanca</td>
                                    <td>12/10/19</td>
                                    <td>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Option
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 1</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 2</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 3</span>
                                        </a>
                                        </div>
                                    </li>
                                    </td>
                                </tr>
                                <tr>
                                    <th><Link class="text-white" to='/detail'>John Doe</Link></th>
                                    <td>1521456978</td>
                                    <td>john@doe.com</td>
                                    <td>5</td>
                                    <td>Cassablanca</td>
                                    <td>12/10/19</td>
                                    <td>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Option
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 1</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 2</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 3</span>
                                        </a>
                                        </div>
                                    </li>
                                    </td>
                                </tr>
                                <tr>
                                    <th><Link class="text-white" to='/detail'>John Doe</Link></th>
                                    <td>1521456978</td>
                                    <td>john@doe.com</td>
                                    <td>5</td>
                                    <td>Cassablanca</td>
                                    <td>12/10/19</td>
                                    <td>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Option
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 1</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 2</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 3</span>
                                        </a>
                                        </div>
                                    </li>
                                    </td>
                                </tr>
                                <tr>
                                    <th><Link class="text-white" to='/detail'>John Doe</Link></th>
                                    <td>1521456978</td>
                                    <td>john@doe.com</td>
                                    <td>5</td>
                                    <td>Cassablanca</td>
                                    <td>12/10/19</td>
                                    <td>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Option
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 1</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 2</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 3</span>
                                        </a>
                                        </div>
                                    </li>
                                    </td>
                                </tr>
                                <tr>
                                    <th><Link class="text-white" to='/detail'>John Doe</Link></th>
                                    <td>1521456978</td>
                                    <td>john@doe.com</td>
                                    <td>5</td>
                                    <td>Cassablanca</td>
                                    <td>12/10/19</td>
                                    <td>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Option
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 1</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 2</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 3</span>
                                        </a>
                                        </div>
                                    </li>
                                    </td>
                                </tr>
                                <tr>
                                    <th><Link class="text-white" to='/detail'>John Doe</Link></th>
                                    <td>1521456978</td>
                                    <td>john@doe.com</td>
                                    <td>5</td>
                                    <td>Cassablanca</td>
                                    <td>12/10/19</td>
                                    <td>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Option
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 1</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 2</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 3</span>
                                        </a>
                                        </div>
                                    </li>
                                    </td>
                                </tr>
                                <tr>
                                    <th><Link class="text-white" to='/detail'>John Doe</Link></th>
                                    <td>1521456978</td>
                                    <td>john@doe.com</td>
                                    <td>5</td>
                                    <td>Cassablanca</td>
                                    <td>12/10/19</td>
                                    <td>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Option
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 1</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 2</span>
                                        </a>
                                        <a href="#" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>Option 3</span>
                                        </a>
                                        </div>
                                    </li>
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

export default Rider;