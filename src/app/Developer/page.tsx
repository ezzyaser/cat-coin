'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const RoadmapPage: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-background text-foreground p-6 md:p-12"
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          خارطة طريق: كيف تصبح مطور بلوك تشين
        </h1>
        <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">
              1. فهم أساسيات البلوك تشين
            </h2>
            <p className="text-sm mt-2">
              تعرف على كيفية عمل تقنية البلوك تشين، أنواعها، وأهم المفاهيم
              الأساسية مثل العقود الذكية والتعدين.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">2. تعلم أساسيات البرمجة</h2>
            <p className="text-sm mt-2">
              ابدأ بـ JavaScript، TypeScript، Python وRust لتطوير التطبيقات
              اللامركزية والعقود الذكية.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">
              3. تعلم Solidity وبرمجة العقود الذكية
            </h2>
            <p className="text-sm mt-2">
              تعلم أساسيات Solidity لكتابة العقود الذكية ونشرها على Ethereum.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">
              4. تطوير التطبيقات اللامركزية (dApps)
            </h2>
            <p className="text-sm mt-2">
              استخدم Next.js وEthers.js لبناء تطبيقات تتفاعل مع العقود الذكية.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">
              5. فهم أنظمة التحقق والتخزين
            </h2>
            <p className="text-sm mt-2">
              تعلم استخدام IPFS وThe Graph لفهرسة وتخزين البيانات على البلوك
              تشين.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">
              6. استكشاف شبكات البلوك تشين المختلفة
            </h2>
            <p className="text-sm mt-2">
              تعرف على Ethereum، Solana، Binance Smart Chain، وPolygon.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoadmapPage;
