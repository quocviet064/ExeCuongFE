import React from "react";
import Link from "next/link";
import Image from "next/image";

const TemplateListItem = ({ template }) => {
  const { _id, imageURl, name, price, area, locationType, vibe, description } = template || {};

  return (
    <div className="tp-product-list-item d-md-flex">
      <div className="tp-product-list-thumb p-relative fix">
        <Link href={`/template-details/${_id}`}>
          {imageURl ? (
            <Image 
              src={imageURl} 
              alt={name} 
              width={350} 
              height={310} 
              onError={(e) => {
                e.target.src = "/path/to/fallback-image.jpg"; // Thay thế bằng đường dẫn đến hình ảnh mặc định
              }}
            />
          ) : (
            <div style={{ width: 350, height: 310, backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              No Image Available
            </div>
          )}
        </Link>
      </div>
      <div className="tp-product-list-content">
        <div className="tp-product-content-2 pt-15">
          <h3 className="tp-product-title-2">
            <Link href={`/template-details/${_id}`}>{name}</Link>
          </h3>
          <div className="tp-product-price-wrapper-2">
            <span className="tp-product-price-2 new-price">{price?.toLocaleString()} VNĐ</span>
          </div>
          <p>{description?.substring(0, 100)}</p>
          <div className="tp-product-details-2">
            <span>Diện tích: {area} m²</span>
            <span>Loại: {locationType}</span>
            <span>Không khí: {vibe}</span>
          </div>
          <div className="tp-product-list-add-to-cart">
            <Link href={`/template-details/${_id}`} className="tp-product-list-add-to-cart-btn">
              Xem chi tiết
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateListItem;
