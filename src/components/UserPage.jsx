// import Navbar from './Navbar';
import MyFollowers from './MyFollowers';
import { useState } from 'react';
// import Footer from './Footer';

function UserPage(props) {
  const [isMyFollowersClicked, setMyFollowersClick] = useState(false);
  const [webInput, setWebInput] = useState(true);
  const [webButton, setWeb] = useState('Edit');
  const [infoInput, setInfoInput] = useState(true);
  const [infoButton, setInfo] = useState('Edit');
  const [passwordInput, setPasswordInput] = useState(true);
  const [passwordButton, setPass] = useState('Change');

  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [website, setWebsite] = useState('');
  const [education, setEducation] = useState('');
  const [college, setCollege] = useState('');
  const [password, setPassword] = useState('');

  function handleHome() {
    setMyFollowersClick(false);
  }

  function handleMyFollowers() {
    setMyFollowersClick(true);
  }
  function handleSignOut() {
    // window.location.reload();
    props.handleSignOut();
  }
  function handleLinkedinChange(e) {
    const { value } = e.target;

    setLinkedin(value);
  }
  function handleGithubChange(e) {
    const { value } = e.target;

    setGithub(value);
  }
  function handleFacebookChange(e) {
    const { value } = e.target;

    setFacebook(value);
  }
  function handleInstaChange(e) {
    const { value } = e.target;

    setInstagram(value);
  }
  function handleTwitterChange(e) {
    const { value } = e.target;

    setTwitter(value);
  }
  function handleWebsiteChange(e) {
    const { value } = e.target;

    setWebsite(value);
  }
  function handleEducationChange(e) {
    const { value } = e.target;

    setEducation(value);
  }
  function handleCollegeChange(e) {
    const { value } = e.target;

    setCollege(value);
  }
  function handlePasswordChange(e) {
    const { value } = e.target;

    setPassword(value);
  }
  function handleWebEdit() {
    setWebInput(false);
    setWeb('Save');
  }

  function handleInfoEdit() {
    setInfoInput(false);
    setInfo('Save');
  }
  function handlePasswordEdit() {
    setPasswordInput(false);
    setPass('Save');
  }

  async function handleWebInfo() {
    try {
      const res = await fetch('http://localhost:3001/web-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            userId: props.userId,
            linkedin: linkedin,
            github: github,
            facebook: facebook,
            instagram: instagram,
            twitter: twitter,
            website: website,
          },
        ]),
      })
        .then((res) => res.json())
        .then((data) => data !== 'poop' && props.newUserData(data));
    } catch (err) {
      console.log(err);
    }
  }
  async function handlePersonalInfo() {
    try {
      const res = await fetch('http://localhost:3001/personal-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            userId: props.userId,
            education: education,
            college: college,
          },
        ]),
      })
        .then((res) => res.json())
        .then((data) => data !== 'poop' && props.newUserData(data));
    } catch (err) {
      console.log(err);
    }
  }
  async function handlePasswordInfo() {
    try {
      const res = await fetch('http://localhost:3001/new-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            userId: props.userId,
            password: password,
          },
        ]),
      })
        .then((res) => res.json())
        .then((data) => data !== 'poop' && props.newUserData(data));
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="font-fira py-4 bg-slate-100">
        <div className="userPageText px-4 bg-orange-300 md:my-6 text-gray-600">
          <img
            className="rounded-full inline-block w-28 md:w-40"
            src="/billie.webp"
            alt=""
          />
          <p className="py-2 text-3xl">Hello {props.userName}</p>
          <p className="text-lg">{props.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
        {!isMyFollowersClicked ? (
          <div className="px-8">
            <div className="aboutMe">
              <p className="text-orange-500">ABOUT ME</p>
              <textarea
                className="rounded-lg w-[90%]"
                name=""
                id=""
                cols="80"
                rows="7"
              ></textarea>
            </div>
            <div className="cipherMap my-4">Cipher Map goes here</div>
            <div className="details">
              <div className="grid grid-cols-2">
                {' '}
                <p className="heading">ON THE WEB</p>
                <button
                  className="w-[25%] bg-orange-500 text-white border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg px-2 py-1 focus:bg-orange-500"
                  onClick={handleWebEdit}
                  type={!webInput ? 'submit' : 'button'}
                >
                  {webButton}
                </button>
              </div>

              <form className="grid grid-cols-1">
                <label htmlFor="linkedIn">LinkedIn</label>
                <input
                  className="rounded focus:outline-none px-1 m-1"
                  disabled={webInput}
                  value={linkedin}
                  onChange={handleLinkedinChange}
                  type="text"
                  name=""
                  placeholder="LinkedIn"
                  id="linkedIn"
                />
                <label htmlFor="github">GitHub</label>
                <input
                  className="rounded focus:outline-none px-1 m-1"
                  disabled={webInput}
                  value={github}
                  onChange={handleGithubChange}
                  type="text"
                  name=""
                  placeholder="GitHub"
                  id="github"
                />{' '}
                <label htmlFor="facebook">Facebook</label>
                <input
                  className="rounded focus:outline-none px-1 m-1"
                  disabled={webInput}
                  value={facebook}
                  onChange={handleFacebookChange}
                  type="text"
                  name=""
                  placeholder="Facebook"
                  id="facebook"
                />{' '}
                <label htmlFor="twitter">Twitter</label>
                <input
                  className="rounded focus:outline-none px-1 m-1"
                  disabled={webInput}
                  value={twitter}
                  onChange={handleTwitterChange}
                  type="text"
                  name=""
                  placeholder="Twitter"
                  id="twitter"
                />{' '}
                <label htmlFor="instagram">Instagram</label>
                <input
                  className="rounded focus:outline-none px-1 m-1"
                  disabled={webInput}
                  value={instagram}
                  onChange={handleInstaChange}
                  type="text"
                  name=""
                  placeholder="Instagram"
                  id="instagram"
                />{' '}
                <label htmlFor="website">Website</label>
                <input
                  className="rounded focus:outline-none px-1 m-1"
                  disabled={webInput}
                  value={website}
                  onChange={handleWebsiteChange}
                  type="text"
                  name=""
                  placeholder="Your Website"
                  id="website"
                />
              </form>
            </div>
            <div className="professionalInfo">
              <div className="grid grid-cols-2">
                <p>PROFESSIONAL INFORMATION</p>
                <button
                  className="w-[25%] bg-orange-500 text-white border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg px-2 py-1 focus:bg-orange-500"
                  onClick={handleInfoEdit}
                  type={!infoInput ? 'submit' : 'button'}
                >
                  {infoButton}
                </button>
              </div>
              <form className="grid grid-cols-1">
                <label htmlFor="education">Highest Education</label>
                <input
                  className="rounded focus:outline-none px-1 m-1"
                  disabled={infoInput}
                  value={education}
                  onChange={handleEducationChange}
                  type="text"
                  name=""
                  placeholder="Graduation"
                  id="graduation"
                />
                <label htmlFor="college">What do you do currently?</label>
                <input
                  className="rounded focus:outline-none px-1 m-1"
                  disabled={infoInput}
                  value={college}
                  onChange={handleCollegeChange}
                  type="text"
                  name=""
                  placeholder="College Student"
                  id="college"
                />
              </form>
            </div>
            <div className="security">
              <div className="grid grid-cols-2">
                <p>PASSWORD & SECURITY</p>
                <button
                  className="w-[25%] bg-orange-500 text-white border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg px-2 py-1 focus:bg-orange-500"
                  onClick={handlePasswordEdit}
                  type={!passwordInput ? 'submit' : 'button'}
                >
                  {passwordButton}
                </button>
              </div>
              <form>
                <label htmlFor="password">Password</label>
                <input
                  className="rounded focus:outline-none px-1 m-1"
                  disabled={passwordInput}
                  value={password}
                  onChange={handlePasswordChange}
                  type="password"
                  name=""
                  placeholder="**********"
                  id="password"
                />
              </form>
            </div>
            <div className="interests px-[25%]">
              <div className="grid grid-cols-2">
                <p>INTERESTS</p>
                <button className="w-[25%] bg-orange-500 text-white border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg px-2 py-1 focus:bg-orange-500">
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-2">
                <button className="bg-slate-200 border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg p-2 m-2 focus:bg-orange-500">
                  Web Development
                </button>
                <button className="bg-slate-200 border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg p-2 m-2 focus:bg-orange-500">
                  App Development
                </button>
                <button className="bg-slate-200 border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg p-2 m-2 focus:bg-orange-500">
                  Game Development
                </button>
                <button className="bg-slate-200 border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg p-2 m-2 focus:bg-orange-500">
                  Data Structures
                </button>
                <button className="bg-slate-200 border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg p-2 m-2 focus:bg-orange-500">
                  Programming
                </button>
                <button className="bg-slate-200 border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg p-2 m-2 focus:bg-orange-500">
                  Machine Learning
                </button>
                <button className="bg-slate-200 border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg p-2 m-2 focus:bg-orange-500">
                  Data Science
                </button>
                <button className="bg-slate-200 border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg p-2 m-2 focus:bg-orange-500">
                  Others
                </button>
              </div>
              <div className="grid grid-cols-2">
                <button className="bg-black text-gray-100 p-1 rounded-lg m-1">
                  cancel
                </button>
                <button className="bg-orange-500 text-gray-100 p-1 rounded-lg m-1">
                  save
                </button>
              </div>
            </div>
          </div>
        ) : (
          <MyFollowers />
        )}
      </div>
    </>
  );
}

export default UserPage;
