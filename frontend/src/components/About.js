import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let nav = useNavigate();

  const handleclikc = () =>{
    nav('/addpost');
  }

  return (
    <div>
      <div className="h-[40vh] text-4xl bg-[#EDEAE8] flex items-center justify-center">
        <p className="text-black hover:animate-ping">About us</p>
      </div>

      <div className="section1 flex flex-col lg:flex-row bg-[url('https://wallpapercave.com/wp/wp2562877.jpg')] bg-cover bg-white w-[100vw] h-fit lg:h-[90vh] items-center space-y-5">
        <div className="self-center w-fit text-white p-20 space-y-3">
          <p className="description text-lg">
            Welcome to Memories, a dynamic platform designed to capture and
            celebrate life's most precious moments. Memories is your digital
            repository for storing, sharing, and reliving cherished memories,
            all in one place.At Memories, we understand the power of
            reminiscence and the joy it brings. Our mission is to provide users
            with a seamless and intuitive experience to preserve their memories
            and connect with others through shared experiences. Powered by the
            MERN stack (MongoDB, Express.js, React.js, Node.js), Memories offers
            a comprehensive suite of features to enhance your memory-sharing
            journey. Whether it's a heartfelt anecdote, a captivating
            photograph, or a nostalgic video clip, Memories enables you to
            document and organize your memories with ease. But Memories is more
            than just a storage platform. It's a vibrant community where users
            can explore a vast array of public memories shared by others,
            sparking inspiration and fostering connections. Dive into a treasure
            trove of stories, images, and videos, and engage with fellow users
            through likes and comments. Our commitment to user experience is at
            the heart of everything we do. Memories is designed to be
            accessible, user-friendly, and responsive across all devices,
            ensuring that your memories are always within reach. Memories was
            brought to life by a passionate team of developers who share a love
            for technology and storytelling. We're dedicated to continuously
            improving Memories and introducing new features to empower our users
            to preserve, share, and celebrate the moments that define their
            lives. Thank you for choosing Memories to be a part of your journey.
            Let's create and cherish memories together.
          </p>
        </div>
      </div>
      <div className="flex flex-col"></div>
      <div className="images flex flex-col lg:flex-row w-[100vw] h-full">
        <div className="bg-[url('https://assets.vogue.com/photos/58916276b482c0ea0e4d7ea4/master/pass/00-polaroids.jpg')] bg-no-repeat h-[45vh] w-[100vw] bg-cover text-white">
          <p className="text-4xl flex justify-center items-center h-full">
            Store your pretty Memories
          </p>
        </div>
        <div className="bg-[url('https://marketplace.canva.com/EAFGTPGm0so/1/0/900w/canva-gray-minimalistic-photo-collage-polaroid-instagram-story-dCAsQ_H2s8Q.jpg')] bg-no-repeat h-[45vh] w-[100vw] bg-cover">
          <p className="text-4xl flex justify-center items-center h-full text-white">
            See and Like Other's Memories
          </p>
        </div>
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2-wR4qSLP0KvTfBFI2s0E9VhKdrZLc0uVA&usqp=CAU')] bg-no-repeat h-[45vh] w-[100vw] bg-cover">
          <p className="text-4xl flex justify-center items-center h-full text-white">
            Comment on Other's Memories
          </p>
        </div>
        <div className="bg-[url('https://e0.pxfuel.com/wallpapers/706/61/desktop-wallpaper-p-o-l-a-r-o-i-d-polaroid.jpg')] bg-no-repeat h-[45vh] w-[100vw] bg-cover">
          <p className="text-4xl flex justify-center items-center h-full text-white">
            Make Memories According to Mood
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center m-10 space-y-10">
        <p className="text-4xl font-semibold">Add A Post</p>
        <i
          className="fa-solid fa-circle-plus fa-2xl animate-bounce hover:animate-ping"
          onClick={handleclikc}
        ></i>
      </div>
    </div>
  );
};

export default About;
