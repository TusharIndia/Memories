import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
          <div>
      <footer className="bg-[#F2F2F2] text-black px-52 py-10">
        <div className="m-4">
          <div className="flex flex-row justify-between m-4 flex-wrap">
            <div className="flex flex-col space-y-3 mt-5">
              <h6 className="font-semibold">About</h6>
              <p className="w-[40vw]">
                Memories is an initiative to help the you save your memories.
                Memories focuses on nothing it is just made by the owner to
                check whether he is capable to make it or not . It is built
                using different differnt things that include HTML, CSS,
                TailwindCSS, JavaScript, ReactJS, NodeJS, ExpressJS and MongoDB.
              </p>
            </div>

            <div className="flex flex-col space-y-3 mt-5">
              <h6 className="font-semibold">Categories</h6>
              <ul className="footer-links">
                <li><Link to="#" className="hover:underline">C</Link></li>
                <li><Link to="#" className="hover:underline">UI Design</Link></li>
                <li><Link to="#" className="hover:underline">PHP</Link></li>
                <li><Link to="#" className="hover:underline">Java</Link></li>
                <li><Link to="#" className="hover:underline">Android</Link></li>
                <li><Link to="#" className="hover:underline">Templates</Link></li>
              </ul>
            </div>

            <div className="flex flex-col space-y-3 mt-5">
              <h6 className="font-semibold">Quick Links</h6>
              <ul className="footer-links">
                <li><Link to="#" className="hover:underline">About Us</Link></li>
                <li><Link to="#" className="hover:underline">Contact Us</Link></li>
                <li><Link to="#" className="hover:underline">Contribute</Link></li>
                <li><Link to="#" className="hover:underline">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:underline">Sitemap</Link></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <p className="copyright-text text-center">
            Copyright &copy; 2024 All Rights Reserved by
            <Link to="#">Memories</Link>.
          </p>
        </div>
      </footer>
    </div>

    </div>
  )
}

export default Footer
