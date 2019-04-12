import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class Profile extends Component {
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
                    </div>
                </div>
            </div>

            <div class="container-fluid mt--7">
                <div class="row">
                    <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                    <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                        <div class="col-lg-3 order-lg-2">
                            <div class="card-profile-image">
                            <a href="#">
                                <img src="../assets/img/avatar/face2.jpg" class="rounded-circle"/>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">

                        </div>
                        <div class="card-body pt-0 pt-md-4">
                        <div class="row">
                            <div class="col">
                            <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                            </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <h3>
                            John Doe
                            </h3>
                            <hr class="my-2" />
                            <p class="profile-para">Driver</p>
                            <p class="profile-para">Status: Online</p>
                            <p class="profile-para">Wallet:  <strong>$15.5</strong></p>
                            <div class="profile-button">
                            <button type="button" class="btn btn-sm btn-primary">Add Fund</button>
                            <button type="button" class="btn btn-sm btn-info">Remove Fund</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>


                    <div class="col-xl-8 order-xl-1">
                    <div class="nav-wrapper">
                        <ul class="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-icons-text" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="history-tab" data-toggle="tab" href="#history" role="tab" aria-controls="history" aria-selected="false">Ride History</a>
                            </li>
                        </ul>
                    </div>


                    <div class="card shadow">
                        <div class="card-body">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                    <div>
                                        <h2>Driver Details</h2>
                                        <hr class="my-2" />
                                        <div class="pl-lg-4">
                                        <div class="overview-content">
                                            <p class="profile-para">Full Name: John Doe</p>
                                            <p class="profile-para">Phone: (252) 252 5248</p>
                                            <p class="profile-para">Email: John@doe.com</p>
                                            <p class="profile-para">City: Cassablanca</p>
                                            <p class="profile-para">Gender: Male</p>
                                            <p class="profile-para">Car No#: DHA-255-59</p>
                                            <p class="profile-para">Rating: 4.3</p>
                                            <p class="profile-para">Created: 01/02/2019</p>
                                        </div>
                                        </div>

                                        <h2>Driver Activity</h2>
                                        <hr class="my-2" />
                                        <div class="pl-lg-4">
                                        <div class="overview-content">
                                            <p class="profile-para">Connected: 52 Hrs</p>
                                            <p class="profile-para">Ride Completed: 52</p>
                                            <p class="profile-para">Ride Cancelation: 52</p>
                                            <p class="profile-para">Reffered: 52</p>
                                            <p class="profile-para">Balence: 392 USD</p>
                                        </div>
                                        </div>
                                        <h2>Profile Action</h2>
                                        <hr class="my-2" />
                                        <div class="pl-lg-4">
                                          <button className="btn btn-info">Add Fund</button>
                                          <button className="btn btn-warning">Remove Fund</button>
                                          <button className="btn btn-success">Deactive</button>
                                          <button className="btn btn-danger">Delete Account</button>
                                        </div>
                                    </div>
                                    </div>


                                    <div class="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab">
                                    <h1>Riders History Given below</h1>
                                    <hr class="my-2" />
                                    <div class="row history-margin">
                                        <div class="col-md-8 map-cavas">
                                            <Map
                                                google={this.props.google}
                                                zoom={12}
                                                initialCenter={{
                                                lat: -1.2884,
                                                lng: 36.8233
                                                }}
                                            />
                                        </div>
                                        <div class="col-md-4">
                                            <h2>Ride Detail</h2>
                                            <hr class="my-2" />
                                            <div class="overview-content">
                                                <p class="profile-para">Date: 01/02/2019</p>
                                                <p class="profile-para">Vehicle: Car</p>
                                                <p class="profile-para">Starting Point: Karsaz</p>
                                                <p class="profile-para">Total Destination: 11.8 Km</p>
                                                <p class="profile-para">Time taken: 24 Min</p>
                                                <p class="profile-para">Total Cost: 115 RS</p>
                                                <p class="profile-para">Star Given : 5 Star</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="my-2" />
                                    <div class="row history-margin">
                                        <div class="col-md-8 map-cavas">
                                            <Map
                                                google={this.props.google}
                                                zoom={14}
                                                initialCenter={{
                                                lat: -1.2884,
                                                lng: 36.8233
                                                }}
                                            />
                                        </div>
                                        <div class="col-md-4">
                                            <h2>Ride Detail</h2>
                                            <hr class="my-2" />
                                            <div class="overview-content">
                                                <p class="profile-para">Date: 01/02/2019</p>
                                                <p class="profile-para">Vehicle: Car</p>
                                                <p class="profile-para">Starting Point: Karsaz</p>
                                                <p class="profile-para">Total Destination: 11.8 Km</p>
                                                <p class="profile-para">Time taken: 24 Min</p>
                                                <p class="profile-para">Total Cost: 115 RS</p>
                                                <p class="profile-para">Star Given : 5 Star</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                  </div>
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

export default Profile;
