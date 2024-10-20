"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn } from "next-auth/react";
import styles from "../ui/globalStyles/login.module.css";
import google from "../components/assets/images/google.png";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  const { login } = useAuth();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginDetails = {
      username: process.env.NEXT_PUBLIC_LOGIN_USERNAME,
      password: process.env.NEXT_PUBLIC_LOGIN_PASSWORD,
    };

    if (
      credentials.username === loginDetails.username &&
      credentials.password === loginDetails.password
    ) {
      login();
      router.push("/");
    } else {
      setError("*Invalid username or password*");
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.maincontainer}>
        <div className={styles.secondContainer}>
          <div className={styles.headContainer}>
            <h1>Login or Signup</h1>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            {error && (
              <p className="text-red-600 text-xs font-semibold">{error}</p>
            )}

            <div className={styles.inputContainer}>
              <label className={styles.label}>
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  autoComplete="username"
                  className={styles.inputField}
                />
                <span className={styles.placeholder}>Username</span>
              </label>
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.label}>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className={styles.inputField}
                />
                <span className={styles.placeholder}>Password</span>
              </label>
            </div>

            <div className={styles.passwordInfo}>
              <div className={styles.rememberPassword}>
                <input type="checkbox" />
                <label>Remember Password?</label>
              </div>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">Login</button>

            <div
              className={styles.googlelink}
              onClick={handleGoogleSignIn} // No need to pass arguments
            >
              <div>
                <Image src={google} width={25} height={25} alt="Google Logo" />
              </div>
              <p>Continue with Google</p>
            </div>

            <div className={styles.signupLink}>
              Don't have an account? <a href="/signup">Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
