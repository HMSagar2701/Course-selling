// components/SignInForm.jsx
import React from 'react';

const SignInForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-5">
      <h2 className="text-3xl font-bold mb-5">Sign In</h2>
      <form className="w-full max-w-xs">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-700 bg-gray-800 text-white rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border border-gray-700 bg-gray-800 text-white rounded"
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-700 hover:bg-blue-600 rounded text-white transition duration-200 ease-in-out shadow-lg"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
