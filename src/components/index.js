import React from 'react';

import Login from './Login/index';
import MainWindow from './MainWindow/index'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: true
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick(){
        this.setState({isLoggedIn:true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn:false});
    }

    render(){
        return(
            <div>
                {this.state.isLoggedIn ? (
                    <MainWindow logoutFunc={this.handleLogoutClick}/>
                ) : (
                    <Login loginFunc={this.handleLoginClick} />
                ) }
            </div>
        );
    }
}

export default App;