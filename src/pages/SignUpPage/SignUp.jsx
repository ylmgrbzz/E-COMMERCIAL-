import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const baseURL = "https://workintech-fe-ecommerce.onrender.com";
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();
  const watchedValues = watch();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(`${baseURL}/roles`);
        setRoles(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error.message);
      }
    };

    fetchRoles();
  }, []);

  const onSubmit = async (data) => {
    console.log("data", data);
    console.log("watchedValues", watchedValues);

    try {
      let formattedData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: parseInt(data.role),
        store: {},
      };

      if (watch("role") === "2") {
        formattedData = {
          ...formattedData,
          store: {
            name: data.storeName,
            phone: data.storePhone,
            tax_no: data.storeTaxId,
            bank_account: data.storeBankAccount,
          },
        };
      }

      const response = await axios.post(`${baseURL}/signup`, formattedData);
      console.log("response", response);

      alert(
        "Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklamanız gerekiyor!"
      );
      navigate("/");
    } catch (error) {
      alert("Gönderme işlemi başarısız oldu. Hata: " + error.message);
    }
  };

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div
        class={` ${
          watch("role") === "2" ? "mt-28 mb-28" : ""
        } flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0`}
      >
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <Controller
                name="name"
                control={control}
                rules={{
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Your name must contain at least 3 characters.",
                  },
                }}
                render={({ field }) => (
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
         focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder="Enter your name"
                      {...field}
                      minLength={3} // Minimum length validation
                      required=""
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Enter a valid email address.",
                  },
                }}
                render={({ field }) => (
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
         focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder="name@company.com"
                      {...field}
                      required=""
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                )}
              />

              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must include at least one lowercase letter, one uppercase letter, one number, and one special character.",
                  },
                }}
                render={({ field }) => (
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className={`${
                        errors.password ? "border-red-500" : "border-gray-300"
                      } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
       focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder="••••••••"
                      {...field}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                )}
              />

              <Controller
                name="confirm-password"
                control={control}
                rules={{
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords must match.",
                }}
                render={({ field }) => (
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      className={`${
                        errors.confirmPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
       focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder="••••••••"
                      {...field}
                      required=""
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                )}
              />
              <Controller
                name="role"
                control={control}
                rules={
                  watch("role") !== "1" ? { required: "Role is required" } : {}
                }
                render={({ field }) => (
                  <div>
                    <label
                      htmlFor="role"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Role
                    </label>
                    <select
                      {...field}
                      className={`${
                        errors.role ? "border-red-500" : "border-gray-300"
                      } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
         focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      required=""
                    >
                      <option value="" disabled selected>
                        Select a role
                      </option>
                      {roles.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      ))}
                    </select>
                    {errors.role && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.role.message}
                      </p>
                    )}
                  </div>
                )}
              />

              {watch("role") === "2" && (
                <>
                  <Controller
                    name="storeName"
                    control={control}
                    rules={{
                      required: "Store Name is required",
                      minLength: {
                        value: 3,
                        message:
                          "Store Name must contain at least 3 characters.",
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <label
                          htmlFor="storeName"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Store Name
                        </label>
                        <input
                          type="text"
                          id="storeName"
                          className={`${
                            errors.storeName
                              ? "border-red-500"
                              : "border-gray-300"
                          } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
     focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
      dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                          placeholder="Enter Store Name"
                          {...field}
                          minLength={3} // Minimum length validation
                          required=""
                        />
                        {errors.storeName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.storeName.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  <Controller
                    name="storePhone"
                    control={control}
                    rules={{
                      required: "Store Phone is required",
                      pattern: {
                        value: /[0-9]{10}/,
                        message: "Enter a valid Turkish phone number.",
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <label
                          htmlFor="storePhone"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Store Phone
                        </label>
                        <input
                          type="tel"
                          id="storePhone"
                          className={`${
                            errors.storePhone
                              ? "border-red-500"
                              : "border-gray-300"
                          } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
     focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
      dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                          placeholder="Enter Store Phone"
                          {...field}
                          pattern="[0-9]{10}"
                          required=""
                        />
                        {errors.storePhone && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.storePhone.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  <Controller
                    name="storeTaxId"
                    control={control}
                    rules={{
                      required: "Store Tax ID is required",
                      // pattern: {
                      //   value: /^T[0-9]{9,10}$/,
                      //   message:
                      //     "Enter a valid Store Tax ID matching the pattern TXXXXVXXXXXX.",
                      // },
                    }}
                    render={({ field }) => (
                      <div>
                        <label
                          htmlFor="storeTaxId"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Store Tax ID
                        </label>
                        <input
                          type="text"
                          id="storeTaxId"
                          className={`${
                            errors.storeTaxId
                              ? "border-red-500"
                              : "border-gray-300"
                          } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
     focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
      dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                          placeholder="TXXXXVXXXXXX"
                          {...field}
                          required=""
                        />
                        {errors.storeTaxId && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.storeTaxId.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  <Controller
                    name="storeBankAccount"
                    control={control}
                    rules={{
                      required: "Store Bank Account is required",
                      pattern: {
                        value:
                          /^[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}([A-Z0-9]?){0,16}$/,
                        message:
                          "Enter a valid IBAN for the Store Bank Account.",
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <label
                          htmlFor="storeBankAccount"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Store Bank Account
                        </label>
                        <input
                          type="text"
                          id="storeBankAccount"
                          className={`${
                            errors.storeBankAccount
                              ? "border-red-500"
                              : "border-gray-300"
                          } bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
     focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
      dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                          placeholder="Enter Store Bank Account (IBAN)"
                          {...field}
                          required=""
                        />
                        {errors.storeBankAccount && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.storeBankAccount.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </>
              )}

              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3
                         focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="terms"
                    class="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <span class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Terms and Conditions
                    </span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
