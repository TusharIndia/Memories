import React, { useContext, useEffect } from "react";
import postContext from "../context/post/postContext";
import Postitem from "./Postitem";
import { useNavigate } from "react-router-dom";

const PublicPost = () => {
  const context = useContext(postContext);
  const { pposts, Getppost } = context;
  const red = useNavigate();

  const handleclikc = () => {
    red("/addpost");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      Getppost();
    } else {
      red("/login");
    }
  });

  const updatePost = (currentPost) => {
    red("/post");
  };

  return (
    <div>
      <div className="flex flex-col items-center my-5 space-y-3">
        <h2 className="text-6xl text-center ">All Public Posts </h2>
        <div className="text-center">
          {pposts.length === 0 ? "No Posts are present" : ""}
        </div>
        <div className="">
          <div className="grid md:grid-cols-3 gap-10 sm:grid-cols-2 mb-20">
            {pposts.map((ppost) => {
              return (
                <div className="">
                  <Postitem
                    key={ppost._id}
                    ppost={ppost}
                    updatePost={updatePost}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-col justify-center items-center m-10 space-y-10">
            <i
              className="fa-solid fa-circle-plus fa-2xl animate-bounce hover:animate-ping"
              onClick={handleclikc}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicPost;
