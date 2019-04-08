import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Driver from '../Driver/index';
import Rider from '../Rider/index';
import Rides from '../Rides/index';

class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path='/driver' component={Driver} />
                <Route exact path='/rider' component={Rider} />
                <Route exact path='/rides' component={Rides} />
            </Switch>
        );
    }
}

export default Main;