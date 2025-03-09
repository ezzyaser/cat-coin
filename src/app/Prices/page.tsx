import { Suspense } from 'react';

async function getCoins() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/coins`);
  return res.json();
}

export default async function Page() {
  const coins = await getCoins();

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        📈 أسعار العملات الرقمية
      </h1>

      <Suspense
        fallback={<p className="text-center text-gray-400">Loading...</p>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {coins.map((coin: any) => (
            <div
              key={coin.id}
              className="bg-gray-800 p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-12 h-12 rounded-full"
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
      </Suspense>
    </div>
  );
}
