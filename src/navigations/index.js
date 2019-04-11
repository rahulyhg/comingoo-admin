import React from 'react';
import { Link } from 'react-router-dom';


class Nav extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-comingoo" id="sidenav-main">
            <div class="container-fluid">              
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              
              <a class="navbar-brand pt-0" href="./index.html">
                <img src="../assets/img/brand/brand_white.png" class="navbar-brand-img" alt="..." />
              </a>
              
              <ul class="nav align-items-center d-md-none">
                <li class="nav-item dropdown">
                  <a class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ni ni-bell-55"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="media align-items-center">
                      <span class="avatar avatar-sm rounded-circle">
                        <img alt="Image placeholder"src="../assets/img/avatar/face2.jpg" />
                      </span>
                    </div>
                  </a>
                  <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                    <div class=" dropdown-header noti-title">
                      <h6 class="text-overflow m-0">Welcome!</h6>
                    </div>
                    <a class="dropdown-item">
                      <i class="ni ni-single-02"></i>
                      <span>My profile</span>
                    </a>
                    <a class="dropdown-item">
                      <i class="ni ni-settings-gear-65"></i>
                      <span>Settings</span>
                    </a>
                    <a class="dropdown-item">
                      <i class="ni ni-calendar-grid-58"></i>
                      <span>Activity</span>
                    </a>
                    <a class="dropdown-item">
                      <i class="ni ni-support-16"></i>
                      <span>Support</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item">
                      <i class="ni ni-user-run"></i>
                      <span>Logout</span>
                    </a>
                  </div>
                </li>
              </ul>
              
              <div class="collapse navbar-collapse" id="sidenav-collapse-main">
              
                <div class="navbar-collapse-header d-md-none">
                  <div class="row">
                    <div class="col-6 collapse-brand">
                      <a href="index.html">
                        <img src="../assets/img/brand/brand.png" />
                      </a>
                    </div>
                    <div class="col-6 collapse-close">
                      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link text-white" to='/'><i class="ni ni-tv-2 text-white"></i> Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link text-white" to='/rider'><i class="ni ni-bullet-list-67 text-white"></i> Riders</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link text-white" to='/driver'><i class="ni ni-planet text-white"></i> Drivers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        );
    }
}

export default Nav;


            {/* <header>
                <nav>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/driver'>Driver</Link></li>
                    <li><Link to='/rider'>Rider</Link></li>
                    <li><Link to='/rides'>All Rides</Link></li>
                </nav>
            </header> */}