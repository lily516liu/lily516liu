import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div class="bg-gray-200 flex justify-center items-center h-[70px] w-100%">
        <button class="mr-8">Follow us</button>
        <button class="mr-2">
          <BsFacebook />
        </button>
        <button class="mr-2">
          <BsInstagram />
        </button>
        <button class="mr-8">
          <BsYoutube />
        </button>
        <div>Copyright © 2021 TRAVEL. All rights reserved.</div>
        <button class="ml-8">CH</button>
        <button class="ml-2">EN</button>
        <button class="ml-2">JA</button>
      </div>
    </>
  );
}

export default Footer;
