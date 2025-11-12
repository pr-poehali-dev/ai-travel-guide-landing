import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-400">
      <div className="max-w-[800px] mx-auto px-4 py-12 md:py-16">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Б</span>
            </div>
            <span className="text-2xl font-bold text-black">билайн</span>
          </div>
        </div>

        <Card className="rounded-3xl p-8 md:p-12 shadow-2xl bg-white">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Открыто о причинах изменения цены
              </h1>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Зачем это нужно </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                <span className="font-semibold">Коротко:</span> чтобы у вас не зависали фильмы и видеозвонки, связь держалась и в офисе, и в подвальном клубе, а интернет оставался быстрым и стабильным — даже при растущей нагрузке на сеть. По данным Минцифры, совокупный трафик фиксированных и мобильных сетей в РФ в 2024 году вырос примерно на <span className="font-semibold">24%</span> и продолжает расти в 2025-м.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Что происходит в экономике</h2>
              <ul className="space-y-4 list-none">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFDB00] mt-2 flex-shrink-0"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <span className="font-semibold">Инфляция всё ещё выше целевого уровня.</span> Банк России ожидает по итогам 2025 года <span className="font-semibold">6,5–7,0%</span> и возвращение к цели позже, хотя динамика замедляется; ключевая ставка постепенно снижается с пиков 2024 года.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFDB00] mt-2 flex-shrink-0"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <span className="font-semibold">Импорт и сложная техника.</span> Значительная часть телеком-оборудования и комплектующих — импортного происхождения; санкционные ограничения и усложнение логистики повышают стоимость и сроки поставок.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFDB00] mt-2 flex-shrink-0"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <span className="font-semibold">Электроэнергия и дата-центры.</span> Энергия — крупная статья расходов сети и ДЦ; тарифная нагрузка в ряде регионов в 2025 году растёт двузначными темпами, что напрямую влияет на себестоимость услуг.
                  </p>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Почему это отражается на тарифах</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Мы инвестируем в сеть (больше базовых станций, апгрейды ядра, емкость магистралей) и в сервисы — чтобы выдерживать рост трафика и поддерживать качество. При этом часть затрат привязана к импорту и энергии, а также к общей ценовой динамике в экономике. Корректируя стоимость архивных тарифов, мы сохраняем актуальные планы <span className="font-semibold">конкурентными по рынку</span> и не допускаем, чтобы архив стал дороже сопоставимых действующих предложений.
              </p>

            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Как мы делаем изменения честными</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFDB00] flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-lg">1</span>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900 mb-2">Сначала эффективность.</p>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Максимально режем внутренние издержки и оптимизируем инфраструктуру, прежде чем пересматривать цену.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFDB00] flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-lg">2</span>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900 mb-2">Точечно.</p>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Меняем условия <span className="font-semibold">архивных тарифных</span> планов, приводя их стоимость в соответствие с экономической ситуацией.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFDB00] flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-lg">3</span>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900 mb-2">Прозрачно.</p>
                    <p className="text-base text-gray-700 leading-relaxed">Пишем заранее и указываем дату первого списания в новом размере</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Это по-прежнему выгодно?</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Да. Мы сверяемся с рынком и актуальными предложениями, чтобы после индексации архивные планы <span className="font-semibold">не были дороже</span> сопоставимых действующих тарифов. Плюс — продолжаем развивать приложение, автоплатёж, защиту от мошенничества и другие сервисы, повышающие ценность пакета.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="bg-gradient-to-br from-[#FFDB00]/20 to-[#FFDB00]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Честное обещание</h3>
                <p className="text-base text-gray-700 leading-relaxed mb-3">
                  Мы не будем обещать цены «как в 2023-м» в <span className="font-semibold">2035 году</span>. Но пообещаем другое: <span className="font-semibold">каждый раз объяснять, почему меняется стоимость, и делать это до вступления изменений в силу.</span> Это правильно по отношению к вам — и так устойчиво развивается сеть.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gray-50 border-0">
                  <div className="w-12 h-12 rounded-full bg-[#FFDB00] flex items-center justify-center mb-4">
                    <Icon name="Smartphone" size={24} className="text-black" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Удобное приложение</h4>
                  <p className="text-sm text-gray-600">
                    Всё под рукой: баланс, тарифы, управление услугами
                  </p>
                </Card>

                <Card className="p-6 bg-gray-50 border-0">
                  <div className="w-12 h-12 rounded-full bg-[#FFDB00] flex items-center justify-center mb-4">
                    <Icon name="Settings" size={24} className="text-black" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Честные настройки</h4>
                  <p className="text-sm text-gray-600">
                    Без скрытых платежей и неожиданных списаний
                  </p>
                </Card>

                <Card className="p-6 bg-gray-50 border-0">
                  <div className="w-12 h-12 rounded-full bg-[#FFDB00] flex items-center justify-center mb-4">
                    <Icon name="Wifi" size={24} className="text-black" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Качественный интернет</h4>
                  <p className="text-sm text-gray-600">
                    Стабильная связь там, где вам нужно
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </Card>

        <footer className="mt-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">Б</span>
            </div>
            <span className="text-xl font-bold text-black">билайн</span>
          </div>
          <p className="text-sm text-black/70">© 2024 ПАО «ВымпелКом»</p>
        </footer>
      </div>
    </div>
  );
}