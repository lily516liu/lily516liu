import React from "react";
import card1 from "../image/index_participate/participate_1.png";
import cardstyle from "../styles/Card.css";

function Card() {
  return (
    <div>
      <div class="w-[100%] h-[100]% pt-4 pr-4">
        <div class="card-border">
          <div>
            {/* 改抓api */}
            <img src={card1}></img>
          </div>
          <div class="card-text p-2">
            <div>將軍觀光漁港</div>
            <div>臺南市 將軍區</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
