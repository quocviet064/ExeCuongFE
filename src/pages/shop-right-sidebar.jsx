import React, { useState, useEffect } from "react";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
import ShopArea from "@/components/shop/shop-area";
import { useGetAllProductsQuery } from "@/redux/features/productApi";
import ErrorMsg from "@/components/common/error-msg";
import Footer from "@/layout/footers/footer";
import ShopRightArea from "@/components/shop/shop-right-area";
import ShopFilterOffCanvas from "@/components/common/shop-filter-offcanvas";
import ShopLoader from "@/components/loader/shop/shop-loader";

const ShopRightSidebarPage = ({ query }) => {
  const { data: products, isError, isLoading } = useGetAllProductsQuery();
  const [priceValue, setPriceValue] = useState([0, 0]);
  const [selectValue, setSelectValue] = useState("");
  const [currPage, setCurrPage] = useState(1);

  // Tải giá tối đa khi sản phẩm đã được tải
  useEffect(() => {
    if (!isLoading && !isError && products?.data?.length > 0) {
      const maxPrice = products.data.reduce((max, product) => {
        return product.price > max ? product.price : max;
      }, 0);
      setPriceValue([0, maxPrice]);
    }
  }, [isLoading, isError, products]);

  // Xử lý thay đổi
  const handleChanges = (val) => {
    setCurrPage(1);
    setPriceValue(val);
  };

  // Xử lý chọn bộ lọc
  const selectHandleFilter = (e) => {
    setSelectValue(e.value);
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
    content = <ShopLoader loading={isLoading} shopRight={true} />;
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
        product_items = products.data.slice().sort((a, b) => Number(a.price) - Number(b.price));
      } else if (selectValue === "Cao đến thấp") {
        product_items = products.data.slice().sort((a, b) => Number(b.price) - Number(a.price));
      } else if (selectValue === "Mới nhất") {
        product_items = products.data.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else if (selectValue === "Đang giảm giá") {
        product_items = products.data.filter(p => p.discount > 0);
      } else {
        product_items = products.data;
      }
    }

    // Lọc theo giá
    product_items = product_items.filter(
      (p) => p.price >= priceValue[0] && p.price <= priceValue[1]
    );

    // Lọc theo trạng thái
    if (query.status) {
      if (query.status === "on-sale") {
        product_items = product_items.filter(p => p.discount > 0);
      } else if (query.status === "in-stock") {
        product_items = product_items.filter(p => p.status === "in-stock");
      }
    }

    // Lọc theo danh mục
    if (query.category) {
      product_items = product_items.filter(
        (p) => p.parent.toLowerCase().replace("&", "").split(" ").join("-") === query.category
      );
    }

    // Lọc theo màu sắc
    if (query.color) {
      product_items = product_items.filter(product => {
        for (let i = 0; i < product.imageURLs.length; i++) {
          const color = product.imageURLs[i]?.color;
          if (color && color?.name.toLowerCase().replace("&", "").split(" ").join("-") === query.color) {
            return true; // tìm thấy, bao gồm sản phẩm trong kết quả
          }
        }
        return false; // không tìm thấy, loại trừ sản phẩm khỏi kết quả
      });
    }

    // Lọc theo thương hiệu
    if (query.brand) {
      product_items = product_items.filter(p => p.brand.name.toLowerCase().replace("&", "").split(" ").join("-") === query.brand);
    }

    content = (
      <>
        <ShopRightArea
          all_products={products.data}
          products={product_items}
          otherProps={otherProps}
          right_side={true}
        />
        <ShopFilterOffCanvas
          all_products={products.data}
          otherProps={otherProps}
          right_side={true}
        />
      </>
    );
  }

  return (
    <Wrapper>
      <SEO pageTitle="Cửa Hàng" />
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb title="Cửa Hàng Bên Phải" subtitle="Cửa Hàng Bên Phải" />
      {content}
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default ShopRightSidebarPage;

export const getServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: {
      query,
    },
  };
};