import { Card, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExclamation, faX } from "@fortawesome/free-solid-svg-icons";
import "./tableAns.css";

export const EachQuestion = ({ head }) => {
  const avg = 2;
  const { answer, obtainedMarks, marks, question, rubrics } = head;

  return (
    <Card
      style={{
        border: "3px solid #90EE90",
        padding: "20px",
        margin: "30px",
      }}
    >
      <table className="table1">
        <thead className="thead1">
          <tr>
            <th colSpan={2}>
              <h4> Q. {question}</h4>
            </th>
            <th
            // style={{
            //   width: "10%",
            // }}
            >
              <h4>{marks} Marks</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3} className="ans-code">
              <h5>{answer}</h5>
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
            <th className="rubrics-th3"> Marks</th>
          </tr>
        </tbody>
      </table>
      <br />
      <table className="table2">
        {rubrics.map((each) => {
          return (
            <tbody className="rubrics-cell-tr">
              <tr>
                <td className="rubrics-cell">{each.key}</td>

                <td className="rubrics-cell-icon">
                  {each?.marks >= avg ? (
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="2xl"
                      style={{ color: "#43a047" }}
                    />
                  ) : each?.marks === "0" ? (
                    <FontAwesomeIcon
                      icon={faX}
                      size="2xl"
                      style={{ color: "#cc0f3f" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faExclamation}
                      size="2xl"
                      style={{ color: "#f46315" }}
                    />
                  )}
                </td>
                <td
                  style={{
                    backgroundColor:
                      each?.marks >= avg
                        ? "#43a047"
                        : each?.marks === "0"
                        ? "#cc0f3f"
                        : "#f46315",
                    paddingLeft: "40px",
                  }}
                  className="rubrics-cell-icon-num"
                >
                  <b>{each.marks} </b>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <br />
      <table className="table2">
        <tbody className="thead1">
          <tr style={{ height: "70px" }}>
            <td colSpan={3} style={{ width: "80%" }}>
              <h3>
                {" "}
                <b>Total Final Marks </b>{" "}
              </h3>
            </td>
            <td style={{ width: "10%" }}>
              <h3>
                {" "}
                <b>{obtainedMarks} Marks </b>
              </h3>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};
