import { Card } from "@material-tailwind/react";
import React, { useState } from "react";
import { EachQuestion } from "./eachQuestion";
import "./pagination.css";
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
    },    {
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
  const questions = data.map((each, i) => each);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const goToQuestion = (index) => {
    if (index >= 0 && index < data.length) {
      setCurrentQuestionIndex(index);
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="exam-container">
        <div className="question-display">
          <Card>
            {/* {questions.map((head, index) => {
              return ( */}
            <EachQuestion
              head={data[currentQuestionIndex]}
              arr={data.length}
              currentQuestionIndex={currentQuestionIndex}
              goToQuestion={goToQuestion}
            />
            {/* );
            })} */}
          </Card>
        </div>
      </div>

      <div className="question-palette">
        <h4>View Question Palette:</h4>
        {data.map((each, index) => (
          <button
            key={index}
            className={currentQuestionIndex === index ? "active" : ""}
            style={{width:"65px", height:"60px"}}
            onClick={() => goToQuestion(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TableComponent;
