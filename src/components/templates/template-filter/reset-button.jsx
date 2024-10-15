import React from "react";
import { useDispatch } from "react-redux";
import { resetFilters } from "@/redux/features/template/filter-slice";

const ResetButton = ({ setCurrPage }) => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetFilters());
    setCurrPage(1);
  };

  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Đặt lại bộ lọc</h3>
      <button
        onClick={handleReset}
        className="tp-btn"
      >
        Đặt lại bộ lọc
      </button>
    </div>
  );
};

export default ResetButton;
