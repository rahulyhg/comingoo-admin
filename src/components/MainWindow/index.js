import React from 'react';

import Main from '../Main/index';
import Nav from '../../navigations/index';

class MainWindow extends React.Component{
    render(){
        return(
            <div>
                <h1>Main window comes Here</h1>
                <Nav />
                <Main />
                <button onClick={this.props.logoutFunc}>Logout</button>
            </div>
        );
    }
}

export default MainWindow;