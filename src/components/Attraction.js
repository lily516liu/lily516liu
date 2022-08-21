import React from "react";
import "../styles/Attraction.css";

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
          <div class="At-rightside border-2 border-green-400">首頁 / 景點</div>
        </div>
      </div>
    </>
  );
}

export default Attraction;
