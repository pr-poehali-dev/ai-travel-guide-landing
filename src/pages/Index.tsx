import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFDB00' }}>
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Можно по-честному.
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Почему иногда приходится индексировать цены
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                В двух словах: чтобы видео не зависало на самом эпичном моменте, связь ловила и в офисе, и в подвальном киберклубе, а работать было комфортно и из дома, и из кафе.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">По порядку</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Ещё вчера ваш тариф стоил <span className="font-semibold">300 ₽</span>, а сегодня за тот же пакет просят <span className="font-semibold">350 ₽</span> — естественно, это может раздражать.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Честно: даже внутри <span className="font-semibold">билайн</span> мы не в восторге от любых повышений. Но есть причины, о которых важно говорать открыто.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Зачем это нужно</h3>
              
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFDB00] flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="TrendingUp" size={20} className="text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Идём в ногу со временем</h4>
                    <p className="text-base text-gray-700 leading-relaxed mb-3">
                      Когда-то казалось, что к 2020-му мобильной связи хватит «на сто тысяч», а сейчас все операторы вместе обслуживают сотни миллионов SIM-карт.
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed mb-3">
                      Трафика становится больше: люди больше смотрят видео, общаются в мессенджерах, работают в облаках — и сеть должна выдерживать нагрузку.
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Чтобы соответствовать вашим ожиданиям, мы приводим условия тарифов в соответствие с экономикой и продолжаем инвестировать в сеть и продукты. Это делает связь стабильнее, интернет — быстрее, а сервисы — технологичнее.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFDB00] flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Target" size={20} className="text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Остаёмся выгодными</h4>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      Мы не можем выключить влияние экономики. Но можем — и делаем — две вещи:
                    </p>
                    
                    <div className="space-y-4 ml-4">
                      <div>
                        <p className="text-base font-semibold text-gray-900 mb-2">
                          Сначала — эффективность.
                        </p>
                        <p className="text-base text-gray-700 leading-relaxed">
                          Оптимизируем внутренние расходы, прежде чем что-то менять для клиентов.
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-base font-semibold text-gray-900 mb-2">
                          Точечные изменения.
                        </p>
                        <p className="text-base text-gray-700 leading-relaxed">
                          Корректируем в первую очередь архивные тарифы, которые не пересматривались много лет, и следим, чтобы после обновления они не стали дороже сопоставимых актуальных тарифов билайн.
                        </p>
                      </div>
                    </div>

                    <p className="text-base text-gray-700 leading-relaxed mt-4">
                      Благодаря вашей поддержке у нас есть то, чем мы гордимся: удобное приложение, честные настройки тарифа, качественный интернет.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="bg-gradient-to-br from-[#FFDB00]/20 to-[#FFDB00]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Честное обещание</h3>
                <p className="text-base text-gray-700 leading-relaxed mb-3">
                  Мы не пообещаем, что в 2035 цены будут как сегодня.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-1">
                  Зато пообещаем другое: мы всегда объясним причины изменений простым языком и вовремя.
                </p>
                <p className="text-lg font-bold text-gray-900 mt-4">
                  По-честному. По-билайн.
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
