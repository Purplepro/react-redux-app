import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../Components/features/user';

function Login() {
    const dispatch = useDispatch();

    return (
        <div>
          <button 
          onClick={() => { 
              dispatch(login({name: "Sebastian", age: 22, email: "seviothemoto@gmail.com"}))}}>
                Login
          </button> 

          <button onClick={() => {
              dispatch(logout({}));
          }}>
            Logout  
          </button> 
        </div>
    )
}

export default Login



// useDispatch hook is used to modify values of your stae
// useSelector is used for accessing values of your state