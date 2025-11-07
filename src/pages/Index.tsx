import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="MapPin" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">TravelAI</span>
          </div>
          <Button variant="outline">Войти</Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20 px-4 py-2">
            🚀 Уикенд-путешествия без стресса
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Не планируй. Путешествуй
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Будь как дома — даже на выходных. ИИ строит маршрут под погоду, пробки и часы работы — с мгновенным планом B
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Создать уикенд-маршрут
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть пример
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={18} className="text-green-500" />
              <span>14 дней бесплатно</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={18} className="text-green-500" />
              <span>Без карты</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={18} className="text-green-500" />
              <span>Отмена в любой момент</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 animate-slide-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Знакомые боли?</h2>
          <p className="text-xl text-muted-foreground">Мы решаем главные проблемы коротких поездок</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: "Clock", title: "Пробки и парковка", desc: "Половина дня уходит на поиск места" },
            { icon: "CalendarX", title: "Всё закрыто", desc: "Приехали — а музей на санитарный день" },
            { icon: "Hotel", title: "Неудобный заезд", desc: "Поздно заселили, рано выгнали" },
            { icon: "Users", title: "Толпы людей", desc: "Очереди везде, мест на фото нет" },
            { icon: "UtensilsCrossed", title: "Проблемы с питанием", desc: "Долго ждать, только наличные, нет детского" },
            { icon: "CloudRain", title: "Погода сломала план", desc: "Дождь начался, альтернатив нет" },
            { icon: "WifiOff", title: "Нет связи", desc: "Карты не работают, терминалы недоступны" },
            { icon: "AlertCircle", title: "Штрафы", desc: "Паркуемся где попало из-за непонятных правил" }
          ].map((pain, i) => (
            <Card key={i} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-2">
              <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon name={pain.icon as any} className="text-red-500" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{pain.title}</h3>
              <p className="text-muted-foreground text-sm">{pain.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 animate-scale-in">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что делает ИИ-гид</h2>
            <p className="text-xl text-muted-foreground">Решаем все проблемы в реальном времени</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Map" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Живой тайминг</h3>
              <p className="text-muted-foreground mb-4">
                Строит реальные 24-36 часов с учётом пробок, парковки, пеших переходов и буферов времени
              </p>
              <ul className="space-y-2">
                {['Учитывает пробки в реальном времени', 'Добавляет буферы на парковку', 'Считает пешие переходы'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="CalendarCheck" className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Без очередей</h3>
              <p className="text-muted-foreground mb-4">
                Проверяет часы работы, санитарные дни, доступные слоты и предлагает бронирование
              </p>
              <ul className="space-y-2">
                {['Актуальные часы работы', 'Доступность билетов онлайн', 'Альтернативы при закрытии'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="CloudSun" className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">План B по погоде</h3>
              <p className="text-muted-foreground mb-4">
                Мгновенно переключает маршрут при дожде, морозе или шторме — замены активностей рядом
              </p>
              <ul className="space-y-2">
                {['Отслеживание прогноза в реальном времени', 'Крытые альтернативы за 15 минут', 'Учёт погодных окон'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
              <div className="bg-green-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Navigation" className="text-green-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Парковка и навигация</h3>
              <p className="text-muted-foreground mb-4">
                Находит парковки, показывает тарифы, правила и сохраняет офлайн-карты на случай потери связи
              </p>
              <ul className="space-y-2">
                {['Карта парковок с тарифами', 'Офлайн-навигация', 'Пункты зарядки для телефона'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6">
              <Icon name="Zap" className="mr-2" size={20} />
              Тест-драйв ИИ-гида
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl my-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Как это работает</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: "MessageSquare", title: "Расскажи о поездке", desc: "Откуда выезжаешь, кого везёшь (семья/спорт/диета), сколько времени" },
              { step: "02", icon: "Sparkles", title: "Получи план", desc: "24-36 часов с буферами, слотами, парковкой и пит-стопами" },
              { step: "03", icon: "Smartphone", title: "Путешествуй", desc: "В дороге один тап: «дождь/пробка/устал» → план B рядом" }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-6xl font-bold text-primary/10 mb-4">{step.step}</div>
                  <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Icon name={step.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2">
                    <Icon name="ArrowRight" className="text-primary" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground">
            Диалоговый ИИ-гид (веб/Telegram) • Офлайн-подсказки на маршруте
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Возможности</h2>
          <p className="text-xl text-muted-foreground">Всё для комфортных уикендов</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: "Baby", title: "Семейный режим", desc: "Окна сна, тихие зоны, детские меню и коляски" },
            { icon: "Utensils", title: "Пит-стопы и диеты", desc: "Фильтры: детское, безлактозное, постное. Бронь в один тап" },
            { icon: "BedDouble", title: "Одна ночь без нервов", desc: "Ранний заезд, поздний выезд, хранение багажа" },
            { icon: "MapPinned", title: "Что рядом сейчас", desc: "Быстрые альтернативы в радиусе 15-30 мин" },
            { icon: "ListChecks", title: "Чек-лист уикенда", desc: "Погода, одежда, снаряжение, аптека, наличные" },
            { icon: "Star", title: "Отзывы по делу", desc: "Свежие тезисы: что работает в выходные" }
          ].map((feature, i) => (
            <Card key={i} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Icon name={feature.icon as any} className="text-primary" size={26} />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Для кого</h2>
          <p className="text-xl text-muted-foreground">Сценарии использования</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { emoji: "📋", title: "Планировщик", desc: "Без сорванных слотов и с буферами времени" },
            { emoji: "🎲", title: "Импровизатор", desc: "Стартуй сейчас: маршрут рядом, парковка и еда найдены" },
            { emoji: "👨‍👩‍👧", title: "Молодая семья", desc: "Сон, питание, тихие зоны — поездка без истерик" },
            { emoji: "💻", title: "Цифровой кочевник", desc: "Связь, зарядки и спокойные места для работы" },
            { emoji: "🎿", title: "Нишевый турист", desc: "Погодные окна и аренда снаряжения без сюрпризов" }
          ].map((persona, i) => (
            <Card key={i} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
              <div className="text-5xl mb-4">{persona.emoji}</div>
              <h3 className="text-xl font-bold mb-3">{persona.title}</h3>
              <p className="text-muted-foreground">{persona.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 text-center">
          <Icon name="Shield" className="text-primary mx-auto mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Интеграция с оператором</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Работает в экосистеме твоего оператора: связь, офлайн-карты, кешбэк за поездки и тревел-помощник — в одном месте
          </p>
          <p className="text-lg font-medium text-secondary">
            Домашний роуминг в другом городе • Бонусы за уикенд-маршруты
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h2>
          <p className="text-xl text-muted-foreground">Выбери удобный план</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 border-2">
            <h3 className="text-2xl font-bold mb-4">Freemium</h3>
            <div className="mb-6">
              <div className="text-4xl font-bold mb-2">14 дней</div>
              <p className="text-muted-foreground">Бесплатно</p>
            </div>
            <ul className="space-y-3 mb-8">
              {['1 уикенд-маршрут полностью', 'Все фичи доступны', 'Без скрытых ограничений', 'Без карты'].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">Попробовать</Button>
          </Card>

          <Card className="p-8 border-4 border-primary shadow-2xl relative scale-105">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Популярный</Badge>
            <h3 className="text-2xl font-bold mb-4">Активный план</h3>
            <div className="mb-6">
              <div className="text-5xl font-bold mb-2">500₽</div>
              <p className="text-muted-foreground">в месяц</p>
            </div>
            <ul className="space-y-3 mb-8">
              {['Неограниченные маршруты', 'План B в реальном времени', 'Все премиум-фичи', 'Приоритетная поддержка', 'Офлайн-карты'].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-primary hover:bg-primary/90">Начать путешествовать</Button>
          </Card>

          <Card className="p-8 border-2">
            <h3 className="text-2xl font-bold mb-4">Бонусы</h3>
            <div className="mb-6">
              <div className="text-4xl font-bold mb-2">×5</div>
              <p className="text-muted-foreground">За поездки</p>
            </div>
            <ul className="space-y-3 mb-8">
              {['Бонусная валюта за брони', 'Кешбэк за проезды', 'Х5 в партнёрской сети', 'Накопительная система'].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10">Узнать больше</Button>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white text-lg px-10 py-6">
            <Icon name="Rocket" className="mr-2" size={22} />
            Хочу путешествовать легко
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="MapPin" size={28} className="text-primary" />
                <span className="text-xl font-bold">TravelAI</span>
              </div>
              <p className="text-gray-400 text-sm">Персональный планировщик уикенд-путешествий с ИИ</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Примеры маршрутов</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 TravelAI. Все права защищены. <a href="#" className="hover:text-white">Политика конфиденциальности</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
