import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate email sent
    setSubmitted(true);

    // TODO: Connect with Node.js backend using fetch/axios to trigger email
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Forgot Password</h2>
        
        {submitted ? (
          <p className="text-green-600 text-center">
            If this email exists, a reset link has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email address</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Send Reset Link
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
