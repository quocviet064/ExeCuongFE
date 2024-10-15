import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTag, faPercent } from '@fortawesome/free-solid-svg-icons';

const ProfileVoucher = () => {
  const vouchers = [
    {
      id: 1,
      title: "Giảm giá 20% cho đơn hàng đầu tiên",
      description: "Nhập mã: FIRST20 khi thanh toán để nhận ưu đãi.",
      date: new Date("2023-07-01T09:00:00"),
      // icon: faTag
    },
    {
      id: 2,
      title: "Khuyến mãi mùa hè",
      description: "Giảm giá 15% cho tất cả các sản phẩm cây cảnh từ 1/7 đến 31/7.",
      date: new Date("2023-06-25T10:30:00"),
      // icon: faPercent
    },
    {
      id: 3,
      title: "Mua 2 tặng 1",
      description: "Mua 2 cây cảnh bất kỳ, tặng 1 cây cùng loại.",
      date: new Date("2023-06-20T14:00:00"),
      // icon: faTag
    },
    {
      id: 4,
      title: "Giảm giá 10% cho khách hàng thân thiết",
      description: "Áp dụng cho tất cả khách hàng đã mua hàng từ 3 lần trở lên.",
      date: new Date("2023-06-15T11:45:00"),
      // icon: faPercent
    }
  ];

  return (
    <div className="profile__voucher">
      <h3 className="mb-4">Khuyến mãi mới nhất từ GreenScape</h3>
      {vouchers.map((voucher) => (
        <div key={voucher.id} className="voucher-item mb-4 p-3" style={{border: '1px solid #e0e0e0', borderRadius: '8px'}}>
          <div className="d-flex align-items-center mb-2">
            {/* <FontAwesomeIcon icon={voucher.icon} className="me-2" style={{color: '#28a745'}} /> */}
            <h5 className="mb-0">{voucher.title}</h5>
          </div>
          <p className="mb-2">{voucher.description}</p>
          <small className="text-muted">
            {voucher.date.toLocaleDateString()} - {voucher.date.toLocaleTimeString()}
          </small>
        </div>
      ))}
    </div>
  );
};

export default ProfileVoucher;
