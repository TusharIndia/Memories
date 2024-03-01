import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
// import dawd from '../static/dawd.jpg'

const Home = () => {

  const nav = useNavigate();
  const funv = () => {
    nav('/about')
  }  

  return (
    <div>
      <div
      className="bg-[url('/static/adad.jpg')] bg-cover h-[80vh] w-full flex justify-center"
    >
      <div className="text-6xl text-white self-center hover:animate-ping">
        Memories
      </div>
    </div>

    <div
      className="section1 flex flex-col lg:flex-row bg-[#F2F2F2] my-2 items-center align-center"
    >
      <div
        className="text mx-10 lg:bg-[#F2F2F2] bg-white w-full space-y-5 p-4 flex flex-col items-center"
      >
        <p className="text-3xl lg:text-4xl font-semibold">About Memories</p>
        <p className="my-2 w-fit text-lg text-center">
          Project made in MERN Stack in order to save your pretty
          memories.Memories, like whispers from the past, paint vivid pictures
          in our minds. They hold the joy of laughter, the warmth of loved ones,
          and the lessons learned. Though fleeting moments, their echoes shape
          who we are and guide our steps forward.
        </p>
        <button className="bg-blue-500 text-white p-2" onClick={funv}>Learn More</button>
      </div>
      <img src='https://images.unsplash.com/photo-1535426797422-ccf85c994fbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" className="w-[40vw] self-center mx-2" />
    </div>

    <div className="section2">
      <div className="text-center my-10 text-3xl font-semibold">
        Features We Have:
      </div>
      <div
        className="h-[120vh] lg:h-[60vh] flex flex-row flex-wrap my-10 items-center justify-center"
      >
        <div
          className="parts flex flex-col h-[50vh] w-[40vw] lg:w-[20vw] items-center mx-4 space-y-2"
        >
          <img
            src="https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18106.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1709078400&semt=sph"
            className="w-[40vw] h-[33vh] lg:w-[20vw]"
            alt=""
          />
          <div className="p-2 w-fit space-y-3 self-center h-[17vh]">
            <h1 className="text-2xl font-semibold md:text-3xl">Secured System</h1>
            <p className="w-[35vw] text-sm lg:w-[18vw] md:text-lg h-[8vh] 2xl:h-[10vh] lg:h-[14vh]">
              Passwords are stored in a manner that only the account owner can
              open it.
            </p>
            <Link to="/login" className="text-blue-600 text-sm lg:text-lg">Login Now </Link>
          </div>
        </div>
        <div
          className="parts flex flex-col h-[50vh] w-[40vw] lg:w-[20vw] items-center mx-4 space-y-2"
        >
          <img
            src="https://cdn.pixabay.com/photo/2016/05/20/17/17/social-media-1405601_640.png"
            className="w-[40vw] h-[33vh] lg:w-[20vw]"
            alt=""
          />
          <div className="p-2 w-fit space-y-3 self-center h-[17vh]">
            <h1 className="text-2xl font-semibold md:text-3xl">Public Posts</h1>
            <p className="w-[35vw] text-sm lg:w-[18vw] md:text-lg h-[8vh] 2xl:h-[10vh] lg:h-[14vh]">
              You can post the picture in any form it can be private or public
              as you want.
            </p>
            <Link to="/addpost" className="text-blue-600 text-sm lg:text-lg"
              >Create Post </Link>
          </div>
        </div>
        <div
          className="parts flex flex-col h-[50vh] w-[40vw] lg:w-[20vw] items-center mx-4 space-y-2"
        >
          <img
            src="https://c4.wallpaperflare.com/wallpaper/84/851/652/hands-wallpaper-preview.jpg"
            className="w-[40vw] h-[40vh] lg:w-[20vw]"
            alt=""
          />
          <div className="p-2 w-fit space-y-3 self-center h-[17vh]">
            <h1 className="text-2xl font-semibold md:text-3xl">Like Feature</h1>
            <p className="w-[35vw] text-sm lg:w-[18vw] md:text-lg h-[8vh] 2xl:h-[10vh] lg:h-[14vh]">
              If you are logged in as a user you can like any public post or
              even like your private posts.
            </p>
            <Link to="/posts" className="text-blue-600 text-sm lg:text-lg">Posts </Link>
          </div>
        </div>
        <div
          className="parts flex flex-col h-[50vh] w-[40vw] lg:w-[20vw] items-center mx-4 space-y-2"
        >
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Azure-AI-Bloom?wid=406&hei=230&fit=crop"
            className="w-[40vw] h-[40vh] lg:w-[20vw]"
            alt=""
          />
          <div className="p-2 w-fit space-y-3 self-center h-[17vh]">
            <h1 className="text-2xl font-semibold md:text-3xl">Comment Feature</h1>
            <p className="w-[35vw] text-sm lg:w-[18vw] md:text-lg h-[8vh] 2xl:h-[10vh] lg:h-[14vh]">
              Not only you can just like the posts but also can comment on your
              posts, need to be signed in first.
            </p>
            <Link to="/signup" className="text-blue-600 text-sm lg:text-lg">Sign up </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-row items-center space-x-4 m-4">
      <div className="text text-xl">Follow us</div>
      <img
        src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Facebook%202x?scl=1"
        alt=""
        className="w-[5vh]"
      />
      <img
        src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-MSCOM-X-64x64?scl=1"
        alt=""
        className="w-[5vh]"
      />
      <img
        src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/YouTube%202x?scl=1"
        alt=""
        className="w-[5vh]"
      />
    </div>    
    </div>
  )
}

export default Home
