// import Navbar from './Navbar';
import MyFollowers from './MyFollowers';
import { useState } from 'react';
// import Footer from './Footer';

function UserPage(props) {
  const [isMyFollowersClicked, setMyFollowersClick] = useState(false);
  const [about, setAbout] = useState('');
  const [aboutInput, setAboutInput] = useState(true);
  const [aboutButton, setAboutButton] = useState('Edit');
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

  const [isInterestsClicked, setInterestClick] = useState(false);

  function handleHome() {
    setMyFollowersClick(false);
  }

  function handleMyFollowers() {
    setMyFollowersClick((value) => !value);
  }
  function handleSignOut() {
    // window.location.reload();
    props.handleSignOut();
  }
  function handleAboutChange(e) {
    const { value } = e.target;

    setAbout(value);
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
  function handleAboutEdit() {
    setAboutInput(false);
    setAboutButton('Save');
  }
  function handleWebEdit() {
    setWebInput(false);
    setWeb('Save');
  }

  function handlePersonalInfoEdit() {
    setInfoInput(false);
    setInfo('Save');
  }
  function handlePasswordEdit() {
    setPasswordInput(false);
    setPass('Save');
  }

  function handleInterestsClick() {
    setInterestClick(true);
  }

  async function handleAbout(e) {
    e.preventDefault();

    try {
      const res = await fetch('https://cipherschools-server.cyclic.app/about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            userId: props.userId,
            about: about,
          },
        ]),
      })
        .then((res) => res.json())
        .then((data) => data !== 'poop' && props.newUserData(data));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleWebInfo(e) {
    e.preventDefault();

    try {
      const res = await fetch(
        'https://cipherschools-server.cyclic.app/web-info',
        {
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
        }
      )
        .then((res) => res.json())
        .then((data) => data !== 'poop' && props.newUserData(data));
    } catch (err) {
      console.log(err);
    }
  }
  async function handlePersonalInfo(e) {
    e.preventDefault();

    try {
      const res = await fetch(
        'https://cipherschools-server.cyclic.app/personal-info',
        {
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
        }
      )
        .then((res) => res.json())
        .then((data) => data !== 'poop' && props.newUserData(data));
    } catch (err) {
      console.log(err);
    }
  }
  async function handlePasswordInfo(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        'https://cipherschools-server.cyclic.app/new-password',
        {
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
        }
      )
        .then((res) => res.json())
        .then((data) => data !== 'poop' && props.newUserData(data));
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="font-fira py-4 bg-gray-700 text-gray-200">
        <div className="userPageText bg-orange-500 my-8">
          <p className="py-2 px-2 text-3xl">Hello {props.userName}</p>
          <p className="text-lg pb-4 px-2">{props.email}</p>
          <div className="grid grid-cols-2 text-center py-2 bg-slate-700">
            <div>
              <button
                className="bg-slate-500 hover:bg-slate-600 rounded shadow-lg p-2"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
            <div>
              <button
                className="bg-slate-500 hover:bg-slate-600 rounded shadow-lg p-2"
                onClick={handleMyFollowers}
              >
                My Followers
              </button>
            </div>
          </div>
        </div>
        {!isMyFollowersClicked ? (
          <div className="px-8">
            <div className="aboutMe">
              <form onSubmit={handleAbout}>
                <div className="grid grid-cols-2 my-4">
                  <p className="text-orange-500 text-lg">ABOUT ME</p>
                  <button
                    className="w-[25%] bg-orange-500 text-white border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg px-2 py-1 focus:bg-orange-500"
                    onClick={handleAboutEdit}
                    type={!aboutInput ? 'submit' : 'button'}
                  >
                    {aboutButton}
                  </button>
                </div>
                <textarea
                  className="rounded-lg w-[95%] focus:outline-none px-1 my-1 bg-gray-500"
                  value={about}
                  onChange={handleAboutChange}
                  disabled={aboutInput}
                  id=""
                  cols="80"
                  rows="7"
                ></textarea>
              </form>
            </div>
            <div className="cipherMap my-4  text-lg">Cipher Map goes here</div>
            <div className="details">
              <form onSubmit={handleWebInfo}>
                <div className="grid grid-cols-2 my-4">
                  {' '}
                  <p className="heading  text-lg">ON THE WEB</p>
                  <button
                    className="w-[25%] bg-orange-500 text-white border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg px-2 py-1 focus:bg-orange-500"
                    onClick={handleWebEdit}
                    type={!webInput ? 'submit' : 'button'}
                  >
                    {webButton}
                  </button>
                </div>
                <div className="grid grid-cols-2 my-4">
                  <div>
                    <label htmlFor="linkedIn">LinkedIn</label>
                    <br />
                    <input
                      className="rounded focus:outline-none w-[90%] h-8 px-1 my-1 bg-gray-500"
                      disabled={webInput}
                      value={linkedin}
                      onChange={handleLinkedinChange}
                      type="text"
                      name=""
                      placeholder={
                        !props.userLinkedin ? 'Linkedin' : props.userLinkedin
                      }
                      id="linkedIn"
                    />
                  </div>
                  <div>
                    <label htmlFor="github">GitHub</label>
                    <br />
                    <input
                      className="rounded focus:outline-none w-[90%] h-8 px-1 my-1 bg-gray-500"
                      disabled={webInput}
                      value={github}
                      onChange={handleGithubChange}
                      type="text"
                      name=""
                      placeholder={
                        !props.userGithub ? 'Github' : props.userGithub
                      }
                      id="github"
                    />{' '}
                  </div>
                  <div>
                    <label htmlFor="facebook">Facebook</label>
                    <br />
                    <input
                      className="rounded focus:outline-none w-[90%] h-8 px-1 my-1 bg-gray-500"
                      disabled={webInput}
                      value={facebook}
                      onChange={handleFacebookChange}
                      type="text"
                      name=""
                      placeholder={
                        !props.userFacebook ? 'Facebook' : props.userFacebook
                      }
                      id="facebook"
                    />{' '}
                  </div>
                  <div>
                    <label htmlFor="twitter">Twitter</label>
                    <br />
                    <input
                      className="rounded focus:outline-none w-[90%] h-8 px-1 my-1 bg-gray-500"
                      disabled={webInput}
                      value={twitter}
                      onChange={handleTwitterChange}
                      type="text"
                      name=""
                      placeholder={
                        !props.userTwitter ? 'Twitter' : props.userTwitter
                      }
                      id="twitter"
                    />{' '}
                  </div>
                  <div>
                    <label htmlFor="instagram">Instagram</label>
                    <br />
                    <input
                      className="rounded focus:outline-none w-[90%] h-8 px-1 my-1 bg-gray-500"
                      disabled={webInput}
                      value={instagram}
                      onChange={handleInstaChange}
                      type="text"
                      name=""
                      placeholder={
                        !props.userInstagram ? 'Instagram' : props.userInstagram
                      }
                      id="instagram"
                    />{' '}
                  </div>
                  <div>
                    <label htmlFor="website">Website</label>
                    <br />
                    <input
                      className="rounded focus:outline-none w-[90%] h-8 px-1 my-1 bg-gray-500"
                      disabled={webInput}
                      value={website}
                      onChange={handleWebsiteChange}
                      type="text"
                      name=""
                      placeholder={
                        !props.userWebsite ? 'Your Website' : props.userWebsite
                      }
                      id="website"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="professionalInfo">
              <form onSubmit={handlePersonalInfo}>
                <div className="grid grid-cols-2 my-4">
                  <p className=" text-lg">PROFESSIONAL INFORMATION</p>
                  <button
                    className="w-[25%] bg-orange-500 text-white border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg px-2 py-1 focus:bg-orange-500"
                    onClick={handlePersonalInfoEdit}
                    type={!infoInput ? 'submit' : 'button'}
                  >
                    {infoButton}
                  </button>
                </div>
                <div className="grid grid-cols-2 my-4"></div>
                <div>
                  <label htmlFor="education">Highest Education</label>
                  <br />
                  <input
                    className="rounded focus:outline-none w-[90%] h-8 px-1 my-1 bg-gray-500"
                    disabled={infoInput}
                    value={education}
                    onChange={handleEducationChange}
                    type="text"
                    name=""
                    placeholder={
                      !props.userEducation ? 'Graduation' : props.userEducation
                    }
                    id="graduation"
                  />
                </div>
                <div>
                  <label htmlFor="college">What do you do currently?</label>
                  <br />
                  <input
                    className="rounded focus:outline-none w-[90%] h-8 px-1 my-1 bg-gray-500"
                    disabled={infoInput}
                    value={college}
                    onChange={handleCollegeChange}
                    type="text"
                    name=""
                    placeholder={
                      !props.userCollege ? 'College Student' : props.userCollege
                    }
                    id="college"
                  />
                </div>
              </form>
            </div>
            <div className="security">
              <form onSubmit={handlePasswordInfo}>
                <div className="grid grid-cols-2 my-4">
                  <p className="text-lg">PASSWORD & SECURITY</p>
                  <button
                    className="w-[25%] bg-orange-500 text-white border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg px-2 py-1 focus:bg-orange-500"
                    onClick={handlePasswordEdit}
                    type={!passwordInput ? 'submit' : 'button'}
                  >
                    {passwordButton}
                  </button>
                </div>
                <label htmlFor="password">Password</label> <br />
                <input
                  className="rounded focus:outline-none w-[90%] h-8 px-1 my-1 bg-gray-500"
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
                <button
                  className="w-[25%] bg-orange-500 text-white border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg px-2 py-1 focus:bg-orange-500"
                  onClick={handleInterestsClick}
                >
                  Edit
                </button>
              </div>
              {isInterestsClicked ? (
                <div>
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
              ) : (
                ''
              )}
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
