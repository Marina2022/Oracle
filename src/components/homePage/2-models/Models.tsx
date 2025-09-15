import {Badge} from '@/components/ui/badge';
import React from 'react';
import {models} from "@/mocks/models";
import Model from "@/components/homePage/2-models/Model";

const Models = () => {
  return (
    <section id="models" className="container py-20 ">
      <div className="text-center">
        <Badge className="bg-accent/20 text-accent border-accent/30 mb-6 text-center">
          ИИ модели
        </Badge>


        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="gradient-text">7 ИИ-моделей </span>
          работают для вас
        </h2>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
          Мы интегрировали лучшие мировые и российские ИИ-модели для получения максимально точных прогнозов через
          консенсус
          искусственного интеллекта.
        </p>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            models.map(model => <Model key={model.id} model={model}/>)
          }
        </ul>
      </div>
    </section>
  );
};

export default Models;