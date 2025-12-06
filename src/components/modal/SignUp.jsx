import React from "react";

function SignUpForm({ toggleModal, pullLogIn }) {
  return (
    <div>
      <div className="flex bg-primary rounded-lg p-1 flex-col gap-2">
        <label htmlFor="userName" className="font-semibold">
          Name
        </label>
        <input
          id="userName"
          type="text"
          placeholder="Enter your Name"
          className="border rounded-lg pl-2"
        />
      </div>
      <div className="flex bg-primary rounded-lg p-1 my-2 flex-col gap-2">
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
      <div className="flex bg-primary rounded-lg p-1  flex-col mb-2 gap-2">
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
        <button onClick={pullLogIn}>Log in</button>
        <button
          className="bg-white text-white w-[50%] self-center rounded-lg border cursor-pointer bg-linear-to-r from-green-600 to-cyan-500 hover:bg-primary font-postnobills"
          onClick={toggleModal}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
export default SignUpForm;
