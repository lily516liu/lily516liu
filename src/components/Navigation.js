import React from "react";
import { Link } from "react-router-dom";
import Logo from "../image/logo.svg";
import "../styles/Homepage.css";


function Navigation() {
  return (
    <>
      <nav class="flex">
        <img src={Logo} alt="Logo" class="logo h-24 w-96 mx-8" />
        <Link
          to="/lily516liu/attraction"
          class="nav flex flex-col justify-center text-center w-28"
        >
          <div class="flex justify-center pb-2">
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
                fill="transparent"
              />
            </svg>
          </div>
          <div>找景點</div>
          <div>ATTRACTION</div>
          <div class="navHover flex justify-center ">
            <div class="navItem border-2 border-red-400">
              <svg
                width="24"
                height="45"
                viewBox="0 0 24 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.45542 44.0854C7.52618 43.7531 7.83592 42.1518 7.6261 41.3864C7.30636 40.2081 6.80677 39.1507 5.9075 38.2946C4.95828 37.3983 3.72928 36.7639 3.06982 35.6359C2.51028 34.6892 2.44034 33.5512 2.10061 32.5038C1.74091 31.386 1.07146 30.3789 0.741727 29.2409C0.342053 27.8511 0.491931 26.3505 0.801678 24.9406C1.74091 20.5798 4.069 16.6622 6.43707 12.8957C7.77597 10.7707 9.13486 8.65582 10.4937 6.54092C11.0133 5.72517 11.5629 4.89936 12.3522 4.34545C13.4613 3.58006 14.9601 3.45921 15.9493 2.53268C16.4589 2.05935 16.8486 1.36445 17.518 1.19324C18.6571 0.891116 19.5064 2.23055 20.5555 2.77438C21.3149 3.16715 22.374 3.23765 22.7337 4.02318C23.1534 4.92957 22.2541 5.8561 21.8944 6.7927C21.3748 8.1422 22.0343 9.66292 21.8744 11.093C21.7146 12.5634 20.7354 13.792 20.0559 15.1113C19.1367 16.8939 18.747 18.9081 18.3573 20.8719C17.7378 23.9838 17.0684 27.136 15.6096 29.9559C13.911 33.229 11.1132 36.1395 10.8634 39.8254C10.8035 40.7117 10.8934 41.6382 10.5937 42.4741C10.3439 43.1589 9.49457 44.2566 8.64526 44.1257C8.56533 44.1257 8.50538 44.1056 8.45542 44.0854Z"
                  stroke="#769763"
                  stroke-miterlimit="10"
                />
                <path
                  opacity="0.45"
                  d="M14.4306 13.9733C16.0992 13.1575 18.837 12.0799 21.8745 10.952C21.9744 9.55214 21.3849 8.09185 21.8845 6.7927C22.2442 5.8561 23.1434 4.92957 22.7238 4.02318C22.3641 3.23765 21.3049 3.16715 20.5456 2.77438C19.4964 2.23055 18.6571 0.891116 17.508 1.19324C16.8386 1.36445 16.4489 2.05935 15.9393 2.53268C14.9501 3.45921 13.4514 3.58006 12.3423 4.34545C11.5529 4.88929 11.0034 5.72517 10.4838 6.54092C9.1249 8.65582 7.76601 10.7607 6.42711 12.8957C6.3072 13.087 6.1873 13.2784 6.07739 13.4697C9.30475 14.6783 12.4722 14.93 14.4306 13.9733Z"
                  fill="#769763"
                />
              </svg>
              <div class="nav-text">北台灣</div>
            </div>
            <div class="navItem border-2 border-red-400">
              <svg
                width="24"
                height="45"
                viewBox="0 0 24 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.45542 44.0854C7.52618 43.7531 7.83592 42.1518 7.62609 41.3864C7.30636 40.2081 6.80677 39.1507 5.90751 38.2946C4.95828 37.3983 3.72928 36.7639 3.06982 35.6359C2.51028 34.6892 2.44034 33.5512 2.10061 32.5038C1.74091 31.386 1.07145 30.3789 0.741725 29.2409C0.342051 27.8511 0.491934 26.3505 0.801681 24.9406C1.74091 20.5798 4.06901 16.6622 6.43707 12.8957C7.77598 10.7707 9.13486 8.65582 10.4938 6.54092C11.0133 5.72517 11.5629 4.89936 12.3522 4.34545C13.4613 3.58006 14.9601 3.45921 15.9493 2.53268C16.4589 2.05935 16.8486 1.36445 17.518 1.19324C18.6571 0.891116 19.5064 2.23055 20.5555 2.77438C21.3149 3.16715 22.374 3.23765 22.7337 4.02318C23.1534 4.92957 22.2541 5.8561 21.8944 6.7927C21.3749 8.1422 22.0343 9.66292 21.8744 11.093C21.7146 12.5634 20.7354 13.792 20.0559 15.1113C19.1367 16.8939 18.747 18.9081 18.3573 20.8719C17.7378 23.9838 17.0684 27.136 15.6096 29.9559C13.911 33.229 11.1132 36.1395 10.8635 39.8254C10.8035 40.7117 10.8934 41.6382 10.5937 42.4741C10.3439 43.1589 9.49457 44.2566 8.64527 44.1257C8.57532 44.1257 8.51537 44.1056 8.45542 44.0854Z"
                  stroke="#769763"
                  stroke-miterlimit="10"
                />
                <path
                  opacity="0.45"
                  d="M7.32633 26.9749C7.32633 26.9749 10.0941 26.3605 10.3938 21.8689C10.5837 19.1296 12.0425 16.7831 13.1616 15.3832C13.5512 14.8897 13.1416 14.1747 12.5221 14.2754L10.8335 14.5372C8.97498 14.8293 7.28636 14.1747 6.07735 13.4697C3.83918 17.0651 1.69094 20.7913 0.801667 24.9405C0.501912 26.3605 0.35203 27.851 0.741711 29.2408C0.931555 29.8955 1.23132 30.4997 1.52108 31.114C3.43951 28.0223 7.32633 26.9749 7.32633 26.9749Z"
                  fill="#769763"
                />
              </svg>
              <div class="nav-text">中台灣</div>
            </div>
            <div class="navItem border-2 border-red-400">
              <svg
                width="24"
                height="45"
                viewBox="0 0 24 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.45"
                  d="M9.08483 29.8048C9.08483 27.5389 12.7219 25.5851 7.01653 26.9749C4.19884 27.6597 2.32038 29.0495 1.13135 30.2782C1.46108 31.0134 1.85076 31.7385 2.10056 32.5039C2.44028 33.5512 2.51022 34.6893 3.06976 35.6359C3.72922 36.7639 4.95822 37.3983 5.90744 38.2947C6.8067 39.1406 7.3063 40.1981 7.62603 41.3864C7.83586 42.1619 7.52612 43.7632 8.45536 44.0855C8.51531 44.1056 8.57525 44.1257 8.6352 44.1358C9.48451 44.2667 10.3338 43.169 10.5836 42.4842C10.8834 41.6483 10.7934 40.7218 10.8534 39.8355C10.9433 38.5364 11.353 37.3379 11.9125 36.1798C11.2331 35.0719 10.3338 33.9239 10.2239 33.1988C10.0341 31.96 9.08483 32.0708 9.08483 29.8048Z"
                  fill="#769763"
                />
                <path
                  d="M8.45542 44.0854C7.52618 43.7531 7.83592 42.1518 7.62609 41.3864C7.30636 40.2081 6.80676 39.1507 5.9075 38.2946C4.95828 37.3983 3.72929 36.7639 3.06982 35.6359C2.51028 34.6892 2.44034 33.5512 2.10062 32.5038C1.74091 31.386 1.07146 30.3789 0.741727 29.2409C0.342054 27.8511 0.491929 26.3505 0.801676 24.9406C1.74091 20.5798 4.069 16.6622 6.43706 12.8957C7.77597 10.7707 9.13486 8.65582 10.4937 6.54092C11.0133 5.72517 11.5629 4.89936 12.3522 4.34545C13.4613 3.58006 14.9601 3.45921 15.9493 2.53268C16.4589 2.05935 16.8485 1.36445 17.518 1.19324C18.6571 0.891116 19.5064 2.23055 20.5555 2.77438C21.3149 3.16715 22.374 3.23765 22.7337 4.02318C23.1534 4.92957 22.2541 5.8561 21.8944 6.7927C21.3748 8.1422 22.0343 9.66292 21.8744 11.093C21.7146 12.5634 20.7354 13.792 20.0559 15.1113C19.1367 16.8939 18.747 18.9081 18.3573 20.8719C17.7378 23.9838 17.0684 27.136 15.6096 29.9559C13.911 33.229 11.1132 36.1395 10.8635 39.8254C10.8035 40.7117 10.8934 41.6382 10.5937 42.4741C10.3439 43.1589 9.49457 44.2566 8.64526 44.1257C8.57532 44.1257 8.51537 44.1056 8.45542 44.0854Z"
                  stroke="#769763"
                  stroke-miterlimit="10"
                />
              </svg>
              <div class="nav-text">南台灣</div>
            </div>
            <div class="navItem border-2 border-red-400">
              <svg
                width="24"
                height="45"
                viewBox="0 0 24 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.45"
                  d="M15.9893 13.2683C14.0808 14.0539 14.6903 14.7387 13.7411 18.8174C12.7919 22.8961 9.92423 26.5116 9.92423 26.5116C9.92423 26.5116 8.93504 28.6064 8.64528 29.8048C8.35551 31.0033 9.78434 33.1987 10.0441 33.8836C10.154 34.1857 10.8734 35.4546 11.6528 36.784C12.662 34.4274 14.4106 32.2823 15.6196 29.966C17.0784 27.1562 17.7478 24.004 18.3673 20.882C18.757 18.9081 19.1367 16.9039 20.0659 15.1214C20.7454 13.8021 21.7246 12.5734 21.8845 11.1031C21.8945 11.0124 21.8944 10.9218 21.8944 10.8412C19.7262 11.7174 17.0484 12.8252 15.9893 13.2683Z"
                  fill="#769763"
                />
                <path
                  d="M8.45543 44.0854C7.52619 43.7531 7.83592 42.1518 7.62609 41.3864C7.30635 40.2081 6.80676 39.1507 5.90749 38.2946C4.95827 37.3983 3.72927 36.7639 3.06981 35.6359C2.51027 34.6892 2.44033 33.5512 2.1006 32.5038C1.7409 31.386 1.07146 30.3789 0.741728 29.2409C0.342054 27.8511 0.491929 26.3505 0.801676 24.9406C1.74091 20.5798 4.06899 16.6622 6.43706 12.8957C7.77596 10.7707 9.13485 8.65582 10.4937 6.54092C11.0133 5.72517 11.5629 4.89936 12.3522 4.34545C13.4613 3.58006 14.9601 3.45921 15.9493 2.53268C16.4589 2.05935 16.8486 1.36445 17.518 1.19324C18.6571 0.891116 19.5064 2.23055 20.5555 2.77438C21.3149 3.16715 22.374 3.23765 22.7337 4.02318C23.1534 4.92957 22.2541 5.8561 21.8944 6.7927C21.3749 8.1422 22.0343 9.66292 21.8745 11.093C21.7146 12.5634 20.7354 13.792 20.0559 15.1113C19.1367 16.8939 18.747 18.9081 18.3573 20.8719C17.7379 23.9838 17.0684 27.136 15.6096 29.9559C13.911 33.229 11.1133 36.1395 10.8635 39.8254C10.8035 40.7117 10.8934 41.6382 10.5937 42.4741C10.3439 43.1589 9.49458 44.2566 8.64528 44.1257C8.57533 44.1257 8.50539 44.1056 8.45543 44.0854Z"
                  stroke="#769763"
                  stroke-miterlimit="10"
                />
              </svg>
              <div class="nav-text">東台灣</div>
            </div>
            <div class="navItem border-2 border-red-400">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.45"
                  d="M19.5219 3.10524C18.9823 2.83332 18.4428 2.28949 18.173 1.74566C17.9032 1.20183 17.9032 0.657997 18.0331 0.396152C18.163 0.134307 18.4128 0.16452 18.9523 0.436436C19.4919 0.708351 20.3212 1.23204 21.0107 1.22197C21.6901 1.2119 22.2297 0.668068 22.7792 0.527074C23.3188 0.396152 23.8583 0.668068 24.3979 0.668068C24.9375 0.668068 25.477 0.396153 26.0166 0.255159C26.5561 0.114166 27.0957 0.114166 27.3655 0.255159C27.6353 0.396153 27.6353 0.668068 27.9051 1.2119C28.1748 1.75573 28.7144 2.57148 28.7144 2.98439C28.7144 3.38723 28.1748 3.38723 27.9051 3.66921C27.6353 3.94113 27.6352 4.48496 27.2256 5.16979C26.8259 5.85461 26.0066 6.67036 25.7368 7.21419C25.467 7.75802 25.7368 8.02994 26.1365 8.57377C26.5461 9.1176 27.0857 9.93335 27.2156 10.3463C27.3555 10.7491 27.0857 10.7491 26.5362 10.6182C25.9966 10.4772 25.1872 10.2053 24.5078 9.80243C23.8383 9.38952 23.2888 8.84569 23.1589 8.30185C23.019 7.75802 23.2888 7.21419 22.8891 7.21419C22.4795 7.21419 21.4003 7.75802 20.7309 7.89901C20.0514 8.02994 19.7817 7.75802 19.9216 6.94228C20.0614 6.12653 20.601 4.76695 20.601 4.08212C20.601 3.37716 20.0614 3.37716 19.5219 3.10524Z"
                  fill="#769763"
                />
                <path
                  opacity="0.45"
                  d="M12.5077 11.595C12.3778 11.4541 12.108 11.4541 11.8283 11.595C11.5585 11.736 11.2887 11.9979 10.879 12.1389C10.4694 12.2698 9.92982 12.2698 9.39026 12.1389C8.8507 11.9979 8.31113 11.736 7.63168 11.595C6.95224 11.4541 6.14291 11.4541 5.33357 11.595C4.52423 11.736 3.71489 11.9979 3.17533 11.9979C2.63577 11.9979 2.36598 11.726 2.2261 11.4541C2.0962 11.1821 2.09621 10.9102 1.95633 10.7692C1.81644 10.6282 1.54664 10.6282 1.27686 10.7692C1.00708 10.9002 0.737306 11.1721 0.59742 11.4541C0.467527 11.726 0.467527 11.9979 0.59742 12.1389C0.737306 12.2698 1.00709 12.2698 1.13699 12.4108C1.27687 12.5417 1.27686 12.8136 1.40676 13.0956C1.53665 13.3675 1.80644 13.6395 1.94632 14.3243C2.07622 15.0091 2.07622 16.0968 1.94632 16.9125C1.80644 17.7283 1.53666 18.2721 1.53666 18.544C1.53666 18.8159 1.80643 18.8159 2.21609 18.8159C2.62576 18.8159 3.16532 18.8159 3.565 18.9468C3.97466 19.0878 4.24445 19.3598 4.51423 19.9036C4.78401 20.4474 5.05378 21.2632 5.46344 21.807C5.87311 22.3508 6.41268 22.6227 7.35191 22.6227C8.30114 22.6227 9.65004 22.3508 10.3195 22.3508C10.9989 22.3508 10.9989 22.6227 10.9989 23.0356C10.9989 23.4385 10.9989 23.9924 11.4086 24.3952C11.8183 24.8081 12.6276 25.0801 12.8974 25.4829C13.1672 25.8958 12.8974 26.4396 12.8974 26.8425C12.8974 27.2554 13.1672 27.5273 13.5768 27.6582C13.9765 27.7891 14.526 27.7891 14.9257 27.9301C15.3354 28.0611 15.6052 28.333 15.875 28.333C16.1447 28.333 16.4145 28.0611 16.6843 27.5172C16.9541 26.9734 17.2239 26.1576 17.2239 25.6138C17.2239 25.07 16.9541 24.7981 16.9541 24.5262C16.9541 24.2542 17.2238 23.9823 17.4936 23.7104C17.7634 23.4385 18.0332 23.1666 17.9033 23.0356C17.7634 22.8947 17.2238 22.8947 16.6843 22.7637C16.1447 22.6227 15.6052 22.3508 15.1955 21.948C14.7858 21.5351 14.5161 20.9912 14.2463 20.8603C13.9765 20.7193 13.7067 20.9912 13.1672 20.8603C12.6276 20.7193 11.8183 20.1755 11.5485 19.7727C11.2787 19.3698 11.5485 19.0878 11.5485 18.8159C11.5485 18.544 11.2787 18.2721 11.1388 18.0002C10.9989 17.7283 10.9989 17.4563 11.2787 17.1844C11.5485 16.9125 12.088 16.6406 12.4977 16.6406C12.9074 16.6406 13.1771 16.9125 13.307 16.9125C13.4369 16.9125 13.4369 16.6406 13.4369 16.3687C13.4369 16.0968 13.4369 15.8248 13.307 15.6839C13.1672 15.5429 12.8974 15.5429 12.6276 15.2709C12.3578 14.999 12.088 14.4552 12.088 14.0423C12.088 13.6395 12.3578 13.3575 12.4877 13.0855C12.6276 12.8136 12.6276 12.5417 12.6276 12.2698C12.6476 12.008 12.6476 11.736 12.5077 11.595Z"
                  fill="#769763"
                />
              </svg>
              <div class="nav-text">離島地區</div>
            </div>
          </div>
        </Link>
        <Link
          to="/lily516liu/delicacy"
          class="nav flex flex-col justify-center text-center w-28"
        >
          <div class="flex justify-center pb-2">
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
                fill="transparent"
              />
            </svg>
          </div>
          <div>找美食</div>
          <div>DELICACY</div>
          <div class="navHover"></div>
        </Link>
        <Link
          to="/lily516liu/activity"
          class="nav flex flex-col justify-center text-center w-28"
        >
          <div class="flex justify-center pb-2">
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
                fill="transparent"
              />
            </svg>
          </div>
          <div>找活動</div>
          <div>ACTIVITY</div>
          <div class="navHover"></div>
        </Link>
        <Link
          to="/lily516liu/More"
          class="nav flex flex-col justify-center text-center w-28"
        >
          <div class="flex justify-center pb-2">
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
                fill="transparent"
              />
            </svg>
          </div>
          <div>探索更多</div>
          <div>MORE</div>
          <div class="navHover"></div>
        </Link>
        <Link
          to="/lily516liu"
          class="nav flex flex-col justify-center text-center w-28"
        >
          <div class="flex justify-center pb-2">
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
                fill="transparent"
              />
            </svg>
          </div>
          <div>首頁</div>
          <div>HOME</div>
          <div class="navHover"></div>
        </Link>
        <div class="w-28 flex justify-end py-9 ">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-3"
          >
            <path
              d="M9.6264 2.2843L10.158 1.75522L9.62824 2.28613L10.4606 3.11669L10.9916 3.64644L11.5213 3.11551L12.3391 2.29587C12.3394 2.29559 12.3397 2.29532 12.3399 2.29505C12.8251 1.8122 13.4006 1.42964 14.0336 1.1692C14.667 0.908622 15.3455 0.775419 16.0304 0.777205C16.7153 0.778991 17.3931 0.915733 18.0251 1.17961C18.6571 1.44349 19.2309 1.82934 19.7138 2.31511L19.7165 2.31785C20.6948 3.29198 21.2464 4.61467 21.25 5.99526C21.2536 7.37533 20.7094 8.7004 19.7368 9.67953C19.7365 9.67989 19.7361 9.68026 19.7357 9.68063L11.1514 18.2594L11.1513 18.2595C11.1201 18.2908 11.0777 18.3083 11.0335 18.3083C10.9892 18.3083 10.9468 18.2908 10.9156 18.2595L2.2856 9.62771L2.28429 9.62641C1.30549 8.6522 0.753624 7.32918 0.750018 5.94819C0.746413 4.56794 1.29079 3.24272 2.26353 2.26356C3.24268 1.2908 4.56792 0.746413 5.94819 0.750018C7.32917 0.753624 8.6522 1.30549 9.6264 2.2843Z"
              stroke="#769763"
              stroke-width="1.5"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C15.523 0 20 4.478 20 10C20 15.522 15.523 20 10 20C4.477 20 0 15.522 0 10C0 4.478 4.477 0 10 0ZM10 1.667C5.405 1.667 1.667 5.405 1.667 10C1.667 14.595 5.405 18.333 10 18.333C14.595 18.333 18.333 14.595 18.333 10C18.333 5.405 14.595 1.667 10 1.667ZM10 13.5C10.2652 13.5 10.5196 13.6054 10.7071 13.7929C10.8946 13.9804 11 14.2348 11 14.5C11 14.7652 10.8946 15.0196 10.7071 15.2071C10.5196 15.3946 10.2652 15.5 10 15.5C9.73478 15.5 9.48043 15.3946 9.29289 15.2071C9.10536 15.0196 9 14.7652 9 14.5C9 14.2348 9.10536 13.9804 9.29289 13.7929C9.48043 13.6054 9.73478 13.5 10 13.5ZM10 4.75C10.7293 4.75 11.4288 5.03973 11.9445 5.55546C12.4603 6.07118 12.75 6.77065 12.75 7.5C12.75 8.51 12.453 9.074 11.699 9.859L11.53 10.03C10.908 10.652 10.75 10.916 10.75 11.5C10.75 11.6989 10.671 11.8897 10.5303 12.0303C10.3897 12.171 10.1989 12.25 10 12.25C9.80109 12.25 9.61032 12.171 9.46967 12.0303C9.32902 11.8897 9.25 11.6989 9.25 11.5C9.25 10.49 9.547 9.926 10.301 9.141L10.47 8.97C11.092 8.348 11.25 8.084 11.25 7.5C11.249 7.18028 11.1255 6.8731 10.9049 6.64165C10.6843 6.4102 10.3834 6.27208 10.0641 6.25568C9.7448 6.23929 9.43135 6.34587 9.18822 6.55351C8.94509 6.76115 8.79077 7.05406 8.757 7.372L8.75 7.5C8.75 7.69891 8.67098 7.88968 8.53033 8.03033C8.38968 8.17098 8.19891 8.25 8 8.25C7.80109 8.25 7.61032 8.17098 7.46967 8.03033C7.32902 7.88968 7.25 7.69891 7.25 7.5C7.25 6.77065 7.53973 6.07118 8.05546 5.55546C8.57118 5.03973 9.27065 4.75 10 4.75Z"
              fill="#F1D675"
            />
          </svg>
        </div>
      </nav>
      <div class="">
        <div class="search-bg flex justify-center"></div>
      </div>
    </>
  );
}

export default Navigation;
