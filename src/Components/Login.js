import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black bg-opacity-70 my-36 mx-auto right-0 left-0 text-white rounded">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className=" p-2 my-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className=" p-2 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className=" p-2 my-2 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p onClick={toggleSignInForm} className="py-4 cursor-pointer">
          {isSignInForm
            ? "New to Netflix? sign up Now"
            : "Already register signup now.."}
        </p>
      </form>
    </>
  );
};

export default Login;
