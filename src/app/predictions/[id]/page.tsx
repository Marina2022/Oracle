import React from 'react';
import TopBar from '@/components/predictionPage/1-top-bar/TopBar';
import YourPrediction from "@/components/predictionPage/2-your-prediction/YourPrediction";

const Page = () => {
  return (
    <>
      <TopBar/>
      <div className="pt-36 container">
        <div className=" py-4 sm:py-8 space-y-4 sm:space-y-8">
          <YourPrediction/>


        </div>

      </div>
    </>
  );
};

export default Page;