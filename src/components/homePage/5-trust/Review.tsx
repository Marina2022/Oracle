import React from 'react';
import {Card} from "@/components/ui/card";
import {ReviewType} from "@/types/review";

const Review = ({review}:{review: ReviewType}) => {
  return (
    <li >
      <Card className="glassmorphism p-6 hover:scale-[1.02] transition-all duration-300">
        {review.name}
      </Card>
    </li>
  );
};

export default Review;