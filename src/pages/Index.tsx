import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "Почему условия меняются?",
      answer: "Мы пересматриваем условия тарифов для абонентов Yota и приводим их в соответствие с текущей экономической ситуацией. Изменение условий в тарифах коснулось клиентов, использующих архивные тарифные планы, стоимость которых не пересматривалась несколько лет.\n\nСвоевременная индексация позволит нам каждый день делать связь для вас ещё лучше, а продукты - технологичнее.\n\nВаши новые условия всё ещё одни из самых выгодных среди всех предложений операторов сотовой связи."
    },
    {
      question: "Как пополнить баланс?",
      answer: "Пополнить баланс можно в приложении Yota, терминалах оплаты, онлайн-банке или банковской картой на сайте http://www.yota.ru/pay.\n\nЧтобы всегда оставаться на связи, привяжите банковскую карту в приложении Yota – списания будут только тогда, когда на балансе не хватает денег для оплаты."
    },
    {
      question: "Что будет, если не пополнить баланс вовремя?",
      answer: "Звонки будут стоить по 3 руб. за минуту, СМС – по 3,9 руб., а интернет не будет доступен. Это не так выгодно, как оплачивать тариф сразу на 30 дней."
    },
    {
      question: "Когда спишется абонентская плата в новом размере?",
      answer: "Абонентская плата будет списываться раз в 30 дней.\nНовая плата спишется после 29 мая 2024 года.\n\nВ зависимости от величины скидки и абонентской платы расчет новой стоимости может отличаться на 10 копеек от указанной на странице."
    },
    {
      question: "Подарочные минуты и ГБ останутся?",
      answer: "Если у вас были подарочные пакеты минут и интернета, они сохранятся после изменения абонентской платы. Эти пакеты по-прежнему будут тратиться, когда закончатся основные объёмы по тарифу."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFD700' }}>
      <div className="max-w-[680px] mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <Icon name="Wifi" size={40} className="text-white" />
        </div>

        <Card className="rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="mb-8">
            <p className="text-base text-gray-700 mb-6">
              С 5 апреля 2024 г. будут действовать новые условия вашего тарифа
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Что изменится в тарифе
            </h1>

            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Стоимость услуг будет:</p>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-5xl md:text-6xl font-bold text-gray-900">700</span>
                <span className="text-2xl font-bold text-gray-900 mb-2">₽</span>
                <span className="text-lg text-gray-600 mb-2">за 30 дней</span>
              </div>
              <p className="text-sm text-gray-500">
                с учетом вашей скидки <span className="font-semibold">15%</span> 650 ₽
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-700 font-semibold mb-3">
                Состав тарифа не изменится:
              </p>
              <div className="flex items-baseline gap-8">
                <div>
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">1300</span>
                  <span className="text-sm align-top text-gray-600">МИНУТ</span>
                </div>
                <div>
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">35</span>
                  <span className="text-sm align-top text-gray-600">ГБ</span>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-4">
                <Icon name="CheckCircle2" size={20} className="text-[#00ccff] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Ранее подключенные опции сохранятся
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <p className="text-sm text-gray-700">
                Узнать,{" "}
                <a href="#" className="text-[#00ccff] hover:underline">
                  почему Yota повышает цены
                </a>
              </p>
              <p className="text-sm text-gray-700">
                Ознакомиться с новостью можно{" "}
                <a href="#" className="text-[#00ccff] hover:underline">
                  здесь
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Частые вопросы
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full flex items-center justify-between py-4 text-left group"
                    >
                      <span className="text-base font-medium text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <Icon
                        name={openQuestion === index ? "Minus" : "Plus"}
                        size={20}
                        className="text-[#00ccff] flex-shrink-0"
                      />
                    </button>
                    {openQuestion === index && (
                      <div className="pb-6 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <footer className="mt-8 text-center text-sm text-white/80">
          © Yota, 2008-2024г. Все права защищены.
        </footer>
      </div>
    </div>
  );
}
