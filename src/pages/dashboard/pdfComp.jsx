// import { useState } from "react";
// import { Document, Page } from "react-pdf";

// function PdfComp(props) {
  // const [numPages, setNumPages] = useState();
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

//   return (
//     <div className="pdf-div">
      //      <p>
      //   Page {pageNumber} of {numPages}
      // </p>
      // <Document file={props.pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
      //   {Array.apply(null, Array(numPages))
      //     .map((x, i) => i + 1)
      //     .map((page) => {
      //       return (
      //         <Page
      //           pageNumber={page}
      //           renderTextLayer={false}
      //           renderAnnotationLayer={false}
      //         />
      //       );
      //     })}
      // </Document>
   
//     </div>
//   );
// }
// export default PdfComp;


import React, { useState } from 'react';
import { Modal, Button } from '@material-ui/core';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'tailwindscss/tailwind.scss';

const PdfComp = () => {
  const [open, setOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleOpen = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedPdf(null);
    setOpen(false);
  };

  const files = [
    { id: 1, name: 'Document 1', url: '/path/to/document1.pdf' },
    { id: 2, name: 'Document 2', url: '/path/to/document2.pdf' },
    // Add more files as needed
  ];

  return (
    <div>
    <table className= "table-auto" >
    <thead>
    <tr>
    <th className="px-4 py-2" > File Name < /th>
      < th className = "px-4 py-2" > Actions < /th>
        < /tr>
        < /thead>
        <tbody>
  {
    files.map((file) => (
      file.id}>
        { file.name } < /td>
        < td className = "border px-4 py-2" >
          <Button variant="contained" color = "primary" onClick = {() => handleOpen(file.url)}> View < /Button>
            < Button variant = "contained" color = "secondary" > Delete < /Button>
              < /td>
              < /tr>
          ))}
    </tbody>
  < /table>
  < Modal open = { open } onClose = { handleClose } >
    <div className="w-full h-full flex justify-center items-center" >
      <Document file={ selectedPdf } className = "outline-none" >
        <Page pageNumber={ 1 } />
          < /Document>
          < /div>
          < /Modal>
          < /div>
  );
};

export default PdfComp;