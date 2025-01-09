
import React from 'react'
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin, } from 'react-icons/bs'
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer>
     <p>
       Designed and Developed by <span className='spantag'>Sharid Ansari</span>
      </p>
      {/* d-flex mt-5 gap-5 fs-5 text-2xl */}
      <div>
                  <section className='icons'>
                    <Link className='light' to="https://www.facebook.com/profile.php?id=100073965983223">
                      <BsFacebook />
                    </Link>
                    <Link className='light' to="https://www.instagram.com/sharidansari4444/?next=%2F">

                      <BsInstagram />
                    </Link>
                    <Link className='light' to="https://www.linkedin.com/in/sharidansari/">
                      <BsLinkedin />
                    </Link>
                    <Link className='light' to="https://x.com/sharid_ansari">
                      <FaXTwitter />
                    </Link>
                  </section>
                </div>
   
    </footer>
  )
}

export default Footer