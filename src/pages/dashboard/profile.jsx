import React, { useState } from 'react';
   
export function Profile() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
 
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };
 
  const handleDelete = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };
 
  const handleView = (file) => {
    setSelectedFile(file);
  };
 
  const handleCloseView = () => {
    setSelectedFile(null);
  };
 
  return (
    <div>
      <input type="file" onChange={handleFileChange} multiple accept=".pdf, .txt, .jpg, .jpeg, .png" />
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {files.map((file, index) => (
            <tr key={index}>
              {file.name}</td>
              <td>{file.type}</td>
              <td>
                <button onClick={() => handleView(file)}>View</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleSave(index)}>Save</button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
      {selectedFile && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseView}>&times;</span>
            {selectedFile.type.startsWith('image/') ? (
              <img src={URL.createObjectURL(selectedFile)} alt="Preview" />
            ) : (
              <iframe title="File Preview" src={URL.createObjectURL(selectedFile)} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
 
export default Profile;
