import React from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as Yup from "yup";
// internal
import ErrorMsg from '../common/error-msg';
import { EmailTwo, LocationTwo, PhoneThree, UserThree } from '@/svg';
import { useUpdateProfileMutation } from '@/redux/features/auth/authApi';
import { notifyError, notifySuccess } from '@/utils/toast';

// yup schema
const schema = Yup.object().shape({
  name: Yup.string().required().label("Tên"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().min(11).label("Số điện thoại"),
  address: Yup.string().required().label("Địa chỉ"),
  bio: Yup.string().required().min(20).label("Tiểu sử"),
});

const ProfileInfo = () => {
  const { user } = useSelector((state) => state.auth);

  const [updateProfile, {}] = useUpdateProfileMutation();
  // react hook form
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  // on submit
  const onSubmit = (data) => {
    updateProfile({
      id: user?._id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      bio: data.bio,
    }).then((result) => {
      if (result?.error) {
        notifyError(result?.error?.data?.message);
      } else {
        notifySuccess(result?.data?.message);
      }
    });
    reset();
  };

  return (
    <div className="profile__info">
      <h3 className="profile__info-title">Thông Tin Cá Nhân</h3>
      <div className="profile__info-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-xxl-6 col-md-6">
              <div className="profile__input-box">
                <div className="profile__input">
                  <input {...register("name", { required: `Tên là bắt buộc!` })} name='name' type="text" placeholder="Nhập tên của bạn" defaultValue={user?.name} />
                  <span>
                    <UserThree />
                  </span>
                  <ErrorMsg msg={errors.name?.message} />
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-md-6">
              <div className="profile__input-box">
                <div className="profile__input">
                  <input {...register("email", { required: `Email là bắt buộc!` })} name='email' type="email" placeholder="Nhập email của bạn" defaultValue={user?.email} />
                  <span>
                    <EmailTwo />
                  </span>
                  <ErrorMsg msg={errors.email?.message} />
                </div>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="profile__input-box">
                <div className="profile__input">
                  <input {...register("phone", { required: true })} name='phone' type="text" placeholder="Nhập số điện thoại của bạn" defaultValue="0123 456 7889" />
                  <span>
                    <PhoneThree />
                  </span>
                  <ErrorMsg msg={errors.phone?.message} />
                </div>
              </div>
            </div>

            {/* <div className="col-xxl-12">
              <div className="profile__input-box">
                <div className="profile__input">
                  <input {...register("address", { required: true })} name='address' type="text" placeholder="Nhập địa chỉ của bạn" defaultValue="3304 Randall Drive" />
                  <span>
                    <LocationTwo />
                  </span>
                  <ErrorMsg msg={errors.address?.message} />
                </div>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="profile__input-box">
                <div className="profile__input">
                  <textarea {...register("bio", { required: true })} name='bio' placeholder="Nhập tiểu sử của bạn" defaultValue="Hi there, this is my bio..." />
                  <ErrorMsg msg={errors.bio?.message} />
                </div>
              </div>
            </div> */}
            <div className="col-xxl-12">
              <div className="profile__btn">
                <button type="submit" className="tp-btn">Cập nhật thông tin</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileInfo;