import React from "react";

function SingleNav({ active = false, id, title, icon }) {
  return (
    <button
      className={`nav-link ${active ? "active" : ""}`}
      id={`nav-${id}-tab`}
      data-bs-toggle="tab"
      data-bs-target={`#nav-${id}`}
      type="button"
      role="tab"
      aria-controls={id}
      aria-selected={active ? "true" : "false"}
    >
      <span>
        <i className={icon}></i>
      </span>
      {title}
    </button>
  );
}

const ProfileNavTab = () => {
  return (
    <nav>
      <div
        className="nav nav-tabs tp-tab-menu flex-column"
        id="profile-tab"
        role="tablist"
      >
        <SingleNav
          active={true} // Đảm bảo tab này được đánh dấu là active
          id="information"
          title="Thông tin cá nhân" // Tiêu đề đã được dịch sang tiếng Việt
          icon="fa-regular fa-circle-info"
        />
        <SingleNav
          id="profile"
          title="Đơn hàng" // Tiêu đề đã được dịch sang tiếng Việt
          icon="fa-regular fa-user-pen"
        />
        <SingleNav
          id="order"
          title="Đơn hàng của tôi" // Tiêu đề đã được dịch sang tiếng Việt
          icon="fa-light fa-clipboard-list-check"
        />
        <SingleNav
          id="password"
          title="Đổi mật khẩu" // Tiêu đề đã được dịch sang tiếng Việt
          icon="fa-regular fa-lock"
        />
        <SingleNav
          id="points"
          title="Điểm Tích Lũy" // Tiêu đề đã được dịch sang tiếng Việt
          icon="fa-solid fa-star"
        />
        <SingleNav
          id="vouchers"
          title="Voucher" // Tiêu đề đã được dịch sang tiếng Việt
          icon="fa-solid fa-tag"
        />
        {/* Thêm tab cho thông tin ngân hàng */}
        {/* <SingleNav
          id="bank"
          title="Thông Tin Ngân Hàng"
          icon="fa-solid fa-university"
        /> */}
      </div>
    </nav>
  );
};

export default ProfileNavTab;