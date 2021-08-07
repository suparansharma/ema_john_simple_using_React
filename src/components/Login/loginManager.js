import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework =() =>{
  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }
}

export const handleGoogleSignIn = () =>{

const provider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth().signInWithPopup(provider)
    .then(res => {
      const {displayName,email,photoURL} = res.user;
      const signedInUser = {
        isSignedIn : true,
        name : displayName,
        email : email,
        photo :photoURL

      }
      return signedInUser;
      console.log(displayName,email,photoURL);
      // console.log(res);
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);

    })
  }

  export const handleSignOut = ()=>{
    return firebase.auth().signOut()
    .then(res =>{
      const signedOutUser = {
        isSignedIn : false,
        name : '',
        photo : '',
        email : '',
        error :'',
        success:false
      }
      return signedOutUser;
    })

    .catch(err => {
      console.log(err);

    })
  }

//   export const createUserWithEmailAndPassword = () =>{
//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//     .then(res => {
//       const newUserInfo = {...user};
//       newUserInfo.error = '';
//       newUserInfo.success=true;
//       setUser(newUserInfo);
//       setLoggedInUser(newUserInfo);
//       history.replace(from);
//       updateUserName(user.name);
      
//     })
//     .catch(error =>
//   {
//  const newUserInfo = {...user};
//  newUserInfo.error = error.message;
//  newUserInfo.success=false;
//   setUser(newUserInfo);

// });
//   }

//   export const signInWithEmailAndPassword = () =>{
//     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//     .then(res => {
//       const newUserInfo = {...user};
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       setUser(newUserInfo);
//       console.log('sign in user info ',res.user);
 
// })
// .catch(function(error) {
//   const newUserInfo = {...user};
//   newUserInfo.error = error.message;
//   newUserInfo.success = false;
//   setUser(newUserInfo);
// });
//   }

//   const updateUserName = name =>{
//     const user = firebase.auth().currentUser;

//     user.updateProfile({
//       displayName: "Jane Q. User",
//       photoURL: "https://example.com/jane-q-user/profile.jpg"
//     })
//     .then(() => {
//       console.log('user name updated successfully')
//     })
//     .catch((error) => {
//      console.log(error)
//     });  

//   }