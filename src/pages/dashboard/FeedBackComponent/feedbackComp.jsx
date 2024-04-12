 const FeedbackItem = ({ feedback }) => {
    const styles = {
      position: 'absolute',
      top: `${feedback.coordinates.y}px`,
      left: `${feedback.coordinates.x}px`,
      border: '1px solid',
      borderColor: feedback.type === 'warning' ? 'red' : 'green',
      padding: '5px',
      borderRadius: '5px',
      backgroundColor: feedback.type === 'warning' ? '#FFD2D2' : '#D4EDDA',
    };
  
    return (
      <div style={styles}>
        <p>{feedback.content}</p>
      </div>
    );
  };
  export default FeedbackItem
  