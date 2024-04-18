import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./evalution.scss";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

// const evaluations = [
//   {
//     key: "Mention 2 types of force",
//     marks: "1",
//     evaluation:
//       "The student mentioned two types of force: contact force and field force, earning 1 mark.",
//   },
// ];

function Evalution({ rubrics, hoveredId, obtainedMarks, setHoveredId }) {
  console.log("EValue", hoveredId, rubrics);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3 className="eval-heading">Evaluation</h3>
      <div className="evalution">
        {rubrics.map((item, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "20px",
              border: item.marks <= 0 ? "2px solid red" : " 2px solid green",
              borderRadius: "15px",
              float: "right",
            }}
            key={index}
            className={`card eval-card ${
              hoveredId === item.id ? "highlight" : ""
            }`}
          >
            <div className="eval-text">
              <h4>{item.evaluation} </h4>
            </div>
            <div
              className="mark"
              style={{
                textAlign: "center",
                border: item.marks <= 0 ? "2px solid red" : " 2px solid green",
                backgroundColor: item?.marks <= 0 ? "red" : "green",
              }}
            >
              <h4>{item.marks}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="total-marks">
        <h3>
          {" "}
          <b>Total Marks :</b> <b>{obtainedMarks} </b>
        </h3>
      </div>
    </div>
  );
}

export default Evalution;
