import React, { useState, useEffect } from "react";
import axios from "axios";
import FeedbackList from "./FeedbackList";

const FeedbackPage = ({ imageUrl }) => {
  const [feedbackData, setFeedbackData] = useState([]);
  const sampleData = [
    {
      id: 1,
      content:
        "You should have simplified first before differentiating, instead of using the product rule.",
      type: "warning",
      coordinates: { x: 100, y: 50 },
    },
    {
      id: 2,
      content: "Correct answer in the preferred form.",
      type: "positive",
      coordinates: { x: 300, y: 100 },
    },
    // ... more feedback objects
  ];

  useEffect(() => {
    const fetchFeedbackData = async () => {
      setFeedbackData(sampleData);
      console.log("FeedBackDATA", feedbackData);
      //   try {
      //     const response = await axios.get('YOUR_API_ENDPOINT');
      //     setFeedbackData(response.data);
      //   } catch (error) {
      //     console.error('Error fetching feedback data', error);
      //   }
    };

    fetchFeedbackData();
  }, []);

  const styles = {
    position: "relative",
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    width: "auto", // set this to match your image aspect ratio
    height: "500px", // set this to match your image aspect ratio
  };

  return (
    <div style={styles}>
      <FeedbackList feedbackData={feedbackData} />
    </div>
  );
};
export default FeedbackPage;
