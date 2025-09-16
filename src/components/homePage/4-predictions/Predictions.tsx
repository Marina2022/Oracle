import React from 'react';
import {Badge} from "@/components/ui/badge";
import {predictions} from "@/mocks/prediction";
import PredictionCard from "@/components/features/prediction/PredictionCard";

const Predictions = () => {

  const predictionsToShow = predictions.slice(0, 4)
  return (
    <section id="predictions" className="py-20 container">
      <div className="text-center mb-16">
        <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-6 pulse-animation">● LIVE</Badge>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">Актуальные прогнозы</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Следите за развитием событий в реальном времени. ИИ-модели обновляют свои прогнозы каждые 15 минут.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {
          predictionsToShow.map((prediction, i) => <PredictionCard key={i} prediction={prediction} />)
        }
      </div>
    </section>
  );
};

export default Predictions;