import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

function PdfCompe() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  const [selectedFile, setSelectedFile] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfData, setPdfData] = useState(null);

  const onFileLoad = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setPdfData(e.target.result);
    };
    reader.readAsDataURL(file);
    setSelectedFile(file);
  };
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  return (
    <div>
      <h1>Pdfs---Gowthami</h1>
      <input type="file" accept=".pdf" onChange={onFileLoad} />
      {pdfData && (
        <Document file={pdfData} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      )}
      {pdfData && (
        <p>
          Page {pageNumber} of {numPages}
        </p>
      )}
    </div>
  );
}
export default PdfCompe;
