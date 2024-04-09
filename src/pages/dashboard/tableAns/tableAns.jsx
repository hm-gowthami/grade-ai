import { Card } from "@material-tailwind/react";
import React from "react";
import { EachQuestion } from "./eachQuestion";

const TableComponent = () => {
  
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
      qnT: "Newton's First Law of Motion ?.",
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
    },     {
      qNo: "3.",
      qnT: "Newton's First Law of Motion ?.",
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
    },    {
      qNo: "4.",
      qnT: "Newton's First Law of Motion ?.",
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
    },    {
      qNo: "6.",
      qnT: "Newton's First Law of Motion ?.",
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
    },    {
      qNo: "2.",
      qnT: "Newton's First Law of Motion ?.",
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
  return (
    <Card style={{ border: "3px solid orange", padding: "20px" }}>
      {data.map((head) => {
        return <EachQuestion head={head} />;
      })}
    </Card>
  );
};

export default TableComponent;
