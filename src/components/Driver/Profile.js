import React, { Component } from 'react';

class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div>
        <div className="row">
          <div className="col-md-12">
                <div className="card">
                    <div className="header pb-20">
                        <h3 className="title b">About John Due</h3>
                    </div>
                </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
                <div className="card">
                    <div className="header">
                        <h3 className="title">Driver Details</h3>
                        <hr/>
                    </div>
                    <div className="content pt-0 pl-20">
                      <p>Name: John Due</p>
                      <p>Phone: (252) 252 5248</p>
                      <p>City: Dhaka</p>
                      <p>Gender: Male</p>
                      <p>Car No#: DHA-255-59</p>
                      <p>Rating: 4.3</p>
                      <p>Created: 2019-04-09</p>
                      <br/> <br/>
                      <h3 className="title">Driver Activity</h3>
                      <hr/>
                      <p>Connected: 52 Hrs</p>
                      <p>Ride Completed: 52</p>
                      <p>Ride Cancelation: 52</p>
                      <p>Reffered: 52</p>
                      <p>Balence: 392 USD</p>
                      <br/> <br/>
                      <h3 className="title">Profile Action</h3>
                      <hr/>
                      <p>
                        <button className="btn btn-info btn-sm brs">Add Fund</button>
                        <button className="btn btn-warning btn-sm brs">Remove Fund</button>
                        <button className="btn btn-success btn-sm brs">Deactive</button>
                        <button className="btn btn-danger btn-sm brs">Delete</button>
                      </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
              <div className="card card-user">
                <div class="image">
                </div>
                <div className="content">
                  <div className="author">
                    <img className="avatar border-white" src={process.env.PUBLIC_URL + '/assets/img/driver.png'} alt="..." />
                    <h4 className="title">John Due<br/>
                      <small>offline</small>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
      </div>
    );
  }
}

export default Profile ;
