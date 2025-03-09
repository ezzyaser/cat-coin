'use client';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'فهم أساسيات البلوك تشين',
    description:
      'تعرف على كيفية عمل تقنية البلوك تشين، أنواعها، وأهم المفاهيم الأساسية مثل العقود الذكية والتعدين.',
    link: 'https://youtu.be/qOVAbKKSH10?feature=shared',
  },
  {
    title: 'تعلم أساسيات البرمجة',
    description:
      'ابدأ بـ JavaScript، TypeScript، Python وRust لتطوير التطبيقات اللامركزية والعقود الذكية.',
    link: 'https://youtu.be/gyMwXuJrbJQ?feature=shared',
  },
  {
    title: 'تعلم Solidity وبرمجة العقود الذكية',
    description:
      'تعلم أساسيات Solidity لكتابة العقود الذكية ونشرها على Ethereum.',
    link: 'https://youtu.be/EhPeHeoKF88?feature=shared',
  },
  {
    title: 'تطوير التطبيقات اللامركزية (dApps)',
    description:
      'استخدم Next.js وEthers.js لبناء تطبيقات تتفاعل مع العقود الذكية.',
    link: 'https://youtu.be/Y89q6T1r1Yg?feature=shared',
  },
  {
    title: 'فهم أنظمة التحقق والتخزين',
    description:
      'تعلم استخدام IPFS وThe Graph لفهرسة وتخزين البيانات على البلوك تشين.',
    link: 'https://youtu.be/PlvMGpQnqOM?feature=shared',
  },
  {
    title: 'استكشاف شبكات البلوك تشين المختلفة',
    description: 'تعرف على Ethereum، Solana، Binance Smart Chain، وPolygon.',
    link: 'https://ethereum.org/en/developers/docs/networks/',
  },
];

const RoadmapPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      dir="rtl"
      className="min-h-screen bg-background text-foreground p-4 sm:p-6 md:p-8 lg:p-12"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        كيف تصبح مطور بلوك تشين
      </h1>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="transition hover:shadow-lg">
              <CardContent className="p-4">
                <h2 className="text-lg sm:text-xl font-semibold">
                  {index + 1}. {step.title}
                </h2>
                <p className="text-sm mt-2">{step.description}</p>
                <Link
                  href={step.link}
                  target="_blank"
                  className="text-blue-500 flex items-center gap-1 mt-3"
                >
                  تعلم المزيد <ExternalLink className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RoadmapPage;
