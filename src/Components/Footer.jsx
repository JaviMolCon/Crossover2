import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white h-72 ">
      <div className=" flex items-center justify-center content-center ">
        <ul className="w-1/5">
          <img
            className="mt-12 ml-20"
            src="src\assets\Place Your Logo Here (Double Click to Edit).png"
            alt="Logo"
          />{" "}
        </ul>
        <ul className="w-1/5 mt-12">
          <li>ABOUT</li>
          <li>History</li>
          <li>Bonds</li>
        </ul>
        <ul className="w-1/5 mt-12">
          <li>HELP</li>
          <li>Legal Info</li>
          <li>Help and Support</li>
        </ul>
        <ul className="w-1/5 mt-12">
          <li>INFO</li>
          <li>Blog</li>
          <li>News</li>
        </ul>
        <ul className="w-1/5 mt-12">
          <li className="flex whitespace-nowrap">
            <img
              src="src\assets\Instagram.png"
              alt="Instagramm"
              className="mr-4"
            />{" "}
            <img src="src\assets\Facebook.png" alt="Facebook" />
          </li>
          <li>
            <textarea
              className="border border-white border-t-0 border-l-0 border-r-0 border-b-1 bg-black h-7 mt-4 "
              name="Subscribe"
              id="Subscribe"
              placeholder="Subscribe"
              maxlength="60"></textarea>
          </li>
        </ul>
      </div>
      <div className=" flex justify-evenly mt-12">
        <p> info@blockcoin.com </p>
        <p> +34 69 1337 0420 </p>
        <p> Blockgame S.A </p>
        <p> © 2021 Blockcoin. All right reserved </p>
      </div>
    </div>
  );
};

export default Footer;
