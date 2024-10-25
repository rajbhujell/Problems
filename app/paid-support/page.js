"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Paid() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numberError, setNumberError] = useState("");

  const handleTextareaFocus = () => {
    console.log("Textarea focused");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^98\d{8}$/;
    const repeatedDigitsRegex = /^(98)(\d)\2{7}$/;

    if (!phoneRegex.test(phoneNumber)) {
      return "Number must start with 98 and have 10 digits.";
    }
    if (repeatedDigitsRegex.test(phoneNumber)) {
      return "Number can't be repetitive like 9800000000 or 9811111111.";
    }
    return "";
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Validate number
    const phoneError = validatePhoneNumber(number);
    if (phoneError) {
      setNumberError(phoneError);
      return;
    }

    setIsSending(true);
    const templateParams = {
      message,
      name,
      number,
      to_email: "work.brajbhujel@gmail.com",
    };

    try {
      const response = await emailjs.send(
        "service_xuf4wa6",
        "template_9e4dpy4",
        templateParams,
        "v_itJHKWuvJAQCcsS"
      );
      console.log("Email sent successfully:", response);
      setStatus("Your message flew through the internet tubes! 📨");
      setMessage("");
      setName("");
      setNumber("");
    } catch (err) {
      console.error("Error sending email:", err);
      setStatus(
        "Oops, something went wrong! Did the email elves take a break?"
      );
    } finally {
      setIsSending(false);
      closeModal();
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center bg-black p-5 pt-20">
        <h1 className="text-5xl font-semibold text-center text-white mb-8 gradient-text">
          Choose Your Support
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Rs 100 Support */}
          <section
            aria-labelledby="rs100-support-title"
            className="bg-gray-900 border border-gray-700 shadow-[0_4px_30px_rgba(0,0,0,0.8)] rounded-lg p-6 w-full max-w-xs flex flex-col"
          >
            <h2
              id="rs100-support-title"
              className="text-xl font-semibold mb-4 text-gray-200"
            >
              Rs 100 Support
            </h2>
            <p className="mb-4 text-gray-400">
              Give us a hundred bucks, and we’ll send you an email faster than a
              hyperactive squirrel on caffeine! 🐿️
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                openModal();
              }}
              aria-label="Rs 100 Support Form"
            >
              <textarea
                className="w-full p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-800 text-white"
                rows="4"
                aria-label="Type your message here"
                placeholder="Type your message here..."
                value={message}
                onFocus={handleTextareaFocus}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button
                type="submit"
                className="mt-4 w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600"
                disabled={isSending}
              >
                {isSending ? "Launching into cyberspace..." : "Send Message"}
              </button>
            </form>
            {status && (
              <p
                className={`mt-2 ${
                  status.includes("Oops") ? "text-red-500" : "text-green-500"
                }`}
              >
                {status}
              </p>
            )}
          </section>

          {/* Pro Support */}
          <section
            aria-labelledby="pro-support-title"
            className="bg-gray-900 border border-gray-700 shadow-[0_4px_30px_rgba(0,0,0,0.8)] rounded-lg p-6 w-full max-w-xs flex flex-col"
          >
            <h2
              id="pro-support-title"
              className="text-xl font-semibold mb-4 text-gray-200"
            >
              Pro Support
            </h2>
            <p className="mb-4 text-gray-400">
              For Rs 500, call us and we'll give you life advice that'll make
              you think, "Why didn’t I just Google that?" 🤔
            </p>
            <a
              href="tel:9820362353"
              className="mt-4 w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 text-center"
              aria-label="Call Us for Pro Support"
            >
              Call Us
            </a>
          </section>

          {/* Premium Support */}
          <section
            aria-labelledby="premium-support-title"
            className="bg-gray-900 border border-gray-700 shadow-[0_4px_30px_rgba(0,0,0,0.8)] rounded-lg p-6 w-full max-w-xs flex flex-col"
          >
            <h2
              id="premium-support-title"
              className="text-xl font-semibold mb-4 text-gray-200"
            >
              Premium Support
            </h2>
            <p className="mb-4 text-gray-400">
              For Rs 2000, we'll provide emotional support so strong, you might
              cry tears of joy (or confusion) 😢💸
            </p>
            <a
              href="https://instagram.com/rajbhujelll"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 text-center"
              aria-label="Get Premium Support via Instagram"
            >
              Get Premium Support
            </a>
          </section>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-xs w-full space-y-5">
            <h2 className="text-2xl font-semibold text-gray-200 text-center">
              Just a little more info...
            </h2>
            <p className="text-gray-400 text-sm text-center leading-relaxed">
              Care to drop your name and number? I promise, it’s not just for a
              flirty text later... but that might happen too. 😉 It’s a must,
              though!
            </p>

            <input
              type="text"
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-800 text-white"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-800 text-white"
              placeholder="Your Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            {numberError && (
              <p className="text-red-500 text-sm">{numberError}</p>
            )}

            <button
              onClick={sendEmail}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition-all"
            >
              {isSending ? "Sending..." : "Send Info"}
            </button>
            <button
              onClick={closeModal}
              className="w-full bg-gray-700 text-white py-2.5 rounded-lg hover:bg-gray-600 transition-all mt-3"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
