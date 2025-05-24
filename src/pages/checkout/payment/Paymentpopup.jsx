import React from "react";
import { FaTimes } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

const PaymentPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* Popup Container */}
      <div className="relative bg-white w-[95%] max-w-md rounded-lg shadow-lg z-50 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white">
          <div>
            <h2 className="text-lg font-semibold">Acme Corp</h2>
            <p className="text-xs opacity-80">Razorpay Trusted Business</p>
          </div>
          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Payment Options */}
        <div className="p-4 space-y-3">
          <p className="text-sm font-semibold">Pay Using Axis Bank</p>

          <div className="border rounded-md px-3 py-2">
            <div className="flex justify-between items-center py-2">
              <span className="font-medium">Axis Bank Netbanking</span>
              <MdKeyboardArrowRight />
            </div>
            <hr />
            <div className="flex justify-between items-center py-2">
              <span className="font-medium">Pay Via Card</span>
              <MdKeyboardArrowDown />
            </div>
          </div>

          <p className="text-sm font-semibold pt-2">All Payment Options</p>
          {[
            { name: "UPI", icons: "🌐🟣" },
            { name: "Cards", icons: "💳" },
            { name: "Netbanking", icons: "🏦" },
            { name: "EMI", icons: "📆" },
            { name: "Wallet", icons: "👛" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border rounded-md px-3 py-2 flex justify-between items-center"
            >
              <span className="font-medium">{item.name}</span>
              <MdKeyboardArrowRight />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t flex justify-between items-center">
          <div className="text-sm">
            <p className="font-semibold">₹6,000</p>
            <p className="text-xs text-gray-500">View Details</p>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
