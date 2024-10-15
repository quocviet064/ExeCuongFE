import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
// internal
import ErrorMsg from "@/components/common/error-msg";
import { useGetShowCategoryQuery } from "@/redux/features/categoryApi";
import { handleFilterSidebarClose } from "@/redux/features/shop-filter-slice";
import ShopCategoryLoader from "@/components/loader/shop/shop-category-loader";

const CategoryTreeFilter = ({ setCurrPage, shop_right = false }) => {
  const { data: categories, isLoading, isError } = useGetShowCategoryQuery();
  const router = useRouter();
  const dispatch = useDispatch();

  // State to manage selected categories
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Handle category route
  const handleCategoryRoute = (title) => {
    setCurrPage(1);
    router.push(
      `/${shop_right ? 'shop-right-sidebar' : 'shop'}?category=${title
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );
    dispatch(handleFilterSidebarClose());
  };

  // Handle checkbox change
  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // Decide what to render
  let content = null;

  if (isLoading) {
    content = <ShopCategoryLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="Có lỗi xảy ra" />;
  }
  if (!isLoading && !isError && categories?.result?.length === 0) {
    content = <ErrorMsg msg="Không tìm thấy danh mục nào!" />;
  }
  if (!isLoading && !isError && categories?.result?.length > 0) {
    const category_items = categories.result;
    content = category_items.map((item) => (
      <li key={item._id}>
        <label style={{ cursor: "pointer" }}>
          <input
            type="checkbox"
            value={item.parent}
            checked={selectedCategories.includes(item.parent)}
            onChange={() => handleCheckboxChange(item.parent)}
            style={{ marginRight: "5px" }} // Optional: add some space between checkbox and label
          />
          <span onClick={() => handleCategoryRoute(item.parent)} style={{ cursor: "pointer" }}>
            {item.parent} <span>{item.products.length}</span>
          </span>
        </label>
      </li>
    ));
  }

  return (
    <>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Lọc Theo Cây</h3>
        <div className="tp-shop-widget-content">
          <div className="tp-shop-widget-categories">
            <ul>{content}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryTreeFilter;
