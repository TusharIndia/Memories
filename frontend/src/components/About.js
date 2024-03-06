import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let nav = useNavigate();

  const handleclikc = () =>{
    nav('/contact');
  }

  return (
    <div>
    <div
      className="bg-[url('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-443446.jpg&fm=jpg')] bg-cover bg-no-repeat h-[60vh] shadow-2xl font-semibold flex justify-center items-center"
    >
      <p className="text-white text-center text-5xl">About us</p>
    </div>

    <div className="my-14 flex flex-col items-center space-y-2">
      <p className="text-xl text-gray-700">Breakthrough to Excellence</p>
      <p className="text-6xl font-bold">
        Next Generation <span className="italic font-normal">Leadership</span>
      </p>
      <p className="text-6xl">-</p>
    </div>

    <div
      className="section1 flex flex-col 2xl:flex-row px-10 bg-white my-10 h-fit mx-10"
    >
      <img
        src="https://m.media-amazon.com/images/I/71FkBTHZrDL.jpg"
        alt=""
        className="w-[60vw] self-center h-[60vh]"
      />
      <div
        className="text self-center bg-white w-full space-y-5 2xl:p-20 py-10 flex flex-col items-center h-fit"
      >
        <h1 className="font-bold text-center text-3xl underline">Our Services</h1>
        <p className="2xl:my-2 2xl:w-fit 2xl:text-2xl 2xl:px-10 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          error a, explicabo exercitationem labore excepturi veritatis
          sapiente provident animi, eos libero architecto ipsa eligendi
          accusantium, consequatur mollitia eveniet. Cum omnis, minima in
          ipsum tenetur delectus voluptatibus! Amet perspiciatis voluptas vel!
          Expedita, minima. Cumque deserunt odit, commodi animi totam harum
          iure veniam id natus ducimus. Laboriosam quam illo accusamus
          consequuntur labore aliquid ratione voluptatem distinctio at! Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          eligendi assumenda recusandae eius corrupti odit atque dicta
          reprehenderit impedit cumque. Dignissimos nihil ipsum ab voluptatem
          nesciunt nobis in facere explicabo facilis! Harum, placeat eligendi
          assumenda dolores voluptate doloribus quasi cum ab commodi, ex
          dolore quis quod possimus nulla, ipsum architecto. Tempora veritatis
          illum sapiente quaerat quidem totam asperiores sint voluptatem
          voluptatibus odit, blanditiis sequi fugit, laudantium et est eius,
          animi nam doloremque architecto voluptas dolorem iusto!
        </p>
      </div>
    </div>

    <div
      className="section1 flex flex-col 2xl:flex-row px-10 bg-white my-10 h-fit mx-10"
    >
      <div
        className="text self-center bg-white w-full space-y-5 2xl:p-20 py-10 flex flex-col items-center h-fit order-1 2xl:order-0"
      >
        <h1 className="font-bold text-center text-3xl underline">Our History</h1>
        <p className="2xl:my-2 2xl:w-fit 2xl:text-2xl 2xl:px-10 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          error a, explicabo exercitationem labore excepturi veritatis
          sapiente provident animi, eos libero architecto ipsa eligendi
          accusantium, consequatur mollitia eveniet. Cum omnis, minima in
          ipsum tenetur delectus voluptatibus! Amet perspiciatis voluptas vel!
          Expedita, minima. Cumque deserunt odit, commodi animi totam harum
          iure veniam id natus ducimus. Laboriosam quam illo accusamus
          consequuntur labore aliquid ratione voluptatem distinctio at! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempora
          cumque iusto unde quisquam debitis eum animi doloribus perferendis
          iste soluta incidunt quibusdam illum vitae, laudantium adipisci nemo
          quis exercitationem, sequi amet nihil. Obcaecati aliquid sunt
          debitis molestias. Velit aut soluta molestias quod impedit
          laudantium asperiores eos laborum et nulla. Illum incidunt, nulla
          nam ipsa alias ratione tenetur ea quis ullam exercitationem est
          nostrum facilis ex voluptas cumque architecto error sed voluptates
          nihil reprehenderit quam atque quas quaerat.
        </p>
      </div>
      <img
        src="https://plus.unsplash.com/premium_photo-1687382112682-7739192a1ac6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-[60vw] self-center h-[60vh] 2xl:order-2"
      />
    </div>

    <div
      className="section1 flex flex-col 2xl:flex-row px-10 bg-white my-10 h-fit mx-10"
    >
      <img
        src="https://images.unsplash.com/photo-1532387482281-c56ef57652ec?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-[60vw] self-center h-[60vh]"
      />
      <div
        className="text self-center bg-white w-full space-y-5 2xl:p-20 py-10 flex flex-col items-center h-fit"
      >
        <h1 className="font-bold text-center text-3xl underline">Our Features</h1>

        <p className="2xl:my-2 2xl:w-fit 2xl:text-2xl 2xl:px-10 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          error a, explicabo exercitationem labore excepturi veritatis
          sapiente provident animi, eos libero architecto ipsa eligendi
          accusantium, consequatur mollitia eveniet. Cum omnis, minima in
          ipsum tenetur delectus voluptatibus! Amet perspiciatis voluptas vel!
          Expedita, minima. Cumque deserunt odit, commodi animi totam harum
          iure veniam id natus ducimus. Laboriosam quam illo accusamus
          consequuntur labore aliquid ratione voluptatem distinctio at! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam beatae,
          in et veniam temporibus sequi mollitia modi provident consequatur
          autem nihil aspernatur delectus minus placeat magnam ipsam iure
          nostrum dolor hic eaque quae totam illo? Minus, quaerat incidunt
          voluptates veritatis porro blanditiis amet iusto! Sunt voluptas
          voluptatum itaque aut recusandae earum! Inventore aliquam iste harum
          fuga deleniti asperiores accusantium nobis autem sapiente tenetur
          neque animi cum, nam consequatur perspiciatis adipisci corporis amet
          porro? Suscipit, consequuntur at.
        </p>
      </div>
    </div>

    <div
      className="hidden xl:flex mt-12 bg-[url('https://img.freepik.com/free-vector/seamless-gray-halftone-pattern-white-background_1409-1691.jpg')] bg-cover h-[60vh] flex flex-col items-center justify-center space-y-5"
    >
      <h1 className="font-semibold text-5xl">
        We Always Try To UnderStand Users Expectation
      </h1>
      <div className="flex flex-col space-y-10">
        <p className="text-gray-500 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Have any
          question about us?
        </p>
        <p className="bg-blue-400 p-3 w-fit self-center text-white cursor-pointer" onClick={handleclikc}>Contact us</p>
      </div>
    </div>
  </div>
  );
};

export default About;
