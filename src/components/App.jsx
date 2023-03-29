import { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import UserPage from './UserPage';

function App() {
  const [logOrRegister, setLogOrRegister] = useState(true);
  // const [isSignClick, setSignClick] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState('');

  function handleHome() {
    window.location.reload();
  }
  // function handleSignInClick() {
  //   setSignClick((value) => !value);
  // }
  function handleUserData(data) {
    setUserInfo(data);
    setAuthenticated((value) => !value);
  }
  // function refreshUserData(data) {
  //   setUserInfo(data);
  // }
  function login() {
    // setSignClick(false);
    console.log('Logged in');
  }
  function loginError() {
    window.alert('user not found,please register or try again');
  }
  function register() {
    window.alert('Registered, You Can Login Now');
  }
  function goToLogin() {
    setLogOrRegister(true);
  }
  function goToRegister() {
    setLogOrRegister(false);
  }
  function handleSignOut() {
    setAuthenticated((value) => !value);
  }
  return (
    <div className="mainDiv">
      <p>Welcome to CipherSchools</p>
      <div>
        {!isAuthenticated ? (
          logOrRegister ? (
            <Login
              onLogin={login}
              onError={loginError}
              userData={handleUserData}
              onGoToRegister={goToRegister}
              // onCut={handleSignInClick}
            />
          ) : (
            <Register
              onRegister={register}
              onGoToLogin={goToLogin}
              // onCut={handleSignInClick}
            />
          )
        ) : (
          <UserPage
            // newUserData={refreshUserData}
            userId={userInfo._id}
            userName={userInfo.username}
            email={userInfo.email}
            followers={userInfo.followers}
            userLinkedin={userInfo.linkedin}
            userGithub={userInfo.github}
            userInstagram={userInfo.instagram}
            userFacebook={userInfo.facebook}
            userTwitter={userInfo.twitter}
            userWebsite={userInfo.website}
            userEducation={userInfo.education}
            userCollege={userInfo.college}
            handleSignOut={handleSignOut}
          />
        )}
      </div>
    </div>
  );
}

export default App;
