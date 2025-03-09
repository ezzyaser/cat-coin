'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
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
      'إجمالي العرض: 1,000,000 CAT\nالتوزيع:\n- 70% للسيولة\n- 10% للتسويق\n- 10% للإدراجات...',
  },
];

export default function CatCoinWhitepaper() {
  return (
    <motion.div
      dir="rtl"
      className="max-w-screen-lg mx-auto px-4 py-8 bg-gray-900 text-white rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 text-indigo-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Cat Coin Whitepaper
      </motion.h1>
      <Accordion type="multiple">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <AccordionItem value={section.title}>
              <Card className="bg-gray-800 border border-indigo-500 text-white">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-3 text-indigo-300">
                    {section.title}
                  </h2>
                  <p className="whitespace-pre-line leading-relaxed">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
}
