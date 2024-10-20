"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./ui/globalStyles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Loader from "./components/loader";
// import Loader from "./components/loader2";
import { AuthProvider } from "./context/authContext";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = async () => {
      // setLoading(true);
      // await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    handleRouteChange();

    return () => {};
  }, [router]);

  return (
    <AuthProvider>
      <html lang="en">
        <body className="layoutContainer">
          {loading && <Loader />}
          {!loading && (
            <>
              {/* <Header /> */}
              {children}
              {/* <Footer /> */}
            </>
          )}
        </body>
      </html>
    </AuthProvider>
  );
}
