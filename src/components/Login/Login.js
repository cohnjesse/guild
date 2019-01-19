import React from 'react'
import './Login.css'


const Login = (props) => {
        return(
            <div className={'login ' + props.loggedIn }>
                <p>It looks like you need to choose a user:</p>
                <button onClick={props.logInUser} id="login-carl" data-name="Carl Malone" className="login-user-button">Carl Malone</button>
                <button onClick={props.logInUser} id="login-scotty" data-name="Scotty Pippen" className="login-user-button">Scotty Pippen</button>
            </div>
        )
}

export default Login;