import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVibeFilter } from "@/redux/features/template/filter-slice";

const VibeFilter = ({ setCurrPage }) => {
  const dispatch = useDispatch();
  const { vibe } = useSelector((state) => state.filter);

  const vibes = [
    "Hiện đại",
    "Cổ điển",
    "Tự nhiên",
    "Tối giản",
    "Nhiệt đới"
  ];

  const handleVibeChange = (value) => {
    dispatch(setVibeFilter(value));
    setCurrPage(1);
  };

  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Lọc theo không gian</h3>
      <div className="tp-shop-widget-content">
        <div className="tp-shop-widget-categories">
          <ul>
            {vibes.map((vibeType, index) => (
              <li key={index}>
                <a
                  onClick={() => handleVibeChange(vibeType)}
                  style={{ cursor: "pointer" }}
                  className={vibe === vibeType ? "active" : ""}
                >
                  {vibeType} <span>{/* Số lượng template */}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VibeFilter;
