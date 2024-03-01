import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import postContext from "../context/post/postContext";

const Card = (props) => {
  const obj  = (props.post);
  const nav = useNavigate();
  const context = useContext(postContext);
  const { CommentPost } = context;
  const [comment, setcomment] = useState({
    message: "",
  });

  const opo = () => {
    props.setshowMod(false);
    nav('/post')
  };

  const onchange = async (e) => {
    setcomment({ ...comment, [e.target.name]: e.target.value });
  };

  const hndlcmmnt = async () => {
    await CommentPost(obj._id, comment.message);
  };

  return (
    <>
      <div
        id="myModal"
        className="modal open fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
      >
        <div className="modal-content overflow-auto bg-white p-6 rounded shadow-lg h-full w-full">
          <div className="flex justify-between items-center mb-4">
            <button
              id="closeModal"
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
            className={`section1 flex flex-col lg:flex-row bg-${
              obj.backgroundImg
                ? `[url(${obj.backgroundImg})]`
                : '[url("https://gifdb.com/images/high/wacky-dancing-transparent-sticker-g0820fvj97em2r3a.gif")]'
            } bg-no-repeat bg-center bg-white w-[90%] h-fit m-10 items-center space-y-5`}
          >
            <div className="img mx-5">
              <img
                src={obj.pict}
                alt=""
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

          <div id="pop"></div>

          <div className="comments mt-10 bg-[#EDEAE8] p-10 text-yellow-950">
            <p className="text-2xl">Comments : </p>
            <div className="comment-items mx-10 space-y-3 justify-center">
              {props.post.comments.map((commnt) => {
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
                  type="submit"
                  onClick={hndlcmmnt}
                  className="bg-yellow-950 text-white w-fit p-2 rounded self-center"
                >
                  Add Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ):(<h1>hello</h1>)} */}
    </>
  );
};

export default Card;
