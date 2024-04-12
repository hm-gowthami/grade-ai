import FeedbackItem from "./feedbackComp";

const FeedbackList = ({ feedbackData }) => {
  return (
    <div>
      {feedbackData.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
};
export default FeedbackList;
