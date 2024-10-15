import React from "react";
import { useDispatch } from "react-redux";
import { Filter } from "@/svg";
import NiceSelect from "@/ui/nice-select";
import { handleFilterSidebarOpen } from "@/redux/features/shop-filter-slice";

const TemplatesTopRight = ({ selectHandleFilter }) => {
  const dispatch = useDispatch();
  return (
    <div className="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-end">
      <div className="tp-shop-top-select">
        <NiceSelect
          options={[
            { value: "Sắp xếp mặc định", text: "Sắp xếp mặc định" },
            { value: "Giá thấp đến cao", text: "Giá thấp đến cao" },
            { value: "Giá cao đến thấp", text: "Giá cao đến thấp" },
            { value: "Diện tích nhỏ đến lớn", text: "Diện tích nhỏ đến lớn" },
            { value: "Diện tích lớn đến nhỏ", text: "Diện tích lớn đến nhỏ" },
          ]}
          defaultCurrent={0}
          onChange={selectHandleFilter}
          name="Sắp xếp mặc định"
        />
      </div>
      <div className="tp-shop-top-filter">
        <button onClick={() => dispatch(handleFilterSidebarOpen())} type="button" className="tp-filter-btn">
          <span><Filter /></span> Lọc
        </button>
      </div>
    </div>
  );
};

export default TemplatesTopRight;
