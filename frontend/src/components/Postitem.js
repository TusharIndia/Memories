import React, { useContext, useEffect, useState } from "react";
import postContext from "../context/post/postContext";
import { jwtDecode } from "jwt-decode";
import Card from "./Card";

const Postitem = (props) => {
  const { title, description, pict, like } =
    props.ppost;
    const [pst,setPst] = useState(props.ppost);
    const [showMod,setshowMod] = useState(false);
    
  const pop = jwtDecode(localStorage.getItem("token"));
  const context = useContext(postContext);
  const { DeletePost, LikePost } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      // console.log(pop.user.id);
      for (let index = 0; index < like.length; index++) {
        if (like[index].user_id === pop.user.id) {
          document
            .getElementById("lke" + props.ppost._id)
            .classList.add("fa-solid");
        }
      }
    }
  });

  const onchange = () => {
    DeletePost(props.ppost._id);
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
    setPst(pl);
    setshowMod(true);
  };


  return (
    <>
      {showMod && <Card post={pst} showMod={showMod} setshowMod={setshowMod} ></Card>}
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={pict} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
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
          {showMod && <Card post={pst} showMod={showMod} setshowMod={setshowMod}></Card>}

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
