import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocationTypeFilter } from "@/redux/features/template/filter-slice";

const LocationTypeFilter = ({ setCurrPage }) => {
  const dispatch = useDispatch();
  const { locationType } = useSelector((state) => state.filter);

  const locationTypes = [
    "Sân vườn",
    "Công viên",
    "Khu dân cư",
    "Khu công nghiệp",
    "Khu đô thị"
  ];

  const handleLocationTypeChange = (value) => {
    dispatch(setLocationTypeFilter(value));
    setCurrPage(1);
  };

  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Lọc theo loại địa điểm</h3>
      <div className="tp-shop-widget-content">
        <div className="tp-shop-widget-categories">
          <ul>
            {locationTypes.map((type, index) => (
              <li key={index}>
                <a
                  onClick={() => handleLocationTypeChange(type)}
                  style={{ cursor: "pointer" }}
                  className={locationType === type ? "active" : ""}
                >
                  {type} <span>{/* Số lượng template */}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LocationTypeFilter;
