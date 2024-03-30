import React from "react";
import "./fileItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faPenToSquare,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const FileItem = ({ file, deleteFile }) => {
  return (
    <>
      <li className="file-item" key={file.name}>
        <FontAwesomeIcon icon={faFileAlt} />
        <p>{file.name}</p>
        <div className="actions">
          <div className="loading"></div>
          {file.isUploading && (
            <>
              <FontAwesomeIcon
                icon={faSpinner}
                className="fa-spin"
                onClick={() => deleteFile(file.name)}
              />
              <FontAwesomeIcon
                icon={faSpinner}
                className="fa-spin"
                onClick={() => deleteFile(file.name)}
              />
            </>
          )}
          {!file.isUploading && (
            <span className="icon-two">
             <p>Edit</p> <FontAwesomeIcon
                icon={faPenToSquare}
                //className="fa-solid"
                onClick={() => deleteFile(file.name)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => deleteFile(file.name)}
              />
            </span>
          )}
        </div>
      </li>
    </>
  );
};

export default FileItem;
