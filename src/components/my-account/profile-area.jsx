import React from "react";
import ProfileNavTab from "./profile-nav-tab";
import ProfileShape from "./profile-shape";
import ProfleOrders from "./profile-orders";
import ProfileInfo from "./profile-info";
import ChangePassword from "./change-password";
import MyOrders from "./my-orders";
import ProfilePoint from "./profile-point"; // Import ProfilePoint
import ProfileVoucher from "./profile-voucher"; // Import ProfileVoucher
// import ProfileBank from "./profile_bank"; // Import ProfileBank

const ProfileArea = ({orderData}) => {
  return (
    <>
      <section className="profile__area pt-120 pb-120">
        <div className="container">
          <div className="profile__inner p-relative">
            <ProfileShape />
            <div className="row">
              <div className="col-xxl-4 col-lg-4">
                <div className="profile__tab mr-40">
                  <ProfileNavTab />
                </div>
              </div>
              <div className="col-xxl-8 col-lg-8">
                <div className="profile__tab-content">
                  <div className="tab-content" id="profile-tabContent">
                    
                  <div
                      className="tab-pane fade show active" // Đảm bảo tab này có lớp "show active"
                      id="nav-information"
                      role="tabpanel"
                      aria-labelledby="nav-information-tab"
                    >
                      <ProfileInfo />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <ProfleOrders orderData={orderData} />
                    </div>


                    <div
                      className="tab-pane fade"
                      id="nav-password"
                      role="tabpanel"
                      aria-labelledby="nav-password-tab"
                    >
                      <ChangePassword />
                    </div>

                    <div
                      className="tab-pane fade"
                      id="nav-order"
                      role="tabpanel"
                      aria-labelledby="nav-order-tab"
                    >
                      <MyOrders orderData={orderData} />
                    </div>

                    <div
                      className="tab-pane fade"
                      id="nav-points"
                      role="tabpanel"
                      aria-labelledby="nav-points-tab"
                    >
                      <ProfilePoint />
                    </div>

                    <div
                      className="tab-pane fade"
                      id="nav-vouchers"
                      role="tabpanel"
                      aria-labelledby="nav-vouchers-tab"
                    >
                      <ProfileVoucher />
                    </div>

                    {/* <div
                      className="tab-pane fade"
                      id="nav-bank"
                      role="tabpanel"
                      aria-labelledby="nav-bank-tab"
                    >
                      <ProfileBank />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileArea;