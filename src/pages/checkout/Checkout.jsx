import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Swal from "sweetalert2";

const Checkout = () => {
  const location = useLocation();
  const bookingData = location.state || {};

  // Controlled form states
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [alternateNumber, setAlternateNumber] = useState("");

  const [showQRCode, setShowQRCode] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handlePaymentClick = () => {
  if (!email.trim()) {
    Swal.fire({
      icon: "error",
      title: "Email Required",
      text: "Please enter your email address before proceeding.",
    });
    return;
  }
  if (!fullname.trim()) {
    Swal.fire({
      icon: "error",
      title: "Name Required",
      text: "Please enter your name before proceeding.",
    });
    return;
  }

  if (!phoneNumber.trim()) {
    Swal.fire({
      icon: "error",
      title: "Phone Number Required",
      text: "Please enter your phone number before proceeding.",
    });
    return;
  }

  setShowQRCode(true);
};

const handleMarkAsPaid = async () => {
  // Get form values (you can use refs or controlled inputs)
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phonenumber").value.trim();
  const alternatePhone = document.getElementById("alternatenumber").value.trim();

  if (!email || !phone) {
    Swal.fire("Validation Error", "Email and Phone Number are required!", "warning");
    return;
  }

  const payload = {
    fullname,
    email,
    phone,
    alternatePhone,
    from: bookingData.from,
    to: bookingData.to,
    departTime: bookingData.departTime,
    selectedSeats: bookingData.selectedSeats,
    amount: bookingData.amount,
  };

  try {
    const response = await fetch("http://localhost:5000/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    
    const result = await response.json();
    debugger;
    if (!response.ok) {
      // Show error message from backend if available
      Swal.fire("Booking Failed", result.error || "Failed to book ticket", "error");
      return;
    }

    Swal.fire("Success", result.message || "Your ticket is successfully booked!", "success");
    setIsPaid(true);
    setShowQRCode(false);

  } catch (error) {
    Swal.fire("Booking Failed", error.message || "Failed to book ticket", "error");
  }
};


  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] my-[8ch] space-y-10 relative">
      <div className="grid grid-cols-5 gap-16 items-start">
        {/* Passenger Info Form */}
        <div className="col-span-3 space-y-7 pr-20">
          <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
            Passenger Information
          </h2>
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div>
              <label htmlFor="fullname" className="block mb-2 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="Please enter fullname"
                className="w-full bg-neutral-200/60 dark:bg-neutral-900/60 px-3 py-2 border rounded-md"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="e.g. gbusholiday@gmail.com"
                className="w-full bg-neutral-200/60 dark:bg-neutral-900/60 px-3 py-2 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <small className="text-xs text-neutral-500 dark:text-neutral-600">
                You will get your ticket via this email.
              </small>
            </div>
            <div>
              <label htmlFor="phonenumber" className="block mb-2 font-semibold">
                Phone No.
              </label>
              <input
                type="tel"
                id="phonenumber"
                placeholder="e.g. +91 1234567890"
                className="w-full bg-neutral-200/60 dark:bg-neutral-900/60 px-3 py-2 border rounded-md"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="alternatenumber"
                className="block mb-2 font-semibold"
              >
                Alternate Phone No.
              </label>
              <input
                type="tel"
                id="alternatenumber"
                placeholder="e.g. +91 9876543210"
                className="w-full bg-neutral-200/60 dark:bg-neutral-900/60 px-3 py-2 border rounded-md"
                value={alternateNumber}
                onChange={(e) => setAlternateNumber(e.target.value)}
              />
            </div>
          </form>
        </div>

        {/* Booking Summary */}
        <div className="col-span-2 space-y-8">
          <div className="bg-neutral-200/50 dark:bg-neutral-900/70 rounded-md py-5 px-7">
            <h2 className="text-xl text-center font-medium border-b-2 pb-3 mb-4">
              Your Booking Status
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">From:</span>
                <span>
  {(bookingData.from && bookingData.from.charAt(0).toUpperCase() + bookingData.from.slice(1).toLowerCase()) || "Delhi"}
</span>

              </div>
              <div className="flex justify-between">
                <span className="font-medium">To:</span>
                <span>
  {(bookingData.to && bookingData.to.charAt(0).toUpperCase() + bookingData.to.slice(1).toLowerCase()) || "Hamirpur"}
</span>

              </div>
              <div className="flex justify-between">
                <span className="font-medium">Depart:</span>
                <span>{bookingData.departTime || "7:00 AM"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Seats:</span>
                <span>
                  {Array.isArray(bookingData.selectedSeats)
                    ? bookingData.selectedSeats.join(", ")
                    : bookingData.selectedSeats || "1"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Amount:</span>
                <span>₹{bookingData.amount || 0}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handlePaymentClick}
            disabled={isPaid}
            className={`w-full px-8 h-12 ${
              isPaid ? "bg-violet-700 cursor-not-allowed" : "bg-violet-600"
            } text-white text-base rounded-md flex items-center justify-center gap-x-2`}
          >
            {isPaid ? "Payment Completed" : "Proceed To Pay"}{" "}
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* QR Code Modal */}
{showQRCode && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4 sm:p-6 w-[90%] max-w-xs relative">
      <button
        onClick={() => setShowQRCode(false)}
        className="absolute top-2 right-3 text-neutral-500 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white text-xl font-bold"
      >
        ×
      </button>
      <h2 className="text-lg font-medium text-center mb-4">
        Scan to pay QR Code
      </h2>
      <div className="mb-5 flex justify-center">
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=payment"
          alt="QR Code"
          className="w-32 h-32"
        />
      </div>

      {/* Payment Options */}
      <div className="mb-5 space-y-3">
        {/* Google Pay (using fa-mobile-screen-button as placeholder) */}
        <button
          onClick={() => alert('Google Pay selected')}
          className="flex items-center justify-center w-full bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 rounded-md py-2 text-lg text-gray-800 dark:text-white"
        >
          <i className="fa-solid fa-mobile-screen-button mr-3 text-2xl"></i>
          Pay with Google Pay
        </button>

        {/* PayPal */}
        <button
          onClick={() => alert('PayPal selected')}
          className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 rounded-md py-2 text-lg text-white"
        >
          <i className="fa-brands fa-paypal mr-3 text-2xl"></i>
          Pay with PayPal
        </button>

        {/* Paytm (using fa-wallet as placeholder) */}
        <button
          onClick={() => alert('Paytm selected')}
          className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 rounded-md py-2 text-lg text-white"
        >
          <i className="fa-solid fa-wallet mr-3 text-2xl"></i>
          Pay with Paytm
        </button>
      </div>

      <button
        onClick={handleMarkAsPaid}
        className="w-full bg-violet-600 text-white rounded-md py-2 text-lg"
      >
        Mark as Paid
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Checkout;
