import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let nav = useNavigate();

  const handleclikc = () => {
    nav("/contact");
  };

  return (
    <div>
      <div className="bg-[url('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-443446.jpg&fm=jpg')] bg-cover bg-no-repeat h-[60vh] shadow-2xl font-semibold flex justify-center items-center">
        <p className="text-white text-center text-5xl">About us</p>
      </div>

      <div className="my-14 flex flex-col items-center space-y-2">
        <p className="text-xl text-gray-700">Breakthrough to Excellence</p>
        <p className="text-6xl font-bold">
          Next Generation <span className="italic font-normal">Leadership</span>
        </p>
        <p className="text-6xl">-</p>
      </div>

      <div className="section1 flex flex-col 2xl:flex-row px-10 bg-white my-10 h-fit mx-10">
        <img
          src="https://cdn.dribbble.com/users/473297/screenshots/1533865/socialmedia.gif"
          alt=""
          className="w-[60vw] self-center h-[60vh]"
        />
        <div className="text self-center bg-white w-full space-y-5 2xl:p-20 py-10 flex flex-col items-center h-fit">
          <h1 className="font-bold text-center text-5xl underline italic text-green-900">
            Our Services
          </h1>
          <p className="2xl:my-2 2xl:w-fit 2xl:text-2xl 2xl:px-10 text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            error a, explicabo exercitationem labore excepturi veritatis
            sapiente provident animi, eos libero architecto ipsa eligendi
            accusantium, consequatur mollitia eveniet. Cum omnis, minima in
            ipsum tenetur delectus voluptatibus! Amet perspiciatis voluptas vel!
            Expedita, minimam, placeat eligendi assumenda dolores voluptate
            doloribus quasi cum ab commodi, ex dolore quis quod possimus nulla,
            ipsum architecto. Tempora veritatis illum sapiente quaerat quidem
            totam asperiores sint voluptatem voluptatibus odit, blanditiis sequi
            fugit, laudantium et est eius, animi nam doloremque architecto
            voluptas dolorem iusto!
          </p>
        </div>
      </div>

      <div className="section1 flex flex-col 2xl:flex-row px-10 bg-white my-10 h-fit mx-10">
        <div className="text self-center bg-white w-full space-y-5 2xl:p-20 py-10 flex flex-col items-center h-fit order-1 2xl:order-0">
          <h1 className="font-bold text-center text-5xl underline italic text-green-900">
            Our History
          </h1>
          <p className="2xl:my-2 2xl:w-fit 2xl:text-2xl 2xl:px-10 text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            error a, explicabo exercitationem labore excepturi veritatis
            sapiente provident animi, eos libero architecto ipsa eligendi
            accusantium, consequatur mollitia eveniet. Cum omnis, minima in
            ipsum tenetur delectus vol aliquid sunt debitis molestias. Velit aut
            soluta molestias quod impedit laudantium asperiores eos laborum et
            nulla. Illum incidunt, nulla nam ipsa alias ratione tenetur ea quis
            ullam exercitationem est nostrum facilis ex voluptas cumque
            architecto error sed voluptates nihil reprehenderit quam atque quas
            quaerat.
          </p>
        </div>
        <img
          src="https://i.gifer.com/OjY.gif"
          alt=""
          className="w-[60vw] self-center h-[60vh] 2xl:order-2"
        />
      </div>

      <div className="section1 flex flex-col 2xl:flex-row px-10 bg-white my-10 h-fit mx-10">
        <img
          src="https://i.pinimg.com/originals/21/cb/d6/21cbd64787791b5cfd6b31920185ad5e.gif"
          alt=""
          className="w-[60vw] self-center h-[60vh]"
        />
        <div className="text self-center bg-white w-full space-y-5 2xl:p-20 py-10 flex flex-col items-center h-fit">
          <h1 className="font-bold text-center text-5xl underline italic text-green-900">
            Our Features
          </h1>

          <p className="2xl:my-2 2xl:w-fit 2xl:text-2xl 2xl:px-10 text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            error a, explicabo exercitationem labore excepturi veritatis
            sapiente provident animi, eos libero architecto ipsa eligendi
            accusantium, consequatur mollitia eveniet. Cum omnis, minima in
            ipsum tenetur delectus voluptatibus! Amet perspiciatis voluptas vel!
            Expedita, minima. magnam ipsam iure nostrum dolor hic eaque quae
            totam illo? Minus, quaerat incidunt voluptates veritatis porro
            blanditiis amet iusto! Sunt voluptas voluptatum itaque aut
            recusandae earum! Inventore aliquam iste harum fuga deleniti
            asperiores accusantium nobis autem sapiente tenetur neque animi cum,
            nam consequatur perspiciatis adipisci corporis amet porro? Suscipit,
            consequuntur at.
          </p>
        </div>
      </div>

      <div className="hidden xl:flex mt-12 bg-[url('https://img.freepik.com/free-vector/seamless-gray-halftone-pattern-white-background_1409-1691.jpg')] bg-cover h-[60vh] flex flex-col items-center justify-center space-y-5">
        <h1 className="font-semibold text-5xl">
          We Always Try To UnderStand Users Expectation
        </h1>
        <div className="flex flex-col space-y-10">
          <p className="text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Have any
            question about us?
          </p>
          <p
            className="bg-blue-400 p-3 w-fit self-center text-white cursor-pointer"
            onClick={handleclikc}
          >
            Contact us
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
