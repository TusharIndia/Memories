import React, { useContext, useState, useEffect, useRef } from "react";
import postContext from "../context/post/postContext";
import Postitem from "./Postitem";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const context = useContext(postContext);
  const { posts, Getpost, editPost } = context;
  const nav = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const ref = useRef(null);
  const ref2 = useRef(null);
  const [post, setPost] = useState({
    id: "",
    etitle: "",
    edescription: "",
    eisPublic: false,
    epict: "",
    ebackgroundImg: "",
  });

  const updatePost = (currentPost) => {
    // console.log(ref.current.click())
    ref.current.click();
    setPost({
      id: currentPost._id,
      etitle: currentPost.title,
      edescription: currentPost.description,
      eisPublic: currentPost.isPublic,
      epict: currentPost.pict,
      ebackgroundImg: currentPost.backgroundImg,
    });
    // console.log(currentPost)
    // ref.show();
  };

  const handleclick = (e) => {
    console.log("Post is Updated...");
    editPost(
      post.id,
      post.etitle,
      post.edescription,
      post.eisPublic,
      post.epict,
      post.ebackgroundImg
    );
    ref2.current.click();
  };

  const onchange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleclikc = () => {
    nav("/addpost");
  };

  useEffect(() => {
    if(localStorage.getItem('token')){
      Getpost();
    }else{
      nav('/login')
    }
  });

  return (
    <>
      <button
        ref={ref}
        onClick={() => setIsModalOpen(true)}
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        type="button"
      ></button>
      {isModalOpen && ( 
      <div
        key="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Change Post
              </h3>
              <button
                type="button"
                ref={ref2}
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="etitle"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="etitle"
                    id="etitle"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Title"
                    value={post.etitle}
                    onChange={onchange}
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="edescription"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="edescription"
                    name="edescription"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write description here"
                    value={post.edescription}
                    onChange={onchange}
                  ></textarea>
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="eisPublic"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    isPublic
                  </label>
                  <input
                    type="text"
                    name="eisPublic"
                    id="eisPublic"
                    value={post.eisPublic}
                    onChange={onchange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="epict"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    pict
                  </label>
                  <input
                    type="text"
                    name="epict"
                    id="epict"
                    value={post.epict}
                    onChange={onchange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="ebackgroundImg"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    BackgroundImg
                  </label>
                  <input
                    type="text"
                    name="ebackgroundImg"
                    id="ebackgroundImg"
                    value={post.ebackgroundImg}
                    onChange={onchange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                  />
                </div>
              </div>
              <button
                type="submit"
                onClick={handleclick}
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update post
              </button>
            </form>
          </div>
        </div>
      </div>)}

      <div>
        <div className="flex flex-col items-center my-5 space-y-3 mb-20">
          <h2 className="md:text-6xl text-center text-3xl">
            All Posts Related to User
          </h2>
          <div className="text-center">
            {posts.length === 0 ? "No Posts are present" : ""}
          </div>
          <div className="">
            <div className="grid md:grid-cols-3 gap-10 sm:grid-cols-2">
              {posts.map((post) => {
                return (
                  <Postitem
                    key={post._id}
                    ppost={post}
                    updatePost={updatePost}
                  />
                );
              })}
            </div>
          </div>
        </div>
          <div className="flex flex-col justify-center items-center m-10 space-y-10">
            <i
              className="fa-solid fa-circle-plus fa-2xl animate-bounce hover:animate-ping"
              onClick={handleclikc}
            ></i>
          </div>
      </div>


      
    </>
  );
};

export default Post;
