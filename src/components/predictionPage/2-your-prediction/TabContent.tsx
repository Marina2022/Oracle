import React from 'react';
import {ModelForDetailedPrediction, PredictionDetailed} from "@/components/features/prediction/predictionTypes";
import {Brain} from 'lucide-react';
import {Badge} from '@/components/ui/badge';

const TabContent = ({model}: { model: ModelForDetailedPrediction }) => {
  return (

    <>
      <div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-3 sm:p-4 bg-muted/30 rounded-lg">
        <div className="flex items-center gap-3 ">
          <div
            className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Brain className="w-4 sm:h-5 sm:w-5 text-white"/>
          </div>
          <div>
            <h3 className="font-medium text-sm sm:text-base">{model.modelTitle}</h3>
            <div className="flex items-center gap-2 mt-1">
              <Badge className="px-2 py-0.5 font-medium">{model.answerIsPositive ? "ДА" : "НЕТ"}</Badge>
              <span className="text-xs sm:text-sm text-muted-foreground">Уверенность: {model.confidence}%</span>
            </div>
          </div>
        </div>

        <div className="text-left sm:text-right ">
          <div className="text-xs sm:text-sm text-muted-foreground">Историческая точность</div>
          <div className="flex items-center gap-2">----</div>
        </div>
      </div>


    </>
  );
};

export default TabContent;