'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Section = {
  title: string;
  content: string;
};

const sections: Section[] = [
  {
    title: 'المقدمة',
    content:
      'Cat Coin هو مشروع عملة رقمية ميمية مبني على تقنية البلوكشين، يهدف إلى دمج الترفيه مع الفوائد المالية...',
  },
  {
    title: 'المشكلة التي نحاول حلها',
    content:
      '- معظم عملات الميم تفتقر إلى الاستخدامات الحقيقية.\n- عدم وجود مجتمعات قوية تدعم مشاريع الميم لفترات طويلة...',
  },
  {
    title: 'الحل الذي نقدمه',
    content:
      'Cat Coin توفر:\n- مجتمع نشط يركز على تطوير المشروع بشكل مستدام.\n- رمز مميز (Token) ذو قيمة يمكن تداوله...',
  },
  {
    title: 'تفاصيل الرمز (Tokenomics)',
    content:
      'إجمالي العرض: 1,000,000 CAT\nالتوزيع:\n- 70% للسيولة\n- 10% للتسويق\n- 10% للإدراجات\n- 8% للمؤسس\n- 2% للمطورين',
  },
];

export default function Page() {
  return (
    <motion.div
      dir="rtl"
      className="max-w-screen-lg mx-auto px-4 py-10 mt-10 bg-gradient-to-b from-indigo-900 to-gray-900 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100 rounded-lg shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📜 Cat Coin Whitepaper 🚀
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/Images/details.jpg"
            alt="details"
            width={500}
            height={400}
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>

        <div className="w-full md:w-1/2">
          <Accordion type="multiple">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="mb-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-indigo-300 dark:border-indigo-600 transition-all hover:shadow-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={section.title} className="flex-1">
                  <Card className="bg-white dark:bg-gray-900 border-none shadow-lg hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-semibold mb-3 text-indigo-500 dark:text-indigo-300">
                        {section.title}
                      </h2>
                      <p className="whitespace-pre-line leading-relaxed text-gray-700 dark:text-gray-300">
                        {section.content}
                      </p>
                    </CardContent>
                  </Card>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
}
