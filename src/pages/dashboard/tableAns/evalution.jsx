import "./evalution.css";

const evaluations = [
  {
    key: "Mention 2 types of force",
    marks: "1",
    evaluation:
      "The student mentioned two types of force: contact force and field force, earning 1 mark.",
  },
];

function Evalution({ rubrics, hoveredId, obtainedMarks, setHoveredId }) {
  console.log("EValue", hoveredId, rubrics )
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <div className="evalution">
        {rubrics.map((item, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              border: "2px solid red",
              borderRadius: "15px",
              float: "right",
            }}
            key={index}
            className={`card eval-card ${
              hoveredId === item.id ? "highlight" : ""
            }`}
          >
            <div className="eval-text">
              <h4 style={{ textAlign: "center" }}>{item.evaluation} </h4>
            </div>
            <div className="mark">
              <h4
                style={{
                  textAlign: "center",
                  backgroundColor: item?.marks <= 0 ? "#f46315" : "#43a047",
                }}
              >
                {item.marks}{" "}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div style={{ width: "100%", backgroundColor:"pink" }}>
        <h3>
          {" "}
          <b>Total Final Marks </b> <b>{obtainedMarks} Marks </b>
        </h3>
      </div>
    </div>
  );
}

export default Evalution;
