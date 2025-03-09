import React from 'react';
import { FaTelegram, FaTwitter, FaHeart } from 'react-icons/fa';
import MaxWidthWrapper from './MaxWidthWrapper';

export default function Footer() {
  return (
    <MaxWidthWrapper>
      <footer className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white py-6 mt-10 text-center transition-colors duration-300 px-4">
        <div className="max-w-screen-md mx-auto flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-3">CatCoin</h2>
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://t.me/ammaryasserp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition"
            >
              <FaTelegram size={28} />
            </a>
            <a
              href="https://x.com/ammarYa22912552?t=XngvcDZLJQhb8xLl6TpiTg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 dark:text-blue-300 dark:hover:text-blue-200 transition"
            >
              <FaTwitter size={28} />
            </a>
          </div>
          <a
            href="https://HKnxtvyxJQ7wTNFpJEqx5JHsm4AhQerazNR43foSgUZs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-lg transition text-lg"
          >
            <FaHeart className="mr-2" size={20} /> دعم الموقع
          </a>
        </div>
      </footer>
    </MaxWidthWrapper>
  );
}
