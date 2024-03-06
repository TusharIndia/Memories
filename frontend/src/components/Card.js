import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import postContext from "../context/post/postContext";
import { useLocation } from "react-router-dom";

const Card = () => {
  const location = useLocation();
  // console.log(location)
  const nav = useNavigate();
  console.log(location.state)
  const [obj,setObj] = useState(location.state?.post);

  useEffect(()=>{
    if(location.state.post=={}){
      nav('/publicpost')
    }
  });

  const context = useContext(postContext);
  const { CommentPost } = context;
  const [comment, setcomment] = useState({
    message: "",
  });

  const [comments,setcomments] = useState(obj.comments)

  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
      setBackgroundImage(`url(${obj.backgroundImg})`);
  }, []);
  
  const opo = () => {
    nav("/post");
  };

  const onchange = async (e) => {
    setcomment({ ...comment, [e.target.name]: e.target.value });
  };

  const hndlcmmnt = async (e) => {
    try{
      e.preventDefault()
      let ab = await CommentPost(obj._id, comment.message);
      setcomments(ab.post.comments);
      setcomment({message: "",})
    }catch(err){
      console.log(err)
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
      >
        <div className="modal-content overflow-auto bg-white p-6 rounded shadow-lg h-full w-full">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={opo}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`section1 flex flex-col  lg:flex-row bg-no-repeat bg-center bg-white w-[90%] h-fit items-center space-y-5`}
            style={{backgroundImage}}
            id="olo"
          >
            <div className="img mx-5">
              <img
                src={obj.pict}
                alt="No pict"
                className="sm:w-[50vw] self-center align-center"
              />
            </div>
            <div className="self-center w-[45vw] space-y-3">
              <p className="text-3xl text-center font-semibold" id="totle">
                {obj.title}
              </p>
              <p className="description text-lg" id="descc">
                {obj.description}
              </p>
            </div>
          </div>
          {comments && (

          <div className="comments mt-10 bg-[#EDEAE8] p-10 text-yellow-950">
            <p className="text-2xl">Comments : </p>
            <div className="comment-items space-y-3 justify-center">
              {comments.map((commnt) => {
                return (
                  <div className="comment1 flex flex-row flex-wrap justify-start space-x-10">
                    <div className="username text-lg hover:underline cursor-pointer font-semibold self-center">
                      {commnt.username}
                    </div>
                    <div className="commment text-lg self-center">
                      {commnt.body}
                    </div>
                  </div>
                );
              })}
              <form className="flex flex-col space-y-3">
                <textarea
                  name="message"
                  id="message"
                  cols="70"
                  value={comment.message}
                  onChange={onchange}
                  rows="5"
                  placeholder="Add your comment here"
                ></textarea>
                <button
                  onClick={hndlcmmnt}
                  className="bg-yellow-950 text-white w-fit p-2 rounded self-center"
                >
                  Add Comment
                </button>
              </form>
            </div>
          </div>
          )}
        </div>
      </div>
      {/* ):(<h1>hello</h1>)} */}
    </>
  );
};

export default Card;