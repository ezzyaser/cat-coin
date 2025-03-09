'use client';
import React, { useState } from 'react';
import { FaTelegram, FaTwitter, FaHeart, FaCopy } from 'react-icons/fa';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
}

interface DonationBoxProps {
  walletAddress: string;
  copyToClipboard: () => void;
  copied: boolean;
}

export default function Footer() {
  const walletAddress: string = 'HKnxtvyxJQ7wTNFpJEqx5JHsm4AhQerazNR43foSgUZs';
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white py-8 mt-10 text-center transition-colors duration-300 px-6">
      <div className="max-w-screen-md mx-auto flex flex-col items-center">
        <SocialLinks />
        <DonationBox
          walletAddress={walletAddress}
          copyToClipboard={copyToClipboard}
          copied={copied}
        />
      </div>
    </footer>
  );
}

const SocialLinks: React.FC = () => (
  <>
    <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
      مواقع التواصل
    </p>
    <div className="flex justify-center space-x-6 mb-5">
      <SocialIcon
        href="https://t.me/ammaryasserp"
        icon={<FaTelegram size={32} />}
        color="text-blue-600"
        hoverColor="hover:text-blue-500"
      />
      <SocialIcon
        href="https://x.com/ammarYa22912552?t=XngvcDZLJQhb8xLl6TpiTg&s=09"
        icon={<FaTwitter size={32} />}
        color="text-blue-500"
        hoverColor="hover:text-blue-400"
      />
    </div>
  </>
);

const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  icon,
  color,
  hoverColor,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${color} ${hoverColor} dark:text-blue-400 dark:hover:text-blue-300 transition transform hover:scale-110`}
  >
    {icon}
  </a>
);

const DonationBox: React.FC<DonationBoxProps> = ({
  walletAddress,
  copyToClipboard,
  copied,
}) => (
  <div className="max-w-md mx-auto p-4 bg-gray-800 text-white rounded-2xl shadow-lg text-center">
    <div className="flex items-center justify-center mb-3 text-pink-500 text-lg font-semibold">
      <FaHeart className="mr-2" size={22} /> دعم الموقع
    </div>
    <div className="p-3 bg-gray-900 rounded-lg flex items-center justify-between">
      <span className="text-sm truncate">{walletAddress}</span>
      <button
        onClick={copyToClipboard}
        className="ml-3 p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
      >
        <FaCopy size={18} />
      </button>
    </div>
    {copied && <p className="mt-2 text-green-400 text-sm">تم النسخ!</p>}
  </div>
);
