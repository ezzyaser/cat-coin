import { Card, CardContent } from '@/components/ui/card';

export default function Page() {
  return (
    <div
      dir="rtl"
      className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <Card>
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
              ما هو البتكوين؟
            </h1>
            <p className="text-lg">
              البتكوين هو أول عملة رقمية لامركزية تم اختراعها في عام 2008 بواسطة
              شخص أو مجموعة مجهولة تحت اسم ساتوشي ناكاموتو.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">كيف يعمل البتكوين:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>اللامركزية:</strong> البتكوين ليس ملكًا لأية حكومة أو
                مؤسسة مالية.
              </li>
              <li>
                <strong>البلوكتشين:</strong> سجل عام مفتوح يتكون من سلسلة من
                الكتل.
              </li>
              <li>
                <strong>التعدين:</strong> عملية رياضية معقدة باستخدام الحواسيب.
              </li>
              <li>
                <strong>الحد الأقصى للعرض:</strong> 21 مليون وحدة فقط.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              تاريخ بداية البتكوين:
            </h2>
            <ul className="list-decimal pl-6 space-y-2">
              <li>
                <strong>2008:</strong> نشر الورقة البيضاء.
              </li>
              <li>
                <strong>2009:</strong> إطلاق الشبكة.
              </li>
              <li>
                <strong>2010:</strong> أول معاملة تجارية.
              </li>
              <li>
                <strong>2017:</strong> ارتفاع السعر.
              </li>
              <li>
                <strong>اليوم:</strong> أصبح من الأصول القيمة عالميًا.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              كيفية استخدام البتكوين:
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>التحويلات المالية.</li>
              <li>الاستثمار.</li>
              <li>الشراء عبر الإنترنت.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">مميزات البتكوين:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>اللامركزية.</li>
              <li>الخصوصية.</li>
              <li>التحويلات عبر الحدود.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              التحديات والانتقادات:
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>التقلبات السعرية.</li>
              <li>التعدين واستهلاك الطاقة.</li>
              <li>التنظيم.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-lg">
              إجمالًا، البتكوين مشروع ثوري يهدف إلى تغيير النظام المالي العالمي.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
