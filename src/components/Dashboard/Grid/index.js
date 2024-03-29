import React, { useEffect, useState } from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
import WatchListToggle from "../../Common/WatchListToggle";
import { Tooltip } from "@mui/material";
const Grid = ({ coin }) => {
  const [toggleWatchIcon, setToggleWatchIcon] = useState(coin.watchData);

  useEffect(() => {}, []);

  //  console.log("grid",coin)
  const handleWatchList = () => {
    let storedData = JSON.parse(localStorage.getItem("watchData")) || [];
    if (toggleWatchIcon && storedData.indexOf(coin.id) !== -1) {
      coin["watchData"] = false;
      storedData.splice(storedData.indexOf(coin.id), 1);
      setToggleWatchIcon(false);
    } else {
      storedData.push(coin.id);
      coin["watchData"] = true;
      setToggleWatchIcon(true);
    }
    localStorage.setItem("watchData", JSON.stringify(storedData));
  };
  return (
    <div
      className={`grid-container ${
        coin.price_change_percentage_24h < 0 && "grid-container-red"
      }`}
    >
      <Tooltip title="Add To Watch List" placement="bottom-start">
        <div
          className={
            coin.price_change_percentage_24h > 0
              ? "watch-icon"
              : "watch-icon-red"
          }
          onClick={handleWatchList}
        >
          <WatchListToggle saveToWatchList={coin.watchData} />
        </div>
      </Tooltip>
      <Link to={`/coin/${coin.id}`}>
        <div className="info-flex">
          <img src={coin.image} className="coin-logo" />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>
        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              +{coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <div className="icon-chip">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}
            </div>
            <div className="icon-chip  chip-red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        <div className="info-container">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h > 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
          <p className="total_valume">
            Total Volume : {coin.total_volume.toLocaleString()}
          </p>
          <p className="total_valume">
            Market Cap : ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Grid;
