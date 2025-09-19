import React from 'react';
import Logo from "@/components/shared/Logo";
import {Github, Linkedin, Mail, MapPin, Phone, Twitter} from 'lucide-react';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {Card} from "@/components/ui/card";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-6 gap-8 mb-12">

          <div className="lg:col-span-2 space-y-6">
            <Logo big={true}/>
            <p className="text-muted-foreground leading-relaxed">Первая в России платформа сравнения прогнозов от ИИ.
              Объединяем 7 ведущих ИИ-моделей для получения максимально точных прогнозов.</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4"/>
                <span>Москва, Россия</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4"/>
                <a href="mailto:hello@oracle-ai.ru"
                   className="hover:text-primary transition-colors">hello@oracle-ai.ru</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4"/>
                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
              </div>
            </div>

            <ul className="flex space-x-4">
              <li>
                <Button asChild
                        className="bg-transparent hover:bg-accent dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-muted-foreground hover:text-primary">
                  <a target="_blank" href="https://www.twitter.com"><Twitter/></a>
                </Button>
              </li>

              <li>
                <Button asChild
                        className="bg-transparent hover:bg-accent dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-muted-foreground hover:text-primary">
                  <a target="_blank" href="https://www.linkedin.com"><Linkedin/></a>
                </Button>
              </li>

              <li>
                <Button asChild
                        className="bg-transparent hover:bg-accent dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-muted-foreground hover:text-primary">
                  <a target="_blank" href="https://www.github.com"><Github/></a>
                </Button>
              </li>

              <li>
                <Button asChild
                        className="bg-transparent hover:bg-accent dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-muted-foreground hover:text-primary">
                  <a href="mailto:hello@oracle-ai.ru"><Mail/></a>
                </Button>
              </li>
            </ul>


          </div>
          <ul className="space-y-2">
            <h4 className="font-medium">Продукт</h4>
            <li className="space-y-3">
              <Link href="/public#working-process"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Как это
                работает</Link>
            </li>
            <li className="space-y-3">
              <Link href="/public#models"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">ИИ Модели</Link>
            </li>
            <li className="space-y-3">
              <Link href="/public#predictions"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Прогнозы</Link>
            </li>
            <li className="space-y-3">
              <Link href="/public#working-process"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Цены</Link>
            </li>
            <li>
              <a href="#"
                 className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"><span>Документация API</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-external-link w-3 h-3" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <h4 className="font-medium">Компания</h4>
            <li className="space-y-3">
              <Link href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">О нас</Link>
            </li>
            <li className="space-y-3">
              <Link href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Карьера</Link>
            </li>
            <li className="space-y-3">
              <Link href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Блог</Link>
            </li>
            <li className="space-y-3">
              <Link href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Пресс-центр</Link>
            </li>
            <li className="space-y-3">
              <Link href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Инвесторы</Link>
            </li>
          </ul>

          <ul className="space-y-2">
            <h4 className="font-medium">Поддержка</h4>
            <li className="space-y-3">
              <Link href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Центр помощи</Link>
            </li>
            <li className="space-y-3">
              <Link href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Связаться с
                нами</Link>
            </li>

            <li>
              <a href="#"
                 className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"><span>Статус системы</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-external-link w-3 h-3" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </li>

            <li className="space-y-3">
              <Link href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Сообщить об
                ошибке</Link>
            </li>
            <li className="space-y-3">
              <Link href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Обучение</Link>
            </li>
          </ul>

          <ul className="space-y-2">
            <h4 className="font-medium">Правовая информация</h4>
            <li className="space-y-3">
              <Link href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Пользовательское
                соглашение</Link>
            </li>
            <li className="space-y-3">
              <Link href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Политика
                конфиденциальности</Link>
            </li>
            <li className="space-y-3">
              <Link href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Обработка
                персональных
                данных</Link>
            </li>
            <li className="space-y-3">
              <Link href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Политика
                cookies</Link>
            </li>
            <li className="space-y-3">
              <Link href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">Лицензия</Link>
            </li>
          </ul>
        </div>

        <Separator className="mb-7"/>

        <Card className="glassmorphism p-6 text-center  ">
          <div className="flex flex-col items-start md:flex-row gap-6 md:justify-between md:items-center ">
            <div className="text-left">
              <h4 className="font-medium mb-2">Подписаться на обновления</h4>
              <p className="text-sm text-muted-foreground">Получайте новости о новых ИИ-моделях и функциях платформы</p>
            </div>

            <div className="flex space-x-3 ">
              <input type="email" placeholder="Ваш email"
                     className="px-4 py-2 bg-input border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full max-w-[193px]"/>
              <Button
                className="text-primary-foreground h-9 px-4 py-2 has-[>svg]:px-3 bg-primary hover:bg-primary/90">Подписаться</Button>
            </div>
          </div>
        </Card>

        <Separator className="my-7"/>

        <div
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <span>© 2025 Оракул AI. Все права защищены.</span>
            <div className="flex items-center space-x-4"><span>Сделано с ❤️ в России</span><span>•</span><span>Версия 1.0.0</span>
            </div>
          </div>

          <div className="flex items-center space-x-4"><span className="flex items-center space-x-2"><div
            className="w-2 h-2 bg-chart-4 rounded-full pulse-animation"></div><span>Все системы работают</span></span>
          </div>
        </div>

        <Separator className="my-7"/>

        <div className="text-center text-xs text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed">
          Платформа Оракул предназначена исключительно для развлечения и образования. Мы не предоставляем финансовые
          советы и не осуществляем азартные игры. Все прогнозы носят информационный характер. Администрация не несет
          ответственности за принятые на основе прогнозов решения. 18+
        </div>
      </div>
    </footer>
  )
}

export default Footer;