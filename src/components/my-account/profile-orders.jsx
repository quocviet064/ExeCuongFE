import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
// internal
import { Box, DeliveryTwo, Processing, Truck } from "@/svg";
import { userLoggedOut } from "@/redux/features/auth/authSlice";

const ProfileOrders = ({ orderData }) => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  
  // handle logout
  const handleLogout = () => {
    dispatch(userLoggedOut());
    router.push('/');
  };

  return (
    <div className="profile__main">
      <div className="profile__main-top pb-80">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="profile__main-inner d-flex flex-wrap align-items-center">
              <div className="profile__main-content">
                <h4 className="profile__main-title">Chào mừng ông/bà {user?.name}</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile__main-logout text-sm-end">
              <a onClick={handleLogout} className="cursor-pointer tp-logout-btn">
                Đăng xuất
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__main-info">
        <div className="row gx-3">
          <div className="col-md-3 col-sm-6">
            <div className="profile__main-info-item">
              <div className="profile__main-info-icon">
                <span>
                  <span className="profile-icon-count profile-download">{orderData?.totalDoc}</span>
                  <Box />
                </span>
              </div>
              <h4 className="profile__main-info-title">Tổng Đơn Hàng</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="profile__main-info-item">
              <div className="profile__main-info-icon">
                <span>
                  <span className="profile-icon-count profile-order">{orderData?.pending}</span>
                  <Processing />
                </span>
              </div>
              <h4 className="profile__main-info-title">Đơn Hàng Đang Chờ</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="profile__main-info-item">
              <div className="profile__main-info-icon">
                <span>
                  <span className="profile-icon-count profile-wishlist">
                    {orderData?.processing}
                  </span>
                  <Truck />
                </span>
              </div>
              <h4 className="profile__main-info-title">Đơn Hàng Đang Xử Lý</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="profile__main-info-item">
              <div className="profile__main-info-icon">
                <span>
                  <span className="profile-icon-count profile-wishlist">
                    {orderData?.delivered}
                  </span>
                  <DeliveryTwo />
                </span>
              </div>
              <h4 className="profile__main-info-title">Đơn Hàng Hoàn Thành</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOrders;