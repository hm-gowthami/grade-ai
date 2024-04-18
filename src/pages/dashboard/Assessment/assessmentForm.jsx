import React, { useState } from "react";

import { Input, Button, Textarea, Typography } from "@material-tailwind/react";
import axios from "axios";
import "./assessment.scss";
import TableComponent from "../tableAns/tableAns";
import Spinner from "./spinner";

const AssessmentFormPage = () => {
  const [formData, setFormData] = useState({
    question: "",
    total_marks: "",
    answer: "",
    rubrics: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [error, setError] = useState("");

  const isFormIncomplete =
    formData.total_marks.trim() === "" ||
    formData.question.trim() === "" ||
    formData.answer.trim() === "" ||
    formData.rubrics.trim() === "";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormIncomplete) {
      // You could set an error message here if needed
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://13.234.113.33:5000/evaluate",
        formData
      );
      if (response.status === 200) {
        if (typeof response?.data === "object" && response !== null) {
          // Adding new objects to the nestedArray
          const updateData = (data) => {
            // const additionalObject = { subKey3: "subValue3" };

            // Combining the existing nestedArray with the new object
            const combinedArray = [...data.rubrics];

            // Assigning unique IDs to each object in the combined array
            const updatedNestedArray = combinedArray.map((item, index) => ({
              ...item,
              id: index + 1, // Start ids from 1 and increment for each object
            }));

            // Update the original data structure
            data.rubrics = updatedNestedArray;

            return data;
          };
          console.log("updated-->Data", updateData(response.data));
          setResultData(updateData(response.data));
        } else {
          console.error("Response is not an object:", response.data);
          setError(response?.data);
        }
      }
    } catch (error) {
      console.error("There was an error with the API call", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="parent-div">
      <div>
        <form className="form-ass">
          <div className="text-center">
            <Typography variant="h2" color="black" className="animated-text">
              {" "}
              Assessment
            </Typography>
          </div>
          <div className="div-input-parent">
            <div className="div-input-1">
              <Typography
                variant="large"
                color="black"
                className="mb-3 font-medium"
              >
                Question
              </Typography>
              <Input
                size="lg"
                style={{ color: "black", fontSize: "18px" }}
                fullWidth
                type="text"
                name="question"
                value={formData.question}
                onChange={handleChange}
                placeholder="Enter a text"
              />{" "}
            </div>{" "}
            <div className="div-input-2">
              <Typography
                variant="large"
                color="black"
                className="mb-3 font-medium"
              >
                Marks
              </Typography>
              <Input
                size="lg"
                style={{ color: "black", fontSize: "18px" }}
                fullWidth
                type="text"
                name="total_marks"
                value={formData.total_marks}
                onChange={handleChange}
                placeholder="Enter a text"
              />{" "}
            </div>
          </div>
          <div className="div-input">
            <Typography
              variant="large"
              color="black"
              className="mb-3 font-medium"
            >
              Answer
            </Typography>
            <Textarea
              style={{ color: "black", fontSize: "18px" }}
              className="input-field"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              color="lightBlue"
              size="regular"
              outline={true}
              placeholder="Type your message here"
            />
          </div>

          <div className="div-input-rubrics">
            <Typography
              variant="large"
              color="black"
              className="mb-3 font-medium"
            >
              Rubrics
            </Typography>
            <Textarea
              color="lightBlue"
              name="rubrics"
              value={formData.rubrics}
              onChange={handleChange}
              style={{ color: "black", fontSize: "18px" }}
              size="regular"
              outline={true}
              placeholder="Type your message here"
            />
          </div>
          <Button
            disabled={isFormIncomplete}
            className="button-ass"
            onClick={handleSubmit}
          >
            Assessment
          </Button>
        </form>
      </div>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <h2 style={{ color: "red" }}>{error}</h2>
        ) : (
          resultData && <TableComponent data={resultData} />
        )}
      </div>
    </div>
  );
};

export default AssessmentFormPage;
