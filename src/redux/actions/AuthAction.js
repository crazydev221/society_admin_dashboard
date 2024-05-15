import AuthServices from "../../services/AuthService";

const AuthActions = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILURE: "LOGIN_FAILURE",
    
    login : (username, password) => (dispatch) => {
        return AuthServices.login(username, password)
            .then((data) => {
                console.log('Login Success', data);
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: { 
                        user: data,
                        token: data.accessToken,
                    },
                });
            })
            .catch(err => {
                dispatch({
                    type: "LOGIN_FAILURE",
                });
                console.error('Error admin login:', err);
            })
    },
}

export default AuthActions;
