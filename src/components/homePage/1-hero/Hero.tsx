import React from 'react';
import FindOutYourFuture from "@/components/homePage/1-hero/FindOutYourFuture";
import RealTimePrediction from './RealTimePrediction';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 min-h-screen flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-primary/10 dark:via-background dark:to-accent/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-center container lg:pt-48 pt-24">
          <FindOutYourFuture/>
          <RealTimePrediction/>
        </div>
      </div>
    </section>
  );
};

export default Hero;