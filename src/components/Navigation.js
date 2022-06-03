import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav>
        <Link to="/lily516liu">Home</Link>
        <br></br>
        <Link to="/lily516liu/about">About</Link>
        <br></br>
        <Link to="/lily516liu/movie">Movie</Link>
        <br></br>
      </nav>
      {/* <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
          <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
          <h1>111</h1>
        </div>
      </div> */}
    </>
  );
}

export default Navigation;
