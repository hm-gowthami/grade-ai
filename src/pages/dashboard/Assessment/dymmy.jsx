import React, { useState } from "react";

function DynamicForm() {
  // State for the static fields
  const [firstTextArea, setFirstTextArea] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondTextArea, setSecondTextArea] = useState("");

  // State for the dynamic fields
  const [dynamicInputs, setDynamicInputs] = useState([
    { textarea: "", number: "" },
  ]);

  // Function to handle input changes in dynamic fields
  const handleDynamicInputChange = (index, event) => {
    const newInputs = [...dynamicInputs];
    newInputs[index][event.target.name] = event.target.value;
    setDynamicInputs(newInputs);
  };

  // Function to add new input row to dynamic fields
  const addDynamicInput = () => {
    setDynamicInputs([...dynamicInputs, { textarea: "", number: "" }]);
  };

  return (
    <form
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "20px",
      }}
    >
      
      <div>
        {dynamicInputs.map((input, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <textarea
              name="textarea"
              placeholder="Dynamic textarea"
              value={input.textarea}
              onChange={(e) => handleDynamicInputChange(index, e)}
              style={{ marginRight: "5px" }}
            />
            <input
              type="number"
              name="number"
              placeholder="Dynamic number"
              value={input.number}
              onChange={(e) => handleDynamicInputChange(index, e)}
            />
          </div>
        ))}
        <button type="button" onClick={addDynamicInput}>
          +
        </button>
      </div>
    </form>
  );
}

export default DynamicForm;
