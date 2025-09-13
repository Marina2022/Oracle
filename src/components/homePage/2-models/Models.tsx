import {Badge} from '@/components/ui/badge';
import React from 'react';

const Models = () => {
  return (
    <section id="models" className="container py-20 h-screen ">
      <div className="text-center">
        <Badge className="bg-accent/20 text-accent border-accent/30 mb-6 text-center">
          ИИ модели
        </Badge>


      <h2 className="text-4xl lg:text-5xl font-bold mb-6">
        <span className="gradient-text">7 ИИ-моделей </span>
        работают для вас
      </h2>


      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Мы интегрировали лучшие мировые и российские ИИ-модели для получения максимально точных прогнозов через консенсус
        искусственного интеллекта.
      </p>


      </div>
    </section>
  );
};

export default Models;