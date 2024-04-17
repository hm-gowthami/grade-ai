import React, { useState } from "react";

import { Card } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExclamation, faX } from "@fortawesome/free-solid-svg-icons";
import "./tableAns.scss";
import Evalution from "./evalution";

export const EachQuestion = ({ head }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [specialText, setSpecialText] = useState(null);

  const handleMouseEnter = (id, text) => {
    console.log("text", text);
    setHoveredId(id);
    setSpecialText(text);
    console.log("hoveredId", hoveredId, text, specialText);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setSpecialText(null);
  };

  // const dummyData = {
  //   question:
  //     "what is force? mention its SI unit? Give 2 types of force? (5 marks)",
  //   answer:
  //     "Force is an external agent that is responsible for changing a body’s state of rest motion. It's a vector    possessing both magnitude and direction. A type of force is contact force and electromagnetic force.",
  //   rubrics: [
  //     {
  //       key: "Force causes change in the body's state of rest or motion",
  //       evaluation:
  //         "The student correctly mentioned that force is responsible for changing a body’s state of rest motion.",
  //       marks: "2",
  //       highlightedText:
  //         "Force is an external agent that is responsible for changing a body’s state of rest motion.",
  //     },
  //     {
  //       key: "Force has Direction and Magnitude",
  //       evaluation:
  //         "The student correctly stated that force is a vector possessing both magnitude and direction.",
  //       marks: "1",
  //       highlightedText:
  //         "It's a vector possessing both magnitude and direction.",
  //     },
  //     {
  //       key: "SI Unit of Force[Newton(N)]",
  //       evaluation: "The student did not mention the SI unit of force.",
  //       marks: "0",
  //       highlightedText: "",
  //     },
  //     {
  //       key: "Type of Force",
  //       evaluation: "The student mentioned contact force as one type of force.",
  //       marks: "0.5",
  //       highlightedText: "A type of force is contact force",
  //     },
  //   ],
  //   obtained_marks: "4",
  // };
  // const avg = 2;
  // const {
  //   answer,
  //   obtained_marks,
  //   marks,
  //   question,
  //   rubrics,
  //   evaluation,
  // } = dummyData;
  const { answer, obtained_marks, marks, question, rubrics } = head;

  const parts =
    specialText && answer.split(new RegExp(`(${specialText})`, "gi"));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "auto",
      }}
    >
      <Card
        // style={{
        //   border: "3px solid #90EE90",
        //   padding: "20px",
        //   margin: "30px",
        // }}
        className="card-1"
      >
        <table className="table1">
          <thead className="thead1">
            <tr>
              <th colSpan={3}>
                <h4> Q. {question}</h4>
              </th>
              {/* <th
            >
              <h4>{marks} Marks</h4>
            </th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3} className="ans-code">
                <h5>
                  {" "}
                  {/* {answer} */}
                  {specialText
                    ? parts.map((part, index) =>
                        part.toLowerCase() === specialText.toLowerCase() ? (
                          <span key={index} className="highlight">
                            {part}
                          </span>
                        ) : (
                          <span key={index}>{part}</span>
                        )
                      )
                    : answer}
                </h5>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table className="table2">
          <tbody>
            <tr style={{ height: "70px" }}>
              <th className="rubrics-th1">Rubrics</th>
              <th className="rubrics-th2"> Evaluation</th>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="table2">
          <div className="rubrics-cell-tr">
            {rubrics.map((each) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                  key={each.id}
                  onMouseEnter={() =>
                    handleMouseEnter(each?.id, each?.highlightedText)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="rubrics-cell">{each.key}</div>

                  <div className="rubrics-cell-icon">
                    {each?.marks <= 0 ? (
                      <FontAwesomeIcon
                        icon={faExclamation}
                        size="2xl"
                        style={{ color: "#f46315" }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faCheck}
                        size="2xl"
                        style={{ color: "#43a047" }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <br />
      </Card>
      <Card className="card-2"
        // style={{
        //   border: "3px solid red",
        //   padding: "20px",
        //   margin: "30px",
        // }}
      >
        <Evalution
          obtainedMarks={obtained_marks}
          rubrics={rubrics}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
      </Card>
    </div>
  );
};
