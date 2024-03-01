import React, { useState } from "react";
import postContext from "./postContext";

const PostState1 = (props) => {
  const host = "http://localhost:5000";
  const s1 = [];
  const s2 = [];
  let authToken = ""
  if(localStorage.getItem('token')){
    authToken = localStorage.getItem('token')
  }
  const [pposts, setpPosts] = useState(s1);
  const [posts, setPosts] = useState(s2);
  
  const Getpost = async () => {
    //API Call
    const url = `${host}/api/posts/fetchuserpost`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    const json = await response.json();
    // console.log(json)
    setPosts(json);
  };

  const Getppost = async () => {
    //API Call
    const url = `${host}/api/posts/fetchppost`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setpPosts(json);
  };
  

  const Addpost = async(title,description,pict,backgroundImg,isPublic) =>{
    //API Call
    const url = `${host}/api/posts/addpost`;
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({title,description,pict,backgroundImg,isPublic}), 
    });
    const post = await response.json();
    setPosts(posts.concat(post));
    if(post.isPublic===true){
      setpPosts(pposts.concat(post))
      console.log('Public Post Created')
    }
    else{
      console.log('Private Post Created')
    }
  }

  const DeletePost = async(id) =>{
    const url = `${host}/api/posts/Deletepost/${id}`;
    const response = await fetch(url,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    })
    console.log("Deleted a post with "+id);
    // console.log(response);
    const newposts = posts.filter((post)=>{return(post._id!==id)});
    const newpposts = pposts.filter((post)=>{return(post._id!==id)});
    setPosts(newposts);
    setpPosts(newpposts);
  }
  const editPost = async(id,title,description,isPublic,pict,backgroundImg) =>{
    //API Call
    const url = `${host}/api/posts/Updatepost/${id}`;
    const response = await fetch(url, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken
      },
      body: JSON.stringify({title,description,isPublic,pict,backgroundImg}), 
    });
    // console.log(response);    
    let newposts = JSON.parse(JSON.stringify(posts));
    //Client Side
    for (let index = 0; index < newposts.length; index++) {
      const element = newposts[index];
      if(element._id===id){
        newposts[index].title = title;
        newposts[index].description = description;
        newposts[index].isPublic = isPublic;
        newposts[index].pict = pict;
        newposts[index].backgroundImg = backgroundImg;
        break;
      }
    }
    setPosts(newposts);
  }

  const LikePost = async(id) =>{
    const url = `${host}/api/posts/likedpost/${id}`;
    // console.log(url);
    const response = await fetch(url,{
      method: "PUT",
      headers: {
        "auth-token": authToken,
      },
    })
    let obj = await response.json();
    return obj;
  }

  const CommentPost = async(id,message) =>{
    const url = `${host}/api/posts/commentpost/${id}`;
    // console.log(url);
    const response = await fetch(url,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({comment: message}), 
    })
    let obj = await response.json();
    return obj;
  }

  return (
    <postContext.Provider value={{ pposts, Getppost,posts,Getpost,Addpost,DeletePost,LikePost,editPost,CommentPost }}>
      {props.children}
    </postContext.Provider>
  );
};

export default PostState1;
