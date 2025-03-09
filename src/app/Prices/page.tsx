'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
}

export default function Page() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCoins() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/coins`,
        );
        if (!res.ok) throw new Error('Failed to fetch data');
        const data: Coin[] = await res.json();
        setCoins(data);
        setError(null); // إعادة ضبط الخطأ عند نجاح الجلب
      } catch (err) {
        setError(err instanceof Error ? err.message : 'حدث خطأ غير متوقع.');
      } finally {
        setLoading(false);
      }
    }

    fetchCoins();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        📈 أسعار العملات الرقمية
      </h1>

      {loading && <p className="text-center text-gray-400">جاري التحميل...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {coins.map((coin) => (
            <div
              key={coin.id}
              className="bg-gray-800 p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={coin.image}
                  alt={`شعار ${coin.name}`}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-xl font-semibold">{coin.name}</h2>
                  <p className="text-gray-400 uppercase text-sm">
                    {coin.symbol}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-lg font-bold text-green-400">
                ${coin.current_price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
