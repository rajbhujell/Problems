"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: credentials.email,
        password: credentials.password,
        callbackUrl: "/dashboard",
      });

      if (result.error) {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Login failed, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signIn("google", { callbackUrl: "/dashboard" }).finally(() =>
      setLoading(false)
    );
  };

  return (
    <>
      <Header />
      <Head>
        <title>Login - Secure Access</title>
        <meta name="description" content="Login to your account securely" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
        <div
          style={{
            width: "100%",
            maxWidth: "28rem",
            padding: "2rem",
            backgroundColor: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 className="text-2xl font-bold text-center text-black mb-4">
            Sign In
          </h1>
          <p className="text-sm text-center text-gray-600 mb-4">
            Enter your email and password to access your account securely.
          </p>

          <button
            onClick={handleGoogleSignIn}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid black",
              backgroundColor: "white",
              color: "black",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
            }}
            disabled={loading}
          >
            <img
              src="/google.png"
              alt="Google"
              style={{
                marginRight: "0.5rem",
                width: "1.25rem",
                height: "1.25rem",
              }}
            />
            Sign in with Google
          </button>

          <div className="flex items-center justify-center mb-6">
            <hr className="w-full border-t border-gray-300" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="w-full border-t border-gray-300" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                }}
                value={credentials.email}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                }}
                value={credentials.password}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            {error && (
              <p className="text-sm text-center text-red-500">{error}</p>
            )}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                backgroundColor: "black",
                color: "white",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
              }}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="mt-6 text-sm text-center">
            <Link href="/forgot_password" legacyBehavior>
              <a className="text-gray-600 hover:text-black text-sm">
                Forgot your password?
              </a>
            </Link>
            <span className="mx-2 text-gray-600 text-sm">|</span>
            <Link href="/signup" legacyBehavior>
              <a className="text-gray-600 hover:text-black text-sm">
                Don’t have an account? Sign up
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
