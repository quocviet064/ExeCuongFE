import React, { useState, useEffect } from "react";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
import { useGetAllProductsQuery } from "@/redux/features/productApi";
import ErrorMsg from "@/components/common/error-msg";
import ShopHiddenSidebarArea from "@/components/shop/shop-hidden-sidebar-area";
import ShopFilterOffCanvas from "@/components/common/shop-filter-offcanvas";
import Footer from "@/layout/footers/footer";
import ShopHiddenLoader from "@/components/loader/shop/shop-hidden-loader";

const ShopHiddenSidebarPage = () => {
  const { data: products, isError, isLoading } = useGetAllProductsQuery();
  const [selectValue, setSelectValue] = useState("");
  const [currPage, setCurrPage] = useState(1);
  const [priceValue, setPriceValue] = useState([0, 0]);

  // Tải giá tối đa khi sản phẩm đã được tải
  useEffect(() => {
    if (!isLoading && !isError && products?.data?.length > 0) {
      const maxPrice = products.data.reduce((max, product) => {
        return product.price > max ? product.price : max;
      }, 0);
      setPriceValue([0, maxPrice]);
    }
  }, [isLoading, isError, products]);

  // Xử lý chọn bộ lọc
  const selectHandleFilter = (e) => {
    setSelectValue(e.value);
  };

  // Xử lý thay đổi
  const handleChanges = (val) => {
    setCurrPage(1);
    setPriceValue(val);
  };

  // Các props khác
  const otherProps = {
    priceFilterValues: {
      priceValue,
      handleChanges,
    },
    selectHandleFilter,
    currPage,
    setCurrPage,
  };

  // Quyết định nội dung hiển thị
  let content = null;

  if (isLoading) {
    content = <ShopHiddenLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="Có lỗi xảy ra" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="Không tìm thấy sản phẩm!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    // sản phẩm
    let product_items = products.data;

    // Lọc ngắn
    if (selectValue) {
      if (selectValue === "Sắp xếp mặc định") {
        product_items = products.data;
      } else if (selectValue === "Thấp đến cao") {
        product_items = products.data
          .slice()
          .sort((a, b) => Number(a.price) - Number(b.price));
      } else if (selectValue === "Cao đến thấp") {
        product_items = products.data
          .slice()
          .sort((a, b) => Number(b.price) - Number(a.price));
      } else if (selectValue === "Mới nhất") {
        product_items = products.data
          .slice()
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else if (selectValue === "Đang giảm giá") {
        product_items = products.data.filter((p) => p.discount > 0);
      } else {
        product_items = products.data;
      }
    }

    content = (
      <>
        <ShopHiddenSidebarArea
          all_products={products.data}
          products={product_items}
          otherProps={otherProps}
        />
        <ShopFilterOffCanvas
          all_products={products.data}
          otherProps={otherProps}
        />
      </>
    );
  }

  return (
    <Wrapper>
      <SEO pageTitle="Cửa Hàng" />
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb title="Cửa Hàng Với Thanh Bên Ẩn" subtitle="Cửa Hàng Với Thanh Bên Ẩn" />
      {content}
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default ShopHiddenSidebarPage;

export const getServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: {
      query,
    },
  };
};