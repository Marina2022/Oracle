import React from 'react';
import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from '@/components/ui/button';
import {TrendingDown, TrendingUp} from "lucide-react";
import {PredictionDetailed} from "@/components/features/prediction/predictionTypes";

const YourPrediction = ({prediction}:{prediction: PredictionDetailed }) => {

  return (
    <Card className="p-4 sm:p-8 glassmorphism items-center">
      <Badge className="bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 mb-2 sm:mb-4 text-xs">
        {prediction.category}
      </Badge>
      <h1 className="gradient-text text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
        {prediction.title}
      </h1>
      <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto text-center">
        {prediction.description}
      </p>
      <div className="mt-4 sm:mt-8 p-4 sm:p-6 bg-muted/20 rounded-lg w-full text-center">
        <p className="font-medium mb-4 text-sm sm:text-base">Ваш прогноз</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90  border hover:text-accent-foreground border-border h-10 rounded-md px-6 has-[>svg]:px-4 gap-2 w-full sm:w-auto sm:px-8">
            <TrendingUp/>
            <span className="text-sm sm:text-base">Да (станет #1)</span>
          </Button>
          <Button className="border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 shadow-none border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4 gap-2 w-full sm:w-auto sm:px-8">
            <TrendingDown/>
            <span className="text-sm sm:text-base">НЕТ (не станет #1)</span>
          </Button>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mt-4">Ваш голос учтен! Спасибо за участие в прогнозе.</p>
      </div>
    </Card>
  );
};

export default YourPrediction;