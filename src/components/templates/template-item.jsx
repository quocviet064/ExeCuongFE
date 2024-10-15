import Image from "next/image";
import React from "react";
import Link from "next/link";

const TemplateItem = ({ template, style_2 = false }) => {
  const { _id, imageURl, name, price, area, locationType, vibe, description } = template || {};
  
  // Chuyển đổi URL hình ảnh
  const getDirectImageUrl = (url) => {
    if (url.includes('ibb.co')) {
      // Nếu URL đã là dạng trực tiếp (i.ibb.co), sử dụng nó
      if (url.includes('i.ibb.co')) {
        return url;
      }
      // Nếu không, chuyển đổi từ ibb.co sang i.ibb.co
      const id = url.split('/').pop();
      return `https://i.ibb.co/${id}/image.png`;
    }
    return url;
  };

  const correctImageUrl = getDirectImageUrl(imageURl);

  return (
    <div className={`tp-product-item-2 ${style_2 ? "" : "mb-40"}`}>
      <div className="tp-product-thumb-2 p-relative z-index-1 fix">
        <Link href={`/template-details/${_id}`}>
          <Image
            src={correctImageUrl}
            alt="template img"
            width={284}
            height={302}
          />
        </Link>
      </div>
      <div className="tp-product-content-2 pt-15">
        <div className="tp-product-tag-2">
          <a href="#">{locationType}</a>, <a href="#">{vibe}</a>
        </div>
        <h3 className="tp-product-title-2">
          <Link href={`/template-details/${_id}`}>{name}</Link>
        </h3>
        <div className="tp-product-price-wrapper-2">
          <span className="tp-product-price-2 new-price">
            VND{price.toLocaleString()}
          </span>
        </div>
        <div className="tp-product-details-2">
          <span>Diện tích: {area} m²</span>
        </div>
        <p>{description?.substring(0, 100)}</p>
        <div className="tp-product-list-add-to-cart">
        <Link href={`/template-details/${_id}`} className="tp-product-list-add-to-cart-btn">
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TemplateItem;
