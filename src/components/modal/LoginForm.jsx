import React from "react";

function LoginForm({ toggleModal, pullSignUp }) {
  return (
    <div>
      <div className="flex bg-primary rounded-lg p-1 flex-col gap-2">
        <label htmlFor="usermail" className="font-semibold">
          Email
        </label>
        <input
          id="usermail"
          type="email"
          placeholder="Enter your email"
          className="border rounded-lg pl-2"
        />
      </div>
      <div className="flex bg-primary rounded-lg p-1  flex-col my-2 gap-2">
        <label htmlFor="userpassword" className="font-semibold">
          Password
        </label>
        <input
          id="userpassword"
          type="password"
          placeholder="Enter your email"
          className="border rounded-lg pl-2"
        />
      </div>

      <div className="flex justify-between items-center">
        <button onClick={pullSignUp}>Sign Up</button>
        <button
          className="bg-white text-white w-[50%] self-center rounded-lg border cursor-pointer bg-linear-to-r from-green-600 to-cyan-500 hover:bg-[#f8f8f8] font-postnobills"
          onClick={toggleModal}
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
