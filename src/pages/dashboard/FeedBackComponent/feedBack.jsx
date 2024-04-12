import React from "react";
import FeedbackPage from "./FeedbackPage";
import ImageComponent from "./imageComponent";
const FeedBackPageUI = () => {
  return (
    <div>
      <FeedbackPage imageUrl={<ImageComponent />} />
    </div>
  );
};

export default FeedBackPageUI;
