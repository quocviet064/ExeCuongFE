import React from "react";
import { useDispatch } from "react-redux";
// internal
import { Filter } from "@/svg";
import NiceSelect from "@/ui/nice-select";
import { handleFilterSidebarOpen } from "@/redux/features/shop-filter-slice";

const ShopTopRight = ({ selectHandleFilter }) => {
  const dispatch = useDispatch();
  return (
    <div className="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-end">
      <div className="tp-shop-top-select">
        <NiceSelect
          options={[
            { value: "Sắp xếp mặc định", text: "Sắp xếp mặc định" },
            { value: "Thấp đến cao", text: "Thấp đến cao" },
            { value: "Cao đến thấp", text: "Cao đến thấp" },
            { value: "Mới nhất", text: "Mới nhất" },
            { value: "Đang giảm giá", text: "Đang giảm giá" },
          ]}
          defaultCurrent={0}
          onChange={selectHandleFilter}
          name="Sắp xếp mặc định"
        />
      </div>
      <div className="tp-shop-top-filter">
        <button onClick={() => dispatch(handleFilterSidebarOpen())} type="button" className="tp-filter-btn">
          <span>
            <Filter />
          </span>
          {" "}Lọc
        </button>
      </div>
    </div>
  );
};

export default ShopTopRight;
