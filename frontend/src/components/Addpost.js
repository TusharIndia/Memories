import React, { useContext, useEffect, useState } from "react";
import postContext from "../context/post/postContext";
import { useNavigate } from "react-router-dom";

const Addpost = () => {
  const context = useContext(postContext);
  const { Addpost } = context;
  const nav = useNavigate();
  const [ post, setPost ] = useState({
    title: "",
    description: "",
    pict: "",
    backgroundImg: "",
    isPublic: false
  });

  useEffect(() =>{
    if(!localStorage.getItem('token')){
      nav('/login')
    }
  });

  const handleclk = (e) => {
    e.preventDefault();
    Addpost(
      post.title,
      post.description,
      post.pict,
      post.backgroundImg,
      post.isPublic
    );
    setPost({
      title: "",
      description: "",
      pict: "",
      backgroundImg: "",
      isPublic: false
    });
    nav('/publicpost')
  };

  const onchange = async(e) => {
    if (e.target.name !== "isPublic") {
      setPost({ ...post, [e.target.name]: e.target.value });
    } else {
      setPost({ ...post, isPublic: e.target.checked });
    }
  };

  return (
    <div>
      <div className="w-[100vw]">
        <img src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-785433,resizemode-75,msid-106895584/news/new-updates/ayodhya-ram-mandir-hd-photos-heres-how-to-download-share-on-whatsapp-instagram-facebook.jpg" alt="" className="w-[100vw] h-[80vh]"/>
      </div>
      <div className="heading text-center my-2 text-3xl">
        Add a Post
      </div>
      <form className="flex flex-col space-y-3 text-center my-5">
      <div className="flex flex-col"> 
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" placeholder="Enter your title here" className="hover:border-black border-2 text-center self-center w-[90vw]" onChange={onchange} value={post.title}/>
      </div>
      <div className="flex flex-col"> 
        <label htmlFor="description">Description:</label>
        <input type="text" name="description" id="description" placeholder="Enter your description here" className="hover:border-black border-2 text-center self-center w-[90vw]" onChange={onchange} value={post.description}/>
      </div>
      <div className="flex flex-col"> 
        <label htmlFor="pict">Picture:</label>
        <input type="text" name="pict" id="pict" placeholder="Place a cute gif URL here for pretty cards" 
        className="hover:border-black border-2 text-center self-center w-[90vw]" onChange={onchange} value={post.pict}/>
      </div>
      <div className="flex flex-col"> 
        <label htmlFor="backgroundImg">Background Image:</label>
        <input type="text" name="backgroundImg" placeholder="Enter your Background Img URL here" className="hover:border-black border-2 text-center self-center w-[90vw]" id="backgroundImg" value={post.backgroundImg} onChange={onchange}/>
      </div>
      <div className="flex flex-row justify-center space-x-6"> 
        <label htmlFor="isPublic">Public:</label>
        <input type="checkbox" name="isPublic" id="isPublic" className="self-center" value={post.isPublic} onChange={onchange}/>
        </div>
        <button type="submit" className='px-3 py-2 rounded-2xl bg-yellow-950 w-fit text-white self-center' onClick={handleclk}>Add Data</button>
      </form>
    </div>
  );
};

export default Addpost;
