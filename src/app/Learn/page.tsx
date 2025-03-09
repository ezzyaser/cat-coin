'use client';

import React from 'react';

interface SectionProps {
  title: string;
  description: string;
  points: string[];
}

const Section: React.FC<SectionProps> = ({ title, description, points }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div dir="rtl" className="min-h-screen  p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          الفرق بين Web3، Blockchain، و Bitcoin
        </h1>
        <div className="space-y-8">
          <Section
            title="🌍 Web3 - الجيل الجديد من الإنترنت"
            description="الويب 3 هو الجيل الجديد من الإنترنت الذي يعتمد على اللامركزية وتقنية البلوك تشين، مما يمنح المستخدمين تحكمًا كاملاً في بياناتهم ويقلل من الحاجة للوسطاء مثل جوجل وفيسبوك."
            points={[
              'لامركزي ولا يعتمد على جهة واحدة.',
              'يعتمد على العقود الذكية والتطبيقات اللامركزية (dApps).',
              'يوفر مزيدًا من الخصوصية والأمان.',
            ]}
          />
          <Section
            title="🔗 Blockchain - التقنية الأساسية"
            description="البلوك تشين هو دفتر حسابات رقمي لامركزي يقوم بتخزين المعاملات بطريقة مشفرة وغير قابلة للتغيير، مما يجعله مثاليًا لتطبيقات مثل العملات المشفرة، العقود الذكية، والتصويت الإلكتروني."
            points={[
              'سلسلة من الكتل تحتوي على بيانات مشفرة.',
              'آمنة وغير قابلة للتعديل بعد تسجيل المعاملات.',
              'تُستخدم في مجالات عديدة، مثل التمويل وسلاسل التوريد.',
            ]}
          />
          <Section
            title="💰 Bitcoin - العملة الرقمية الأولى"
            description="البيتكوين هو أول وأشهر عملة مشفرة، تعتمد على البلوك تشين لتوفير وسيلة دفع رقمية لامركزية، بدون الحاجة إلى وسيط."
            points={[
              'يعمل بنظام إثبات العمل (Proof of Work).',
              'محدود بـ 21 مليون بيتكوين فقط.',
              'يُستخدم كمخزن للقيمة وأداة استثمارية.',
            ]}
          />
        </div>
        <div>
          <div>
            ما هو البلوك تشين
            <p>
              البلوك تشين هو تقنية حديثة تُستخدم لتخزين البيانات بشكل موزع وآمن.
              تعتبر البلوك تشين العمود الفقري للعملات الرقمية مثل بيتكوين
              وإيثيريوم، ولكن يمكن استخدامها أيضًا في العديد من التطبيقات الأخرى
              مثل سلاسل الإمداد
            </p>
            <p>
              البلوك تشين هو سلسلة من الكتل التي تحتوي على معلومات مشفرة، وكل
              كتلة ترتبط بالكتلة السابقة بشكل غير قابل للتعديل. هذا يخلق سلسلة
              من البيانات المرتبطة بشكل دائم وآمن. يتم تخزين هذه السلسلة عبر
              شبكة موزعة من أجهزة الكمبيوتر (تسمى العقد)، مما يجعل البلوك تشين
              مقاومًا للتلاعب أو التغيير.
            </p>
          </div>
          <div>
            مكونات البلوك تشين
            <p>الكتل</p>
            <p>التجزئة </p>
            <p>لعقد </p>
            <p>آليات الإجماع</p>
          </div>
          <div>
            خصائص البلوك تشين
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div>
            كيف يعمل البلوك تشين
            <p></p>
          </div>
          <div>التطبيقات الرئيسية للبلوك تشين</div>
          <div>ماذا يحل البلوك تشين ؟</div>
          <div>مزايا البلوك تشين</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
