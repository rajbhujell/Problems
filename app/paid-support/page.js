"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Paid() {
  const [message, setMessage] = useState("");

  const handleTextareaFocus = () => {
    console.log("Textarea focused");
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    const templateParams = {
      message, // The message from the textarea
      to_email: "work.brajbhujel@gmail.com", // Your email
    };

    emailjs
      .send(
        "service_xuf4wa6",
        "template_9e4dpy4",
        templateParams,
        "v_itJHKWuvJAQCcsS"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setMessage(""); // Clear the textarea after sending
      })
      .catch((err) => {
        console.error("Error sending email:", err);
      });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-background-color p-5 pt-20">
        <h1 className="text-3xl font-bold text-white mb-8">
          Choose Your Support
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Rs 100 Support */}
          <div className="bg-black border border-gray-600 shadow-[0_4px_30px_rgba(255,255,255,0.1)] rounded-lg p-6 w-full max-w-xs flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">
              Rs 100 Support
            </h2>
            <p className="mb-4 text-gray-400">
              Write your heartfelt message, and we’ll send you an email faster
              than a cat on a hot tin roof!
            </p>
            <form onSubmit={sendEmail}>
              <textarea
                className="w-full p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-800 text-white"
                rows="4"
                placeholder="Type your message here..."
                value={message}
                onFocus={handleTextareaFocus}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="mt-4 w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Pro Support */}
          <div className="bg-black border border-gray-600 shadow-[0_4px_30px_rgba(255,255,255,0.1)] rounded-lg p-6 w-full max-w-xs flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">
              Pro Support
            </h2>
            <p className="mb-4 text-gray-400">
              Need immediate help? Call us for Rs 500—because who needs a
              therapist when you have us?
            </p>
            <a
              href="tel:9820362353"
              className="mt-4 w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 text-center"
            >
              Call Us
            </a>
          </div>

          {/* Premium Support */}
          <div className="bg-black border border-gray-600 shadow-[0_4px_30px_rgba(255,255,255,0.1)] rounded-lg p-6 w-full max-w-xs flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">
              Premium Support
            </h2>
            <p className="mb-4 text-gray-400">
              For Rs 2000, we’ll cry with you—because sometimes, you just need a
              good sob session!
            </p>
            <a
              href="https://instagram.com/rajbhujelll"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 text-center"
            >
              Get Premium Support
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
