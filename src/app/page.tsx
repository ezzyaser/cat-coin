'use client';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div
        dir="rtl"
        className="min-h-screen flex flex-col items-center px-4 py-20 container mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mt-8 text-center text-gray-900 dark:text-gray-100 transition-colors duration-300"
        >
          🚀 مرحبًا بك في منصة CatCoin 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 dark:text-gray-300 mt-4 text-lg md:text-xl text-center max-w-2xl transition-colors duration-300"
        >
          اكتشف تقنيات البلوك تشين، أسعار العملات، وعملتنا الجديدة!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"
        >
          {[
            { href: '/Currency', label: 'عملتنا الرقمية🔥' },
            { href: '/Learn', label: 'تعلم عن البلوك تشين🏗️' },
            { href: '/Prices', label: 'أسعار العملات الرقمية💰' },
            { href: '/Bitcoin', label: 'البيتكوين💎' },
            { href: '/Developer', label: 'كيف تُصبح مطور بلوك تشين👨‍💻' },
          ].map((item, index) => (
            <Link key={index} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all cursor-pointer"
              >
                {item.label}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
}
