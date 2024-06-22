import React from "react";
import { Link } from "react-router-dom";
// import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async(data) => {
   const userinfo={
      name:data.name,
      email:data.email,
      password:data.password
    }
await axios.post("http://localhost:4001/User/Signup",userinfo)
.then((res)=>{
  console.log(res.data)
  if(res.data){
    alert("You are registered")
  }
  localStorage.setItem("user",JSON.stringify(res.data))
}).catch((err)=>{
  if(err.response){
    console.log(err)
    alert("error:" + err.response.data.message)
  }
})
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="border-[3px] shadow-md p-5 rounded-md w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg mb-6">Signup</h3>
              <div>
                <label className="ml-3" htmlFor="name">
                  Name
                </label>
                <br />
                <input
                  className="border-black-800 border ml-5"
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                />{" "}
                <br />
                {errors.name && <span className="text-red-500">This field is required</span>}
              </div>
              <br />
              <label className="ml-3" htmlFor="Email">
                Email
              </label>
              <br />
              <input
                className="ml-5 border mb-3"
                type="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-red-500">This field is required</span>}
              <br />
              <label className="ml-3" htmlFor="Password">
                Password
              </label>
              <br />
              <input
                className="ml-5 border"
                type="password"
                placeholder="Enter Your Password"
                {...register("password", { required: true })}
              />{" "}
              <br />
              {errors.password && <span className="text-red-500">This field is required</span>}
              <div className="flex p-4 justify-between">
                <button className="bg-pink-500 px-3 py-2 rounded-md text-white mr-2">
                  Signup
                </button>
                <p>
                  Have account ?{" "}
                  <Link
                    className="text-pink-500"
                   to='/Login' 
                   >
                   
                    Login
                  </Link>
                  {/* <Login /> */}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
