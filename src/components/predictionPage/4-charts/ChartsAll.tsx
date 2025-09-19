import React from 'react';
import PredictionPieChart from "@/components/predictionPage/4-charts/PredictionPieChart";
import {PredictionDetailed} from "@/components/features/prediction/predictionTypes";

const ChartsAll = ({prediction}:{prediction:PredictionDetailed}) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <PredictionPieChart voting={prediction.voting} />

    </div>
  );
};

export default ChartsAll;