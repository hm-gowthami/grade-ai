import React, { useState } from "react";
import "./pagination.css"; // Assume your CSS styles are defined here
const data = [
  {
    qNo: "1.",
    qnT: "Newton's First Law of Motion ?.",
    marksQn: "6",
    ans:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    rubrics: [
      {
        key: "Clear definition provided",
        marks: 2,
      },
      {
        key: "Explanation of change in direction of light",
        marks: 0,
      },
      {
        key: "Explanation of medium change",
        marks: 0,
      },
      {
        key: "Explanation of change in direction of light",
        marks: 2,
      },
    ],
    marksObt: "4",
  },
  {
    qNo: "2.",
    qnT: "My name is Gowthami ?.",
    marksQn: "50",
    ans:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    rubrics: [
      {
        key: "Clear definition provided",
        marks: "1",
      },
      {
        key: "Explanation of change in direction of light",
        marks: "1",
      },
      {
        key: "Explanation of medium change",
        marks: "2",
      },
      {
        key: "Explanation of change in direction of light",
        marks: "2",
      },
    ],
    marksObt: "40",
  },
  {
    qNo: "3.",
    qnT: "My name is Surya ?.",
    marksQn: "50",
    ans:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    rubrics: [
      {
        key: "Clear definition provided",
        marks: "1",
      },
      {
        key: "Explanation of change in direction of light",
        marks: "1",
      },
      {
        key: "Explanation of medium change",
        marks: "2",
      },
      {
        key: "Explanation of change in direction of light",
        marks: "2",
      },
    ],
    marksObt: "40",
  },
  {
    qNo: "4.",
    qnT: "My name is Ravi ?.",
    marksQn: "50",
    ans:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    rubrics: [
      {
        key: "Clear definition provided",
        marks: "1",
      },
      {
        key: "Explanation of change in direction of light",
        marks: "1",
      },
      {
        key: "Explanation of medium change",
        marks: "2",
      },
      {
        key: "Explanation of change in direction of light",
        marks: "2",
      },
    ],
    marksObt: "40",
  },
  {
    qNo: "5.",
    qnT: "I am jay ?.",
    marksQn: "50",
    ans:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    rubrics: [
      {
        key: "Clear definition provided",
        marks: "1",
      },
      {
        key: "Explanation of change in direction of light",
        marks: "1",
      },
      {
        key: "Explanation of medium change",
        marks: "2",
      },
      {
        key: "Explanation of change in direction of light",
        marks: "2",
      },
    ],
    marksObt: "40",
  },
  {
    qNo: "6.",
    qnT: "I am Prakash ?.",
    marksQn: "50",
    ans:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    rubrics: [
      {
        key: "Clear definition provided",
        marks: "1",
      },
      {
        key: "Explanation of change in direction of light",
        marks: "1",
      },
      {
        key: "Explanation of medium change",
        marks: "2",
      },
      {
        key: "Explanation of change in direction of light",
        marks: "2",
      },
    ],
    marksObt: "40",
  },
  {
    qNo: "7.",
    qnT: "I am Prakash ?.",
    marksQn: "50",
    ans:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    rubrics: [
      {
        key: "Clear definition provided",
        marks: "1",
      },
      {
        key: "Explanation of change in direction of light",
        marks: "1",
      },
      {
        key: "Explanation of medium change",
        marks: "2",
      },
      {
        key: "Explanation of change in direction of light",
        marks: "2",
      },
    ],
    marksObt: "40",
  },
];
// Dummy data for questions, you'd replace this with your actual data //new Array(20).fill(null).map((each, i) => ({

const questions = data.map((each, i) => ({
  id: ` ${each.qNo}`,
  text: ` ${each.qnT}`,
}));

const PaginationCard = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const goToQuestion = (index) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  return (
    <div className="exam-container">
      <div className="question-display">
        <h3>{`Question No. ${currentQuestionIndex + 1} of ${
          questions.length
        }`}</h3>
        <p>{questions[currentQuestionIndex].text}</p>
        <button onClick={() => goToQuestion(currentQuestionIndex - 1)}>
          Previous Question
        </button>
        <button onClick={() => goToQuestion(currentQuestionIndex + 1)}>
          Skip & Next
        </button>
      </div>
      <div className="question-palette">
        <h4>View Question Palette:</h4>
        {questions.map((each, index) => (
          <button
            key={index}
            className={currentQuestionIndex === index ? "active" : ""}
            onClick={() => goToQuestion(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationCard;
