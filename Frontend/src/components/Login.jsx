import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

export default function Login() {
  let navigation = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/User/Login", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Successfully LoggedIn");
          navigation('/')
          window.location.reload();
        }
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          alert("error:" + err.response.data.message);
        }
      });
  };

  return (
    <>
    <div className="h-screen flex items-center justify-center">
      <div className="border-[3px] shadow-md p-5 rounded-md w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
             to='/'
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg mb-6">Login</h3>
            <div>
              <label className="ml-3" htmlFor="Email">
                Email
              </label>
              <br />
              <input
                className="border-black-800 border ml-5 mb-3"
                type="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
              />{" "}
              <br />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <br />
            <label className="ml-3" htmlFor="Password">
              Password
            </label>
            <br />
            <input
              className="ml-5 border mb-3"
              type="password"
              placeholder="Enter Your Password"
              {...register("password", { required: true })}
            />{" "}
            <br />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
            <div className="flex p-4 justify-between">
              <button
                type="submit"
                className="bg-pink-500 px-3 py-2 rounded-md"
              >
                Login
              </button>
              <p>
                Not Registered Yet?{" "}
                <Link to="/Singup" className="text-pink-500">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
