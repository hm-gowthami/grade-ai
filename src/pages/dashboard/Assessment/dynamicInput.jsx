import React, { useState } from 'react';
import './dynamicInput.scss';

function DynamicForm() {
  const [rows, setRows] = useState([
    { id: 1, number1: '', text: '', number2: '' }
  ]);

  const handleChangeDynamic = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handleAddRow = () => {
    const newRow = { id: rows.length + 1, number1: '', text: '', number2: '' };
    setRows([...rows, newRow]);
  };

  const handleRemoveRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  return (
    <div className="dynamic-form">
      {rows.map((row, index) => (
        <div key={row.id} className="row">
          <input
            type="number"
            value={row.number1}
            onChange={(e) => handleChangeDynamic(index, 'number1', e.target.value)}
            placeholder="Number 1"
          />
          <input
            type="text"
            value={row.text}
            onChange={(e) => handleChangeDynamic(index, 'text', e.target.value)}
            placeholder="Text"
          />
          <input
            type="number"
            value={row.number2}
            onChange={(e) => handleChangeDynamic(index, 'number2', e.target.value)}
            placeholder="Number 2"
          />
          {rows.length > 1 && (
            <button onClick={() => handleRemoveRow(index)} className="remove-btn">Remove</button>
          )}
        </div>
      ))}
      <button onClick={handleAddRow}>+</button>
    </div>
  );
}

export default DynamicForm;
