import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Post from "./components/Post";
import PublicPost from "./components/PublicPost";
import Home from "./components/Home";
import Addpost from "./components/Addpost"
import Card from "./components/Card";
import Footer from './components/Footer'
import PostState1 from "./context/post/PostState1"
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <PostState1>

        <Router>
          <Navbar />
          {/* <Alert /> */}
          <div className="">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/publicpost" element={<PublicPost />}></Route>
              <Route exact path="/about" element=<About />></Route>
              <Route exact path="/post" element=<Post />></Route>
              <Route exact path="/addpost" element=<Addpost />></Route>
              <Route exact path="/login" element=<Login />></Route>
              <Route exact path="/signup" element=<Signup />></Route>
              <Route exact path="/card" element=<Card/>></Route>
            </Routes>
          </div>
          <Footer/>
        </Router>{" "}
      </PostState1>
      
    </>
  );
}

export default App;
