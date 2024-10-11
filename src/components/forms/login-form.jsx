import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Link from "next/link";
// internal
import { CloseEye, OpenEye } from "@/svg";
import ErrorMsg from "../common/error-msg";
import { useLoginUserMutation } from "@/redux/features/auth/authApi";
import { notifyError, notifySuccess } from "@/utils/toast";

// schema
const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [loginUser, {}] = useLoginUserMutation();
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

  // onSubmit
  const onSubmit = (data) => {
    loginUser({
      email: data.email,
      password: data.password,
    }).then((data) => {
      if (data?.data) {
        // notifySuccess("Login successfully");
        notifySuccess("Đăng nhập thành công");
        router.push(redirect || "/");
      } else {
        notifyError(data?.error?.data?.error);
      }
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="tp-login-input-wrapper">
        <div className="tp-login-input-box">
          <div className="tp-login-input">
            {/* <input {...register("email", { required: `Email is required!` })} name="email" id="email" type="email" placeholder="shofy@mail.com" /> */}
            <input
              {...register("email", { required: `Email là bắt buộc!` })}
              name="email"
              id="email"
              type="email"
              placeholder="greenscape@mail.com"
            />
          </div>
          <div className="tp-login-input-title">
            {/* <label htmlFor="email">Your Email</label> */}
            <label htmlFor="email">Email của bạn</label>
          </div>
          <ErrorMsg msg={errors.email?.message} />
        </div>

        <div className="tp-login-input-box">
          <div className="p-relative">
            <div className="tp-login-input">
              <input
                {...register("password", { required: `Password is required!` })}
                id="password"
                type={showPass ? "text" : "password"}
                // placeholder="Min. 6 character"
                placeholder="Tối thiểu 6 ký tự"
              />
            </div>
            <div className="tp-login-input-eye" id="password-show-toggle">
              <span className="open-eye" onClick={() => setShowPass(!showPass)}>
                {showPass ? <CloseEye /> : <OpenEye />}
              </span>
            </div>
            <div className="tp-login-input-title">
              {/* <label htmlFor="password">Password</label> */}
              <label htmlFor="password">Mật khẩu</label>
            </div>
          </div>
          <ErrorMsg msg={errors.password?.message} />
        </div>
      </div>

      <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
        <div className="tp-login-remeber">
          <input id="remeber" type="checkbox" />
          {/* <label htmlFor="remeber">Remember me</label> */}
          <label htmlFor="remeber">Ghi nhớ tôi</label>
        </div>
        <div className="tp-login-forgot">
          {/* <Link href="/forgot">Forgot Password?</Link> */}
          <Link href="/forgot">Quên mật khẩu?</Link>
        </div>
      </div>

      <div className="tp-login-bottom">
        {/* <button type='submit' className="tp-login-btn w-100">Login</button> */}
        <button type="submit" className="tp-login-btn w-100">
          Đăng nhập
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
