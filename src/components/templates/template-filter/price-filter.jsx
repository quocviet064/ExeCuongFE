import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPriceFilter } from "@/redux/features/template/filter-slice";

const PriceFilter = ({ maxPrice, setCurrPage }) => {
  const dispatch = useDispatch();
  const { priceRange } = useSelector((state) => state.filter);

  const priceRanges = [
    { min: 0, max: 50000 },
    { min: 50000, max: 200000 },
    { min: 200000, max: 350000 },
    { min: 350000, max: maxPrice },
  ];

  const handlePriceChange = (min, max) => {
    dispatch(setPriceFilter({ min, max }));
    setCurrPage(1);
  };

  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Lọc theo giá</h3>
      <div className="tp-shop-widget-content">
        <div className="tp-shop-widget-categories">
          <ul>
            {priceRanges.map((range, index) => (
              <li key={index}>
                <a
                  onClick={() => handlePriceChange(range.min, range.max)}
                  style={{ cursor: "pointer" }}
                  className={priceRange.min === range.min && priceRange.max === range.max ? "active" : ""}
                >
                  {range.min !== undefined ? range.min.toLocaleString() : '0'} - {range.max !== undefined ? range.max.toLocaleString() : 'Max'} VNĐ <span>{/* Số lượng template */}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
