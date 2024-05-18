import React from "react";
// import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa";


const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/dipti-birajdar-b03130207/">
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="https://www.youtube.com/@diptibirajdar6809">
          <FaYoutube />
        </a>
      </div>
      <div>
        <a href="https://github.com/diptibirajdar.com">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/profile.php?id=100073397280976.com">
          <FaFacebookF />
        </a>
      </div>
      {/* <div>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
      </div> */}
      {/* <div>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
      </div> */}
    </div>
  );
};

export default SocialMedia;