import React from "react";
import "../styles/Attraction.css";
import Card from "./Card";

function Attraction() {
  return (
    <>
      <div class="Attraction-container">
        <div class="Attraction">
          <div class="At-leftside ">
            <div>首頁 / 景點</div>
            <div class="text-bold mt-[44px]">你正在搜尋</div>
            <div class="filter-type">景點</div>
            <div class="filter-type">美食</div>
            <div class="filter-type  mb-[24px]">活動</div>
            <hr class="w-[250px] -translate-x-3" />
            <div class="flex mb-[27px] mt-[24px]">
              <div class="text-bold mr-2">縮小搜尋範圍</div>
              <button class="text-[#769763]">清除條件</button>
            </div>
            <div>地理區域</div>
            <select class="filter-city-btn ">
              <option>縣市地區</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div>景點主題</div>
            <button class="filter-btn">花海漫遊</button>
            <button class="filter-btn">水上活動</button>
            <button class="filter-btn">星空露營</button>
            <button class="filter-btn">溫泉湯屋</button>
            <button class="filter-btn">親子同遊</button>
            <button class="filter-btn">歷史文化</button>
          </div>
          <div class="w-[100%] flex flex-col">
            <div class="grid grid-cols-3 ">
              <form class="col-span-2 pr-4">
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                  <button
                    type="submit"
                    class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Go
                  </button>
                </div>
              </form>
              <div class="col-span-1 border-2 border-red-600">排序方式</div>
            </div>
            <div class="grid grid-cols-3">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              {/* <div class="border-2 border-red-600">
                <Card></Card>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attraction;
