import { Card, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";
import "./tableAns.css";

export const EachQuestion = ({
  head,
  currentQuestionIndex,
  arr,
  goToQuestion,
}) => {
  const avg = 2;
  const { ans, marksObt, marksQn, qNo, qnT, rubrics } = head;
  return (
    <Card
      style={{
        border: "3px solid orange",
        padding: "20px",
        margin: "30px",
      }}
    >
      {" "}
      <h3>{`Question No. ${currentQuestionIndex + 1} of ${arr}`}</h3>
      <table className="table1">
        <thead className="thead1">
          <tr>
            <th className="th-thead1">{qNo}</th>
            <th>
              <h4>{qnT}</h4>
            </th>
            <th
              style={{
                width: "10%",
              }}
            >
              <h4>{marksQn} Marks</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr key={qNo}>
            <td className="ans-code-1">
              <Typography>Ans</Typography>
            </td>
            <td colSpan={2} className="ans-code">
              <h5>{ans}</h5>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <table className="table2">
        <tbody>
          <tr style={{ height: "80px" }}>
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
                  ) : (
                    <FontAwesomeIcon
                      icon={faExclamation}
                      size="2xl"
                      style={{ color: "#e60707" }}
                    />
                  )}
                </td>
                <td
                  style={{
                    backgroundColor: each?.marks >= avg ? "#43a047" : "#e60707",
                    padding: "20px",
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
        <tbody>
          <tr>
            <td style={{ width: "90%", padding: "20px" }}>
              <h2>Total Final Marks </h2>
            </td>
            <td style={{ width: "10%", padding: "20px" }}>
              <h2>
                <b>{marksObt} Marks </b>
              </h2>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop:"30px"
        }}
      >
        <button onClick={() => goToQuestion(currentQuestionIndex - 1)}>
          Previous Question
        </button>
        <button onClick={() => goToQuestion(currentQuestionIndex + 1)}>
          Skip & Next
        </button>
      </div>
    </Card>
  );
};
