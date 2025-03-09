import React from 'react';
import { FaTelegram, FaTwitter, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white py-8 mt-10 text-center transition-colors duration-300 px-6">
      <div className="max-w-screen-md mx-auto flex flex-col items-center">
        {/* <h2 className="text-2xl font-bold mb-3">CatCoin</h2> */}
        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
          مواقع التواصل
        </p>
        <div className="flex justify-center space-x-6 mb-5">
          <a
            href="https://t.me/ammaryasserp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition transform hover:scale-110"
          >
            <FaTelegram size={32} />
          </a>
          <a
            href="https://x.com/ammarYa22912552?t=XngvcDZLJQhb8xLl6TpiTg&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 dark:text-blue-300 dark:hover:text-blue-200 transition transform hover:scale-110"
          >
            <FaTwitter size={32} />
          </a>
        </div>
        <a
          href="HKnxtvyxJQ7wTNFpJEqx5JHsm4AhQerazNR43foSgUZs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg transition text-lg shadow-lg transform hover:scale-105"
        >
          <FaHeart className="mr-2" size={22} /> دعم الموقع
        </a>
      </div>
    </footer>
  );
}
