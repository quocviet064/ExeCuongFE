import React from "react";
import dayjs from "dayjs";
import CopyToClipboard from "react-copy-to-clipboard";
import Image from "next/image";
// internal
import OfferTimer from "./offer-timer";
import { InfoDetails } from "@/svg";

const CouponItem = ({ coupon, handleCopied, copiedCode, copied }) => {
  return (
    <div 
      className="tp-coupon-item mb-30 p-relative d-md-flex justify-content-between align-items-start" 
      style={{ 
        border: '2px solid #4CAF50', 
        borderRadius: '8px', 
        padding: '20px', 
        backgroundColor: '#f9f9f9', 
        display: 'flex', 
        flexDirection: 'column' // Đặt chiều dọc cho card
      }}
    >
      <span className="tp-coupon-border"></span>
      <div className="tp-coupon-item-left d-sm-flex align-items-center" style={{ flex: 1 }}>
        <div className="tp-coupon-thumb">
          <a href="#">
            <Image src={coupon.logo} alt="logo" width={120} height={120} />
          </a>
        </div>
        <div className="tp-coupon-content">
          <h3 className="tp-coupon-title" style={{ color: '#4CAF50', marginBottom: '0' }}>{coupon.title}</h3>
          <p className="tp-coupon-offer mb-15">
            <span style={{ fontWeight: 'bold', color: '#FF5722' }}>{coupon.discountPercentage}%</span> Giảm giá cho cây
          </p>
          <div className="tp-coupon-countdown" style={{ marginTop: '10px' }}>
            {dayjs().isAfter(dayjs(coupon.endTime)) ? (
              <div className="tp-coupon-countdown-inner">
                <ul>
                  <li>
                    <span>{0}</span> Ngày
                  </li>
                  <li>
                    <span>{0}</span> Giờ
                  </li>
                  <li>
                    <span>{0}</span> Phút
                  </li>
                  <li>
                    <span>{0}</span> Giây
                  </li>
                </ul>
              </div>
            ) : (
              <OfferTimer expiryTimestamp={new Date(coupon.endTime)} />
            )}
          </div>
        </div>
      </div>
      <div className="tp-coupon-item-right pl-20" style={{ flexShrink: 0, marginLeft: '20px' }}>
        <div className="tp-coupon-status mb-10 d-flex align-items-center">
          <h4 style={{ marginBottom: '0' }}>
            Coupon{" "}
            <span
              className={
                dayjs().isAfter(dayjs(coupon.endTime)) ? "in-active" : "active"
              }
              style={{ color: dayjs().isAfter(dayjs(coupon.endTime)) ? 'red' : 'green' }} // Thay đổi màu sắc cho trạng thái
            >
              {dayjs().isAfter(dayjs(coupon.endTime)) ? "Không hoạt động" : "Hoạt động"}
            </span>
          </h4>
          <div className="tp-coupon-info-details">
            <span>
              <InfoDetails />
            </span>
            <div className="tp-coupon-info-tooltip transition-3">
              <p>
                *Mã coupon này sẽ áp dụng cho{" "}
                <span>sản phẩm cây cối</span> và khi bạn mua hàng trên <span>${coupon.minimumAmount}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="tp-coupon-date">
          <CopyToClipboard
            text={coupon.couponCode}
            onCopy={() => handleCopied(coupon.couponCode)}
          >
            <button style={{ backgroundColor: '#4CAF50', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '5px' }}>
              {copied && coupon.couponCode === copiedCode ? (
                <span>Đã sao chép!</span>
              ) : (
                <span>{coupon.couponCode}</span>
              )}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default CouponItem;
