import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAreaFilter } from "@/redux/features/template/filter-slice";

const AreaFilter = ({ maxArea, setCurrPage }) => {
  const dispatch = useDispatch();
  const { areaRange } = useSelector((state) => state.filter);

  const areaRanges = [
    { min: 0, max: 50 },
    { min: 51, max: 100 },
    { min: 101, max: 200 },
    { min: 201, max: maxArea },
  ];

  const handleAreaChange = (min, max) => {
    dispatch(setAreaFilter({ min, max }));
    setCurrPage(1);
  };

  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Lọc theo diện tích</h3>
      <div className="tp-shop-widget-content">
        <div className="tp-shop-widget-categories">
          <ul>
            {areaRanges.map((range, index) => (
              <li key={index}>
                <a
                  onClick={() => handleAreaChange(range.min, range.max)}
                >
                  <span>{range.min} - {range.max} m²</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AreaFilter;
