import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Palette" size={24} className="text-blue-600" />
              <span className="text-xl font-bold text-slate-800">
                DesignStudio
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#portfolio"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#team"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Команда
              </a>
              <a
                href="#blog"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Блог
              </a>
              <a
                href="#contacts"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Связаться с нами
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Создаём дизайн, который{" "}
              <span className="text-blue-400">вдохновляет</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Мы команда талантливых дизайнеров, которые превращают ваши идеи в
              выдающиеся цифровые решения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Посмотреть работы
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-slate-600">
              Избранные проекты, которыми мы гордимся
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="default" className="bg-blue-600 hover:bg-blue-700">
              Все проекты
            </Badge>
            <Badge variant="outline">Веб-дизайн</Badge>
            <Badge variant="outline">Мобильные приложения</Badge>
            <Badge variant="outline">Брендинг</Badge>
            <Badge variant="outline">UX/UI</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-slate-400" />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">
                    Проект {item}
                  </CardTitle>
                  <CardDescription>
                    Современный веб-дизайн с акцентом на пользовательский опыт
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Badge variant="secondary">Web</Badge>
                      <Badge variant="secondary">UI/UX</Badge>
                    </div>
                    <Icon
                      name="ArrowUpRight"
                      size={16}
                      className="text-blue-600"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-slate-600">
              Профессионалы, которые создают магию
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Анна Смирнова",
                role: "Арт-директор",
                speciality: "Брендинг",
              },
              {
                name: "Максим Петров",
                role: "UX/UI дизайнер",
                speciality: "Веб-дизайн",
              },
              {
                name: "Елена Козлова",
                role: "Графический дизайнер",
                speciality: "Иллюстрации",
              },
              {
                name: "Дмитрий Волков",
                role: "Motion дизайнер",
                speciality: "Анимация",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="mb-4">
                    {member.speciality}
                  </Badge>
                  <div className="flex justify-center space-x-4">
                    <Icon
                      name="Linkedin"
                      size={20}
                      className="text-slate-400 hover:text-blue-600 cursor-pointer"
                    />
                    <Icon
                      name="Twitter"
                      size={20}
                      className="text-slate-400 hover:text-blue-600 cursor-pointer"
                    />
                    <Icon
                      name="Instagram"
                      size={20}
                      className="text-slate-400 hover:text-blue-600 cursor-pointer"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Блог</h2>
            <p className="text-xl text-slate-600">
              Делимся знаниями и вдохновением
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Тренды веб-дизайна 2024",
                category: "Дизайн",
                date: "15 янв",
              },
              {
                title: "Как создать эффективный UX",
                category: "UX/UI",
                date: "12 янв",
              },
              {
                title: "Цветовая психология в дизайне",
                category: "Теория",
                date: "8 янв",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-t-lg flex items-center justify-center">
                  <Icon name="FileText" size={48} className="text-slate-400" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-slate-500">{post.date}</span>
                  </div>
                  <CardTitle className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>
                    Краткое описание статьи и основные тезисы для привлечения
                    внимания читателей
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">5 мин чтения</span>
                    <Icon
                      name="ArrowUpRight"
                      size={16}
                      className="text-blue-600"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-slate-600">
                Готовы обсудить ваш проект? Напишите нам!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Давайте создадим что-то великое вместе
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Icon name="Mail" size={20} className="text-blue-600" />
                    <span className="text-slate-600">
                      hello@designstudio.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="Phone" size={20} className="text-blue-600" />
                    <span className="text-slate-600">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="MapPin" size={20} className="text-blue-600" />
                    <span className="text-slate-600">Москва, Россия</span>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-slate-600 mb-4">
                    Следите за нами в социальных сетях:
                  </p>
                  <div className="flex space-x-4">
                    <Icon
                      name="Instagram"
                      size={24}
                      className="text-slate-400 hover:text-blue-600 cursor-pointer"
                    />
                    <Icon
                      name="Twitter"
                      size={24}
                      className="text-slate-400 hover:text-blue-600 cursor-pointer"
                    />
                    <Icon
                      name="Linkedin"
                      size={24}
                      className="text-slate-400 hover:text-blue-600 cursor-pointer"
                    />
                    <Icon
                      name="Facebook"
                      size={24}
                      className="text-slate-400 hover:text-blue-600 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Имя
                    </label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Отправить сообщение
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Palette" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">DesignStudio</span>
              </div>
              <p className="text-slate-400">
                Создаём выдающиеся дизайн-решения для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Веб-дизайн
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    UX/UI дизайн
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Брендинг
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Иллюстрации
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Команда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Карьера
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-slate-400">
                <p>hello@designstudio.com</p>
                <p>+7 (999) 123-45-67</p>
                <p>Москва, Россия</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 DesignStudio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
