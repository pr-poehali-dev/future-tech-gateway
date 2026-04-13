import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Что такое Atomy и откуда бренд?",
      answer:
        "Atomy — корейская компания, основанная в 2009 году. Специализируется на производстве косметики, БАДов, средств по уходу за телом, волосами и товаров для дома. Принцип бренда — абсолютное качество по доступной цене.",
    },
    {
      question: "Продукты натуральные и безопасные?",
      answer:
        "Да, все продукты Atomy проходят строгий контроль качества и имеют международные сертификаты безопасности. В составе используются натуральные корейские ингредиенты. Продукты подходят для чувствительной кожи и гипоаллергенны.",
    },
    {
      question: "Как заказать продукцию Atomy?",
      answer:
        "Свяжитесь с нами через форму на сайте или по контактам. Мы поможем подобрать нужные продукты, оформить заказ и доставить его до вас.",
    },
    {
      question: "Есть ли доставка по всей России?",
      answer:
        "Да, мы осуществляем доставку по всей России. Свяжитесь с нами, чтобы уточнить сроки и стоимость доставки в ваш регион.",
    },
    {
      question: "Можно ли попробовать продукты перед покупкой?",
      answer:
        "Мы можем предоставить консультацию и помочь с выбором продуктов, исходя из ваших потребностей и типа кожи. Напишите нам, и мы подберём идеальные средства именно для вас.",
    },
    {
      question: "Подходят ли продукты для всей семьи?",
      answer:
        "Абсолютно! Atomy выпускает полную линейку продуктов для всей семьи — от детей до пожилых людей. Косметика, БАДы, товары для дома — всё в одном месте.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что вы хотели знать о продуктах Atomy и как их получить.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
