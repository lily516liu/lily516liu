import React from "react";
import { Link } from "react-router-dom";
import Logo from "../image/logo.svg";
import "../styles/Homepage.css";
import Heart from "../image/icon/icon/heart-outline.svg";
import Faq from "../image/icon/icon/faq-outline.svg";

function Navigation() {
  return (
    <>
      <nav class="flex justify-center border-2 border-gray-500">
        <img src={Logo} alt="Logo" class="h-24 w-96 border-2 border-gray-500" />
        <Link
          to="/lily516liu/attraction"
          class="flex flex-col justify-center text-center w-28 "
        >
          <div>找景點</div>
          <div>ATTRACTION</div>
        </Link>
        <Link
          to="/lily516liu/delicacy"
          class="flex flex-col justify-center text-center w-28"
        >
          <div>找美食</div>
          <div>DELICACY</div>
        </Link>
        <Link
          to="/lily516liu/activity"
          class="flex flex-col justify-center text-center w-28"
        >
          <div>找活動</div>
          <div>ACTIVITY</div>
        </Link>
        <Link
          to="/lily516liu/More"
          class="flex flex-col justify-center text-center w-28"
        >
          <div>探索更多</div>
          <div>MORE</div>
        </Link>
        <Link
          to="/lily516liu"
          class="flex flex-col justify-center text-center w-28"
        >
          <div>首頁</div>
          <div>HOME</div>
        </Link>
        <img src={Heart} alt="heart" />
        <img src={Faq} alt="Faq" />
      </nav>
    </>
  );
}

export default Navigation;
