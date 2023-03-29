import { useState } from 'react';

function Register(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  function handleUserNameChange(e) {
    const { value } = e.target;

    setUserName(value);
  }
  function handleEmailChange(e) {
    const { value } = e.target;

    setEmail(value);
  }
  function handlePasswordChange(e) {
    const { value } = e.target;

    setPassword(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.onRegister();
    try {
      const res = await fetch(
        'https://cipherschools-server.cyclic.app/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([
            {
              username: userName,
              email: email,
              password: password,
            },
          ]),
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (err) {
      console.log(err);
    }
    setUserName('');
    setEmail('');
    setPassword('');
    props.onGoToLogin();
  };

  return (
    <div className="font-fira bg-slate-100 pb-8 md:p-[3%] w-full h-screen">
      <div className="bg-gray-200 text-slate-600 mx-8 md:mx-72 rounded-xl">
        <div className="registerDiv px-8">
          <p className="authenticateText text-xl md:text-3xl my-4 py-4">
            Register and start your selling journey!{' '}
          </p>

          <form onSubmit={handleSubmit}>
            <label className="text-lg my-4" htmlFor="userName">
              Setup Username <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              className="block bg-gray-300 text-slate-600  border-none rounded w-[100%] md:w-[90%] h-8 my-4 md:my-6 focus:outline-none"
              type="text"
              value={userName}
              onChange={handleUserNameChange}
              id="userName"
            />
            <label className="text-lg my-4" htmlFor="email">
              Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              className="block bg-gray-300 text-slate-600  border-none rounded w-[100%] md:w-[90%] h-8 my-4 md:my-6 focus:outline-none"
              type="text"
              value={email}
              onChange={handleEmailChange}
              id="email"
            />
            <label className=" text-lg my-4" htmlFor="password">
              Create Password <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              className="block bg-gray-300 text-slate-600  border-none rounded w-[100%] md:w-[90%] h-8 my-4 md:my-6 focus:outline-none"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              id="password"
            />

            <button
              className="bg-orange-500 hover:bg-orange-400 active:translate-y-0.5 text-white text-2xl my-4 md:my-6 p-[1%]  rounded-lg w-[100%] hover:cursor-pointer"
              type={userName && email && password ? 'submit' : 'button'}
            >
              Register
            </button>
          </form>

          <p className="authenticateText text-xl text-orange-600 mt-4 md:mt-12 py-2">
            {' '}
            Already have an account? Login!
          </p>
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-400 active:translate-y-0.5 text-white text-2xl my-6 p-[1%]  rounded-lg w-[100%] hover:cursor-pointer"
            onClick={props.onGoToLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
