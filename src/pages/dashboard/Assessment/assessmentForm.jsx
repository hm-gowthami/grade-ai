import React, { useState } from "react";

import { input, Button, Textarea, Typography } from "@material-tailwind/react";
import axios from "axios";
import "./assessment.scss";
import TableComponent from "../tableAns/tableAns";
import Spinner from "./spinner";
import { v4 as uuidv4 } from "uuid";

function generateUniqueId() {
  return uuidv4(); // Generates a UUID (e.g., 'f47ac10b-58cc-4372-a567-0e02b2c3d479')
}
const AssessmentFormPage = () => {
  const [formData, setFormData] = useState({
    question: "",
    total_marks: "",
    answer: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [error, setError] = useState("");
  const [dynamicInputs, setDynamicInputs] = useState([
    { id: generateUniqueId(), rubrics_text: "", rubric_mark: "" },
  ]);
  let rubricsCheck;
  for (let i = 0; i < dynamicInputs.length; i++) {
    rubricsCheck =
      dynamicInputs[i].rubrics_text.trim() === "" ||
      dynamicInputs[i].rubric_mark.trim() === "";
  }
  const isFormIncomplete =
    formData.total_marks.trim() === "" ||
    formData.question.trim() === "" ||
    formData.answer.trim() === "";
  const totalCheck = rubricsCheck || isFormIncomplete;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Function to handle input changes in dynamic fields
  const handleDynamicInputChange = (index, event) => {
    const newInputs = [...dynamicInputs];
    newInputs[index][event.target.name] = event.target.value;
    setDynamicInputs(newInputs);
  };

  // Function to add new input row to dynamic fields

  const addDynamicInput = () => {
    setDynamicInputs([
      ...dynamicInputs,
      { id: generateUniqueId(), rubrics_text: "", rubric_mark: "" },
    ]);
  };

  const handleRemoveRow = (index) => {
    let newRows = dynamicInputs.filter((item) => item.id !== index);
    setDynamicInputs(newRows);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (totalCheck) {
      // You could set an error message here if needed
      return;
    }
    setIsLoading(true);

    const formPayload = structuredClone(formData);
    let rubricsText = "";
    for (let i = 0; i < dynamicInputs.length; i++) {
      let a = dynamicInputs[i].rubrics_text;
      let b = dynamicInputs[i].rubric_mark;
      rubricsText = rubricsText + `${a}: ${b} marks; `;
    }
    console.log("rubricsText", rubricsText);

    let payload = {
      question: formPayload.question,
      total_marks: formPayload.total_marks,
      answer: formPayload.answer,
      rubrics: rubricsText && rubricsText,
    };
    console.log("payload", payload);
    // try {
    //   const response = await axios.post(
    //     "http://3.109.182.96:5000/answerEvaluation",
    //     payload
    //   );
    //   if (response.status === 200) {
    //     console.log("res", response);
    //     if (typeof response?.data === "object" && response !== null) {
    //       setResultData(response?.data);
    //     } else {
    //       setError(response?.data);
    //     }
    //   }
    // } catch (error) {
    //   console.error("There was an error with the API call", error);
    // } finally {
    setIsLoading(false);
    // }
  };

  return (
    <div className="parent-div">
      <div>
        <form className="form-ass">
          <div className="text-center">
            <Typography
              variant="h2"
              style={{ color: "#1b1b5e" }}
              className="animated-text"
            >
              {" "}
              Assessment
            </Typography>
          </div>
          <div className="div-input-parent">
            <div className="div-input-1">
              <Typography
                variant="h5"
                style={{ color: "#1b1b5e" }}
                className="mb-3 font-medium"
              >
                Question
              </Typography>
              <input
                size="lg"
                style={{ color: "#1b1b5e", fontSize: "18px" }}
                fullWidth
                type="text"
                name="question"
                value={formData.question}
                onChange={handleChange}
                onFocus={(e) => (e.target.style.border = "2px solid black")}
                onBlur={(e) => (e.target.style.border = "2px solid #ccc")}
                placeholder="Enter a text"
              />{" "}
            </div>{" "}
            <div className="div-input-2">
              <Typography
                variant="h5"
                style={{ color: "#1b1b5e" }}
                className="mb-3 font-medium"
              >
                Marks
              </Typography>
              <input
                size="lg"
                min={0}
                style={{ color: "#1b1b5e", fontSize: "18px" }}
                fullWidth
                type="number"
                name="total_marks"
                value={formData.total_marks}
                onChange={handleChange}
                placeholder="0"
              />{" "}
            </div>
          </div>
          <div className="div-input">
            <Typography
              variant="h5"
              style={{ color: "#1b1b5e" }}
              className="mb-3 font-medium"
            >
              Answer
            </Typography>
            <Textarea
              style={{ color: "#1b1b5e", fontSize: "18px" }}
              className="input-field"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              // color="lightBlue"
              size="regular"
              outline={true}
              placeholder="Give your answer"
            />
          </div>
          <div
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              overflowX: "hidden",
              width: "100%",
              // margin: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "10px",
                marginBottom: "10px",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                style={{ color: "#1b1b5e", width: "80%" }}
              >
                Rubrics
              </Typography>
              <Typography
                variant="h5"
                style={{ color: "#1b1b5e", marginRight: "55px" }}
              >
                marks
              </Typography>
            </div>
            {dynamicInputs.map((input, index) => (
              <div
                key={input.id}
                style={{
                  marginBottom: "10px",
                  marginLeft: "10px",
                  width: "100%",
                  paddingRight: "20px",
                }}
                className="div-input-parent-rubric"
              >
                <div className="div-input-dyn-1">
                  <input
                    size="lg"
                    style={{ color: "#1b1b5e", fontSize: "18px", width: "" }}
                    fullWidth
                    type="text"
                    name="rubrics_text"
                    value={input.rubrics_text}
                    onChange={(e) => handleDynamicInputChange(index, e)}
                    placeholder="Enter the rubrics"
                  />{" "}
                </div>{" "}
                <div
                  style={{
                    width: "20%",
                  }}
                >
                  <input
                    size="lg"
                    style={{
                      color: "#1b1b5e",
                      fontSize: "18px",
                      width: "100%",
                    }}
                    type="text"
                    name="rubric_mark"
                    value={input.rubric_mark}
                    onChange={(e) => handleDynamicInputChange(index, e)}
                    placeholder="0"
                  />{" "}
                </div>
                <div>
                  <button
                    onClick={addDynamicInput}
                    className="add-btn"
                    type="button"
                  >
                    <strong> + </strong>
                  </button>
                  {dynamicInputs.length > 1 && (
                    <button
                      onClick={() => handleRemoveRow(input.id)}
                      className="remove-rubric-btn"
                    >
                      <strong> x </strong>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Button
            disabled={totalCheck}
            className="button-ass"
            onClick={handleSubmit}
          >
            Assessment
          </Button>
        </form>
      </div>
      <div style={{ marginTop: "30px", width: "100%" }}>
        <div>
          {isLoading ? (
            <Spinner />
          ) : error ? (
            <h2 style={{ color: "red" }}>{error}</h2>
          ) : (
            resultData && <TableComponent data={resultData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AssessmentFormPage;
