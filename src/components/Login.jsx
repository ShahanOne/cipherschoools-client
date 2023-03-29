import { useState } from 'react';

function Login(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [logStatus, setLogStatus] = useState('LogIn');

  function handleUserNameChange(e) {
    const { value } = e.target;

    setUserName(value);
  }
  function handlePasswordChange(e) {
    const { value } = e.target;

    setPassword(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://cipherschools-server.cyclic.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            username: userName,
            password: password,
          },
        ]),
      })
        .then((res) => res.json())
        .then((data) =>
          data !== 'poop' ? props.userData(data) : props.onError()
        );
    } catch (err) {
      console.log(err);
      setLogStatus('Login');
    }
    props.onLogin();
    setLogStatus('Login');
  };

  return (
    <div className="font-fira bg-slate-100 pb-8 md:p-[4%] w-full h-screen">
      <div className="bg-gray-200 text-slate-600 mx-8 md:mx-72 rounded-xl">
        <div className="loginDiv px-8">
          <p className="authenticateText text-xl md:text-3xl my-4 py-4">
            {' '}
            Log in to your CipherSchools account
          </p>
          <form onSubmit={handleSubmit}>
            <label className="text-lg my-4" htmlFor="userName">
              Username <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              className="block bg-gray-300 text-slate-600  border-none rounded w-[100%] md:w-[95%] h-8 my-4 md:my-6 focus:outline-none"
              type="text"
              value={userName}
              onChange={handleUserNameChange}
              id="userName"
            />
            <label className="text-lg my-4" htmlFor="password">
              Password <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              className="block bg-gray-300 text-slate-600  border-none rounded w-[100%] md:w-[95%] h-8 my-4 md:my-6 focus:outline-none"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              id="password"
            />

            <button
              className="bg-orange-500 hover:bg-orange-400 active:translate-y-0.5 text-white text-2xl my-4 md:my-6 p-[1%]  rounded-lg w-[100%] hover:cursor-pointer"
              type={userName && password ? 'submit' : 'button'}
              onClick={() =>
                userName && password
                  ? setLogStatus(<p className="animate-pulse">Logging in...</p>)
                  : ''
              }
            >
              {logStatus}
            </button>
          </form>

          <p className="authenticateText text-orange-600 text-xl mt-4 md:mt-12 py-2">
            {' '}
            Don't have an account? Register Now!
          </p>
          <button
            className="bg-orange-500 hover:bg-orange-400 active:translate-y-0.5 text-white text-2xl my-6 p-[1%]  rounded-lg w-[100%] hover:cursor-pointer"
            type="button"
            onClick={props.onGoToRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
