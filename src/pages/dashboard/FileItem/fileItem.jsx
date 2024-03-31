import React, { useState } from "react";
import "./fileItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faFileAlt,
  faPenToSquare,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Document, Page, pdfjs } from "react-pdf";
import { Box, Modal } from "@mui/material";

const FileItem = ({ file, deleteFile }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  const handleOpen = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedPdf(null);
    setOpen(false);
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <>
      {/* className="file-item" */}
      <li key={file.name}>
        <FontAwesomeIcon icon={faFileAlt} />
        <p>{file.name}</p>
        <div className="actions">
          {/* <div className="loading"></div> */}
          {file.isUploading && (
            // <span>
            <>
              <span>
                <FontAwesomeIcon
                  icon={faEye}
                  className="fa-solid"
                  onClick={() => deleteFile(file.name)}
                />
              </span>
              <span>
                <p>Edit</p>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="fa-solid"
                  onClick={() => deleteFile(file.name)}
                />
              </span>
              <span>
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="fa-spin"
                  onClick={() => deleteFile(file.name)}
                />{" "}
              </span>
            </>
            // </span>
          )}
          {!file.isUploading && (
            <>
              <span>
                <span className="icons-words"> View </span>
                <FontAwesomeIcon
                  icon={faEye}
                  className="fa-solid"
                  onClick={() => handleOpen(file)}
                />{" "}
              </span>
              <span>
                <span className="icons-words"> Edit </span>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="fa-solid"
                  onClick={() => deleteFile(file.name)}
                />
              </span>
              <span>
                <span className="icons-words"> Delete </span>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="fa-solid"
                  onClick={() => deleteFile(file.name)}
                />
              </span>
            </>
          )}
        </div>
        <Modal open={open} onClose={handleClose} className="modal-class">
          <Box>
            <div className="pdf-div">
              <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.apply(null, Array(numPages))
                  .map((x, i) => i + 1)
                  .map((page) => 
                  {
                    return (
                      <Page
                        pageNumber={page}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    );
                  })}
                {/* {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={600} // Adjust width as needed
                  />
                ))} */}
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div>
          </Box>
        </Modal>
      </li>
    </>
  );
};

export default FileItem;
