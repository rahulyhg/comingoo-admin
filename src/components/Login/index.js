import React from 'react';

class Login extends React.Component{
    render(){
        return(
            <div>
                <h1>Login Page</h1>
                <button onClick={this.props.loginFunc}>Login</button>
            </div>
        );
    }
}

export default Login;