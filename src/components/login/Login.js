import React from 'react'
import * as actions from "../../stores/actions";
import { GoogleLogin, GoogleLogout } from 'react-google-login';



function Login() {

   const [user, setUserName] = React.useState({
      email: "",
      passWord: "",

   })
   const [userLogin, setUserlogin] = React.useState(false);

   const responseGoogle = async (response) => {
      console.log(response);
      if (response.profileObj) {
         setUserlogin(true);
         await actions.loginStart(response.profileObj.email, response.tokenId);
      } else setUserlogin(false);
   }

   const logout = () => {
      setUserlogin(false);
   }

   let handleOnchange = (e) => {
      let { name, value } = e.target;
      setUserName(prev => ({
         ...prev,
         [name]: value
      }));

   }


   let handleSubmitLogin = async () => {
      await actions.loginStart(user.email, user.passWord);
   }
   return (

      <div className='container mt-3 p-3'>
         <h2 className='text-dark text-center'> Login </h2>
         <div className='form'>
            <label className='text-dark'> Email </label>
            <input type='email' className='form-control col-4 required1' name='email' id='email' onChange={handleOnchange} />
            <label className='text-dark'> Password </label>
            <input type='text' className='form-control col-4 required1' name='passWord' id='password' onChange={handleOnchange} />
            {userLogin == false &&
               <div className='mt-3'>
                  <button type='button' className='btn btn-success mt-3' onClick={handleSubmitLogin}>
                     Login
                  </button>
               </div>
            }
            <div className='mt-3'>
               {userLogin ? <GoogleLogout
                  clientId="560665860269-iu7u2rrcqvrps1g94ikg1feockimrrnp.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={logout}
               /> : <GoogleLogin
                  clientId="560665860269-iu7u2rrcqvrps1g94ikg1feockimrrnp.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
               />}
            </div>

         </div>
      </div>
   )
}

export default Login