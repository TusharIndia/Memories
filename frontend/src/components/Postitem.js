import React, { useContext, useEffect, useState } from "react";
import postContext from "../context/post/postContext";
import { jwtDecode } from "jwt-decode";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Postitem = (props) => {
  const { title, description, pict, like } = props.ppost;
  const nav = useNavigate();
  const pop = jwtDecode(localStorage.getItem("token"));
  const context = useContext(postContext);
  const { DeletePost, LikePost } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      for (let index = 0; index < like.length; index++) {
        if (like[index].user_id === pop.user.id) {
          document
            .getElementById("lke" + props.ppost._id)
            .classList.add("fa-solid");
        }
      }
    }
  });

  const onchange = async() => {
    await DeletePost(props.ppost._id);
  };
  const handleclk = async () => {
    let lk = await LikePost(props.ppost._id);
    if (
      Number(document.getElementById("lke" + props.ppost._id).innerText) !==
      lk.totalLikes
    ) {
      document.getElementById("lke" + props.ppost._id).innerText =
        lk.totalLikes;
    } else {
      alert("Already Liked");
    }
  };

  const handlexpnd = (pl) => {
    nav("/card",{ state: {post: pl} })
  };


  return (
    <>
      {/* {showMod && <Card post={pst} showMod={showMod} setshowMod={setshowMod} ></Card>} */}
      <div className="rounded overflow-hidden shadow-lg h-[60vh] md:w-[25vw] w-[50vw]">
        <img className="w-[50vw] md:w-[25vw] h-[40vh]" src={pict} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title.substring(0,5)}</div>
          {description.length>6?(
          <p className="text-gray-700 text-base">{description.substring(0, 6)}...</p>
          ):(
          <p className="text-gray-700 text-base">{description}</p>
          )}
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-evenly">
          <i
            className="fa-regular fa-heart cursor-pointer"
            id={"lke" + props.ppost._id}
            onClick={handleclk}
          >
            {like.length}
          </i>
          <i
            className="fa-solid fa-user-pen mx-2 cursor-pointer "
            onClick={() => {
              props.updatePost(props.ppost);
            }}
          ></i>
          <i
            className="fa-solid fa-expand cursor-pointer toggleModal"
            onClick={() => {
              handlexpnd(props.ppost);
            }}
          ></i>
          <i
            className="fa-solid fa-trash mx-2 cursor-pointer"
            onClick={onchange}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Postitem;
