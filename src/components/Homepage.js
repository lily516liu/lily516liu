import React from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";
import Exploreimg1 from "../image/index_explore/explore_01.jpeg";
import Exploreimg2 from "../image/index_explore/explore_02.jpeg";
import Exploreimg3 from "../image/index_explore/explore_03.jpeg";
import Exploreimg4 from "../image/index_explore/explore_04.jpeg";
import Exploreimg5 from "../image/index_explore/explore_05.jpeg";
import Exploreimg6 from "../image/index_explore/explore_06.jpeg";
import Exploreimg7 from "../image/index_explore/explore_07.jpeg";
import Participate3 from "../image/index_participate/participate_3.png";
import Enjoyimg1 from "../image/index_enjoy/enjoy_01.png";
import Enjoyimg2 from "../image/index_enjoy/enjoy_02.png";
import Enjoyimg3 from "../image/index_enjoy/enjoy_03.png";
import Enjoyimg4 from "../image/index_enjoy/enjoy_04.png";
import Enjoyimg5 from "../image/index_enjoy/enjoy_05.png";
import Enjoyimg6 from "../image/index_enjoy/enjoy_06.png";
import Enjoyimg7 from "../image/index_enjoy/enjoy_07.png";
import Subscribe1 from "../image/Subscribe.jpeg";

function Homepage() {
  return (
    <>
      <div class="sliderbox">
        <div class="slider flex justify-center">
          <div class="search-bg1"></div>
          <div class="search-bg2"></div>
          <div class="search-bg3"></div>
          <div class="search-bg4"></div>
        </div>
        <div class="searchBar flex justify-center items-center">
          <label for="searchText">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="searchIcon mr-5 cursor-pointer"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.3257 12.8987L19.7057 18.2787C19.8948 18.468 20.001 18.7246 20.0009 18.9921C20.0008 19.2596 19.8945 19.5161 19.7052 19.7052C19.516 19.8943 19.2594 20.0005 18.9919 20.0004C18.7244 20.0003 18.4678 19.894 18.2787 19.7047L12.8987 14.3247C11.2905 15.5704 9.26802 16.1566 7.24287 15.9641C5.21772 15.7716 3.34198 14.8148 1.99723 13.2884C0.652477 11.7619 -0.0602651 9.78056 0.00399633 7.74729C0.0682577 5.71402 0.904695 3.7816 2.34315 2.34315C3.7816 0.904695 5.71402 0.0682577 7.74729 0.00399633C9.78056 -0.0602651 11.7619 0.652477 13.2884 1.99723C14.8148 3.34198 15.7716 5.21772 15.9641 7.24287C16.1566 9.26802 15.5704 11.2905 14.3247 12.8987H14.3257ZM8.00074 13.9997C9.59204 13.9997 11.1182 13.3676 12.2434 12.2424C13.3686 11.1172 14.0007 9.59104 14.0007 7.99974C14.0007 6.40845 13.3686 4.88232 12.2434 3.7571C11.1182 2.63189 9.59204 1.99974 8.00074 1.99974C6.40944 1.99974 4.88332 2.63189 3.7581 3.7571C2.63289 4.88232 2.00074 6.40845 2.00074 7.99974C2.00074 9.59104 2.63289 11.1172 3.7581 12.2424C4.88332 13.3676 6.40944 13.9997 8.00074 13.9997Z"
                fill="#769763"
              />
            </svg>
          </label>
          <input
            id="searchText"
            class="searchText mr-5 focus:outline-none"
            value="想去哪裡？"
          ></input>
          <button class="searchBtn">Go</button>
        </div>
      </div>
      <div class="explorepg">
        <div class="explore flex-col">
          <div class="flex explore-top">
            <div class="explore-left">
              <div class="title">Explore</div>
              <div class="title2">探索台灣每個角落</div>
              <div class="text">
                台灣擁有高山峽谷及四面環海地理特性，因此充滿各種自然景致等待人們發現，而各縣市有其特色文化與在地必嚐美食，無論想要來場山林陶冶身心之旅，抑或體驗歷史人文深度旅行，都能在台灣這片土地上踏尋。
              </div>
            </div>
            <div class="flex explore-right">
              <div class="imgWrap">
                <img class="explore-img" src={Exploreimg1}></img>
              </div>
              <p class="vertical-text">台東金剛大道</p>
              <div class="imgWrap">
                <img class="explore-img" src={Exploreimg2}></img>
              </div>
              <p class="vertical-text">南投日月潭文武廟</p>
              <div class="imgWrapHalf">
                <img class="explore-img" src={Exploreimg3}></img>
              </div>
            </div>
          </div>
          <div class="mt-5 flex items-center explore-down">
            <div class="explore-left mr-4">
              <div class="explore-nav">
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    class="dot"
                    cx="4"
                    cy="4.74711"
                    rx="4"
                    ry="3.95402"
                    fill="#F1D675"
                  />
                </svg>
                <Link class="explore-list" to="/lily516liu">
                  都市文情：北台灣
                </Link>
              </div>
              <div class="explore-nav">
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    class="dot"
                    cx="4"
                    cy="4.74711"
                    rx="4"
                    ry="3.95402"
                    fill="#F1D675"
                  />
                </svg>
                <Link class="explore-list" to="/lily516liu">
                  休閒樂活：中台灣
                </Link>
              </div>
              <div class="explore-nav">
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    class="dot"
                    cx="4"
                    cy="4.74711"
                    rx="4"
                    ry="3.95402"
                    fill="#F1D675"
                  />
                </svg>
                <Link class="explore-list" to="/lily516liu">
                  人情小吃：南台灣
                </Link>
              </div>
              <div class="explore-nav">
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    class="dot"
                    cx="4"
                    cy="4.74711"
                    rx="4"
                    ry="3.95402"
                    fill="#F1D675"
                  />
                </svg>
                <Link class="explore-list" to="/lily516liu">
                  自然生態：東台灣
                </Link>
              </div>
              <div class="explore-nav-down">
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    class="dot"
                    cx="4"
                    cy="4.74711"
                    rx="4"
                    ry="3.95402"
                    fill="#F1D675"
                  />
                </svg>
                <Link class="explore-list" to="/lily516liu">
                  小島風情：離島地區
                </Link>
              </div>
            </div>
            <div class="ml-10 flex explore-right">
              <div class="imgWrap">
                <img class="explore-img" src={Exploreimg4}></img>
              </div>
              <p class="vertical-text">南投合歡山</p>
              <div class="imgWrap">
                <img class="explore-img" src={Exploreimg5}></img>
              </div>
              <p class="vertical-text">北投圖書館</p>
              <div class="imgWrap">
                <img class="explore-img" src={Exploreimg6}></img>
              </div>
              <p class="vertical-text">樹林三角埔頂山步道</p>
              <div class="imgWrap">
                <img class="explore-img" src={Exploreimg7}></img>
              </div>
              <p class="vertical-text">水里車埕車站</p>
            </div>
          </div>
        </div>
      </div>
      <div class="participatepg">
        <div class="participate-container flex items-center">
          <img class="participateimg" src={Participate3}></img>
          <div class="participate-right">
            <div class="title">Participate</div>
            <div class="title2">體驗當地風情</div>
            <div class="text mt-2">
              台灣擁有豐富文俗風情，因地貌多變延伸出豐富的主題活動，邀請你體驗文化的精彩。
            </div>
            <div class="explore-left mt-4">
              <div class="participate-nav">
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    class="dot"
                    cx="4"
                    cy="4.74711"
                    rx="4"
                    ry="3.95402"
                    fill="#F1D675"
                  />
                </svg>
                <Link class="participate-list" to="/lily516liu">
                  藝文展演：結合在地藝文場館之旅
                </Link>
              </div>
              <div class="participate-nav">
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    class="dot"
                    cx="4"
                    cy="4.74711"
                    rx="4"
                    ry="3.95402"
                    fill="#F1D675"
                  />
                </svg>
                <Link class="participate-list" to="/lily516liu">
                  休閒樂活：追逐自由單車旅程
                </Link>
              </div>
              <div class="participate-nav">
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    class="dot"
                    cx="4"
                    cy="4.74711"
                    rx="4"
                    ry="3.95402"
                    fill="#F1D675"
                  />
                </svg>
                <Link class="participate-list" to="/lily516liu">
                  自然之美：親自踏上山海之旅
                </Link>
              </div>
              <div class="participate-nav-down">
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    class="dot"
                    cx="4"
                    cy="4.74711"
                    rx="4"
                    ry="3.95402"
                    fill="#F1D675"
                  />
                </svg>
                <Link class="participate-list" to="/lily516liu">
                  傳統文化：體驗台灣宗教慶典
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="enjoypg">
        <div>
          <div class="flex mx-[200px]">
            <div class="flex-1">
              <div class="title">Enjoy</div>
              <div class="title2">享受在地獨特風味</div>
            </div>
            <div class="flex-1 flex flex-col justify-end items-end">
              <div class="text">
                充斥在台灣大街小巷的在地美食，融合當地生活與文化特色，發展出各式各樣風味，從銅板小吃到精緻料理，數不清的美味讓你飽餐一頓。
              </div>
              <button class="enjoyBtn">更多台灣美食</button>
            </div>
          </div>
          <div class="enjoywrap mt-14">
            <div class="enjoyslider flex">
              <div class="shrink-0 enjoyImgWrap mr-5">
                <img class="enjoy-img" src={Enjoyimg1}></img>
              </div>
              <div class="shrink-0 enjoyImgWrap mr-5">
                <img class="enjoy-img" src={Enjoyimg2}></img>
              </div>
              <div class="shrink-0 enjoyImgWrap mr-5">
                <img class="enjoy-img" src={Enjoyimg3}></img>
              </div>
              <div class="shrink-0 enjoyImgWrap mr-5">
                <img class="enjoy-img" src={Enjoyimg4}></img>
              </div>
              <div class="shrink-0 enjoyImgWrap mr-5">
                <img class="enjoy-img" src={Enjoyimg5}></img>
              </div>
              <div class="shrink-0 enjoyImgWrap mr-5">
                <img class="enjoy-img" src={Enjoyimg6}></img>
              </div>
              <div class="shrink-0 enjoyImgWrap mr-6">
                <img class="enjoy-img" src={Enjoyimg7}></img>
              </div>
              <div class="shrink-0 enjoyImgWrap mr-5">
                <img class="enjoy-img" src={Enjoyimg1}></img>
              </div>
              <div class="shrink-0 enjoyImgWrap mr-5">
                <img class="enjoy-img" src={Enjoyimg2}></img>
              </div>
              <div class="shrink-0 enjoyImgWrap mr-5">
                <img class="enjoy-img" src={Enjoyimg3}></img>
              </div>
              <div class="shrink-0 enjoyImgWrap mr-5">
                <img class="enjoy-img" src={Enjoyimg4}></img>
              </div>
              <div class="shrink-0 enjoyImgWrap mr-5">
                <img class="enjoy-img" src={Enjoyimg5}></img>
              </div>
              <div class="shrink-0 enjoyImgWrap mr-5">
                <img class="enjoy-img" src={Enjoyimg6}></img>
              </div>
              <div class="shrink-0 enjoyImgWrap mr-6">
                <img class="enjoy-img" src={Enjoyimg7}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="subscribepg">
        <div class="flex">
          <img class="sub-img w-[600px]" src={Subscribe1}></img>
          <div class="flex flex-col justify-between ml-10 w-[400px]">
            <div class="sub-title">Subscribe</div>
            <div class="sub-title2">每個月來一場自在旅行</div>
            <div class="sub-text">
              如果您願意收到每月的旅遊資訊，一起感受台灣旅行的美好。
            </div>
            <label class="block flex border border-slate-300 text-slate-300 h-[72px] rounded-lg mb-2">
              <input
                type="email"
                name="email"
                class="placeholder:text-slate-300 mt-1 px-3 py-2 block bg-transparent w-full rounded-md sm:text-sm"
                placeholder="you@example.com"
              />
              <button class="w-24">send</button>
            </label>
          </div>
        </div>
      </div>
      <div class="bg-white h-[70px] w-100% border-red-400">111</div>
    </>
  );
}

export default Homepage;
