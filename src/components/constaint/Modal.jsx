import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose }) => {
  // This function closes the modal when the close button is clicked
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null; // If the modal is not open, return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 opacity-100 scale-100 transition-all duration-500 ease-out">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-500 ease-out">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          សូមស្វាគមន៍មកកាន់វេបសាយរបស់យើងខ្ញុំ!
        </h2>
        <p className="text-gray-600 mb-6">
          យើងរីករាយដែលមានអ្នកនៅទីนี่! ចូលរួមក្រុម Telegram របស់យើងសម្រាប់ព័ត៌មានបន្ថែម និងការពិភាក្សា។
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="https://t.me/codekhmerlearning"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition duration-300 text-center flex items-center justify-center gap-2"
          >
            <i className="fab fa-telegram-plane text-white"></i> 
            ចូលរួមក្រុម Telegram របស់យើង
          </a>
          <button
            onClick={handleClose}
            className="bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300 w-full"
          >
            បិទ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
