import React from 'react';

import Main from '../Main/index';
import Nav from '../../navigations/index';
import NavHeader from '../NavHeader/index';

class MainWindow extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                {/* Main Content Starts From here */}
                <div class="main-content">
                    <NavHeader />
                    <Main />
                </div>
                <button onClick={this.props.logoutFunc}>Logout</button>
            </div>
        );
    }
}

export default MainWindow;