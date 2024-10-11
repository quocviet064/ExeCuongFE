import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
// internal
import { CloseEye, OpenEye } from "@/svg";
import ErrorMsg from "../common/error-msg";
import { notifyError, notifySuccess } from "@/utils/toast";
import { useRegisterUserMutation } from "@/redux/features/auth/authApi";

// schema
const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  remember: Yup.bool()
    .oneOf([true], "You must agree to the terms and conditions to proceed.")
    .label("Terms and Conditions"),
});

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [registerUser, {}] = useRegisterUserMutation();
  const router = useRouter();
  const { redirect } = router.query;
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      // // Notify user that registration is in progress
      // notifyInfo("Đang đăng ký, vui lòng chờ...");

      // Send registration request
      const result = await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        // Notify specific error if there is an error response
        notifyError(`Đăng ký thất bại. Lý do: ${result.error.data.message}`);
      } else if (result?.data?.status === "failed") {
        // Notify if status is "failed"
        notifyError(`Đăng ký thất bại. Lý do: ${result.data.message}`);
      } else {
        // Notify success
        notifySuccess(`Đăng ký thành công. ${result?.data?.message}`);
        // Optionally redirect after successful registration
        // router.push(redirect || "/");
      }
    } catch (err) {
      // Notify unexpected errors
      notifyError(
        "Có lỗi xảy ra trong quá trình đăng ký. Vui lòng thử lại sau."
      );
    } finally {
      // Reset form in any case
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="tp-login-input-wrapper">
        <div className="tp-login-input-box">
          <div className="tp-login-input">
            <input
              {...register("name", { required: `Name is required!` })}
              id="name"
              name="name"
              type="text"
              placeholder="Nguyen Van A..."
            />
          </div>
          <div className="tp-login-input-title">
            <label htmlFor="name">Họ và tên</label>
          </div>
          <ErrorMsg msg={errors.name?.message} />
        </div>
        <div className="tp-login-input-box">
          <div className="tp-login-input">
            <input
              {...register("email", { required: `Bạn cần nhập email!` })}
              id="email"
              name="email"
              type="email"
              placeholder="greenscape@mail.com"
            />
          </div>
          <div className="tp-login-input-title">
            <label htmlFor="email">Email</label>
          </div>
          <ErrorMsg msg={errors.email?.message} />
        </div>
        <div className="tp-login-input-box">
          <div className="p-relative">
            <div className="tp-login-input">
              <input
                {...register("password", {
                  required: `Bạn cần nhập mật khẩu!`,
                })}
                id="password"
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="tối thiểu 6 ký tự..."
              />
            </div>
            <div className="tp-login-input-eye" id="password-show-toggle">
              <span className="open-eye" onClick={() => setShowPass(!showPass)}>
                {showPass ? <CloseEye /> : <OpenEye />}
              </span>
            </div>
            <div className="tp-login-input-title">
              <label htmlFor="password">Mật khẩu</label>
            </div>
          </div>
          <ErrorMsg msg={errors.password?.message} />
        </div>
      </div>
      <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
        {/* <div className="tp-login-remeber">
          <input
            {...register("remember", {
              required: `Terms and Conditions is required!`,
            })}
            id="remember"
            name="remember"
            type="checkbox"
          />
          <label htmlFor="remember">
            I accept the terms of the Service & <a href="#">Privacy Policy</a>.
          </label>
          <ErrorMsg msg={errors.remember?.message} />
        </div> */}
      </div>
      <div className="tp-login-bottom">
        <button type="submit" className="tp-login-btn w-100">
          Đăng Ký
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
