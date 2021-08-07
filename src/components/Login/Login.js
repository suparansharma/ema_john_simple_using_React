import React, { useContext, useState } from 'react';

import  {UserContext} from '../../App';
import { useLocation,useHistory } from 'react-router-dom';
import { handleGoogleSignIn, handleSignOut, initializeLoginFramework } from './loginManager';



function Login() {
  const [newUser,setNewUser]=useState(false);
  
  const [user,setUser] = useState({
    isSignedIn : false,
    name : '',
    email : '', 
    photo : '',
    password : ''
    // error : ''

  })
  initializeLoginFramework();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {

          setUser(res);
          setLoggedInUser(res);
          history.replace(from);
        })
  }

const signOut = () =>{
    handleSignOut()
    .then(res =>{
        setUser(res);
        setLoggedInUser(res);
    })
}
 

  const handleBlur = (e)=>{
    let isFormValid = true;
    if(e.target.name === 'email'){
     isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
      
    }

    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordHasNumber ;
    }

    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
    
  }

  const handleSubmit = (e)=>{
    // console.log(user.email,user.password);
    if(newUser && user.email && user.password){
  
    }


    if(!newUser && user.email && user.password){

    }
e.preventDefault();
  }

  
  return (
    

    <div style={{textAlign:'center'}}>

      {
        user.isSignedIn ? <button onClick={signOut}>Sign out</button>:
        <button onClick={googleSignIn}>Sign in</button>
      }
      
      {
        user.isSignedIn && <div> 
          <p>Welcome {user.name}</p>
          <p>email {user.email}</p>
          <img src={user.photo} alt="" />

        </div>
      }

      <h1>Our own Authentication</h1>
      {/* <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p> */}
      <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id="" />
      <label htmlFor="newUser">New user Sign up</label>
      <form onSubmit={handleSubmit}>
       {newUser && <input type="text"  name="name" onBlur={handleBlur} placeholder="Your name"/>}
        <br />
        <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required />
        <br />
        <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required />
        <br />
        <input type="submit" value={newUser ? 'sign up' : 'sign in'} />
      </form>
      <p style={{ color:'red' }}>{user.error}</p>
      {user.success && <p style={{ color:'green' }}>user { newUser ? 'created' : 'Logged In'} created</p> }
    </div>
  );
}

export default Login;
