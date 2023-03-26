// import Navbar from './Navbar';
import MyFollowers from './MyFollowers';
import { useState } from 'react';
// import Footer from './Footer';

function UserPage(props) {
  const [isMyFollowersClicked, setMyFollowersClick] = useState(false);
  const [newComment, setComment] = useState('');

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

  return (
    <>
      <div className="font-fira py-4 px-4 md:px-8 bg-slate-100">
        <div className="userPageText md:my-6 text-gray-600">
          <img
            className=" rounded-full inline-block w-28 md:w-40"
            src="/billie.webp"
            alt=""
          />
          <p className="py-2 text-3xl">Hello {props.userName}</p>
          <p className="text-lg">{props.email}</p>
        </div>
        <button onClick={handleSignOut}>Sign Out</button>
        {!isMyFollowersClicked ? (
          <div>
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
                <button className="w-[25%] bg-orange-500 text-white border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg px-2 py-1 focus:bg-orange-500">
                  Edit
                </button>
              </div>

              <form className="grid grid-cols-1">
                <label htmlFor="linkedIn">LinkedIn</label>
                <input
                  className="rounded m-1"
                  type="text"
                  name=""
                  placeholder="LinkedIn"
                  id="linkedIn"
                />
                <label htmlFor="github">GitHub</label>
                <input
                  className="rounded m-1"
                  type="text"
                  name=""
                  placeholder="GitHub"
                  id="github"
                />{' '}
                <label htmlFor="facebook">Facebook</label>
                <input
                  className="rounded m-1"
                  type="text"
                  name=""
                  placeholder="Facebook"
                  id="facebook"
                />{' '}
                <label htmlFor="twitter">Twitter</label>
                <input
                  className="rounded m-1"
                  type="text"
                  name=""
                  placeholder="Twitter"
                  id="twitter"
                />{' '}
                <label htmlFor="instagram">Instagram</label>
                <input
                  className="rounded m-1"
                  type="text"
                  name=""
                  placeholder="Instagram"
                  id="instagram"
                />{' '}
                <label htmlFor="website">Website</label>
                <input
                  className="rounded m-1"
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
                <button className="w-[25%] bg-orange-500 text-white border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg px-2 py-1 focus:bg-orange-500">
                  Edit
                </button>
              </div>
              <form className="grid grid-cols-1">
                <label htmlFor="education">Highest Education</label>
                <input
                  className="rounded m-1"
                  type="text"
                  name=""
                  placeholder="Graduation"
                  id="graduation"
                />
                <label htmlFor="college">What do you do currently?</label>
                <input
                  className="rounded m-1"
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
                <button className="w-[25%] bg-orange-500 text-white border-none hover:bg-orange-400 hover:text-gray-100 rounded-lg px-2 py-1 focus:bg-orange-500">
                  Change
                </button>
              </div>
              <form>
                <label htmlFor="password">Password</label>
                <input
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
