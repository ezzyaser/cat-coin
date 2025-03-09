import Image from 'next/image';

export default function Home() {
  return (
    <div
      dir="rtl"
      className="min-h-screen  flex flex-col items-center justify-center"
    >
      {/* شعار العملة */}
      <div className="relative w-40 h-40">
        <Image
          src="/Images/Cat.jpg"
          alt="Crypto Coin"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* عنوان الصفحة */}
      <h1 className="text-4xl font-extrabold mt-4 text-center text-neon">
        🔥 عملة Cat Coin 🔥
      </h1>
      <p className="text-gray-400 mt-2 text-center">
        العملة الرقمية المستقبلية المخصصة للمجتمع الرقمي!
      </p>

      {/* معلومات العملة */}
      <div className="mt-6 bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        <p className="text-xl font-semibold">
          💰 السعر الحالي: <span className="text-green-400">$0.025</span>
        </p>
        <p className="text-md text-gray-400 mt-2">
          📉 التغير اليومي: <span className="text-red-400">-2.5%</span>
        </p>
        <p className="text-md text-gray-400">
          📊 حجم التداول: <span className="text-blue-400">$10M</span>
        </p>
      </div>

      {/* زر الشراء */}
      <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-all duration-300 rounded-full text-lg font-semibold shadow-md">
        🚀 اشترِ الآن!
      </button>
    </div>
  );
}
