import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Sun" size={28} className="text-primary" />
            <h1 className="text-2xl font-heading font-bold text-foreground">Лето.com</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">
              Галерея
            </a>
            <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Блог
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Устное сочинение по русскому языку
          </Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
            ЛЕТО ЧАЛЬ ЧЭСОКИ
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Погружение в мир летних воспоминаний через слово и образ. 
            Исследование темы лета в русской литературе и личных переживаниях.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Начать чтение
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Icon name="BookOpen" size={20} className="mr-2" />
              О проекте
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Летняя галерея
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Визуальные образы, вдохновляющие на размышления о лете
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/61db86b6-9d0e-41b2-ae64-194aafcc808e.jpg"
                  alt="Летние поля"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">Золотые поля</h3>
                <p className="text-muted-foreground text-sm">
                  Бескрайние просторы летних полей под ярким солнцем
                </p>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/43d507cf-9caf-409a-a2c9-e6a5ce917bad.jpg"
                  alt="Летний закат"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">Летний вечер</h3>
                <p className="text-muted-foreground text-sm">
                  Теплый закат в высокой траве, момент тишины и покоя
                </p>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 md:col-span-2 lg:col-span-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/8f6f51ad-26f2-4d9d-bdb4-0bb1215cebe3.jpg"
                  alt="Цветочный луг"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">Цветочные луга</h3>
                <p className="text-muted-foreground text-sm">
                  Яркие краски летних полевых цветов под ясным небом
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Блог о лете
            </h2>
            <p className="text-lg text-muted-foreground">
              Размышления, воспоминания и литературные зарисовки
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline">Литература</Badge>
                <span className="text-sm text-muted-foreground">4 сентября 2025</span>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Образы лета в русской поэзии
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                От Пушкина до современных поэтов — как менялось восприятие летней поры 
                в русской литературе. Анализ ключевых произведений и их влияние на 
                формирование культурного образа лета...
              </p>
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                Читать далее
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline">Воспоминания</Badge>
                <span className="text-sm text-muted-foreground">3 сентября 2025</span>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Детское лето в деревне
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Личные воспоминания о летних каникулах у бабушки: запахи сена, 
                вкус парного молока, бесконечные дни у реки. Как детские впечатления 
                формируют наше восприятие мира...
              </p>
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                Читать далее
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline">Размышления</Badge>
                <span className="text-sm text-muted-foreground">2 сентября 2025</span>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Философия летнего времени
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Почему лето кажется нам особенным временем? Размышления о цикличности 
                природы, человеческой памяти и способности находить красоту в простых 
                моментах...
              </p>
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                Читать далее
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-muted/30 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Sun" size={24} className="text-primary" />
            <span className="font-heading font-semibold text-lg">Лето.com</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Устное сочинение по русскому языку © 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;