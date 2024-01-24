import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api/api";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../../store/actions/userActions";
import { FETCH_STATES } from "../../store/reducers/productReducers";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const loading = useSelector(
    (s) => s.user.fetchState === FETCH_STATES.fetching
  );
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const loginInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      dispatch(loginUser(loginInfo, navigate));
    } catch (error) {
      setShowAlert(true);
    }
  };

  return (
    <div className="flex mx-auto justify-center my-20">
      {showAlert && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
          role="alert"
        >
          <p className="font-bold">Authentication failed</p>
          <p>Invalid email or password. Please try again.</p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="mx-auto flex flex-wrap justify-center ">
          <div className="w-full px-6 -mx-3 mb-6 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              e-mail
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-wrap -mx-3 mb-6 w-full  px-3   ">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  errors.password ? "border-red-500" : "border-gray-200"
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="grid-password"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex mx-auto justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 text-xl px-12 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-8"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
