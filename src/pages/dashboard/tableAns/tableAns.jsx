import { Card } from "@material-tailwind/react";
import React, { useState } from "react";
import { EachQuestion } from "./eachQuestion";
import "./pagination.css";
const TableComponent = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width:"100%",
        justifyContent:"center"
        // backgroundColor: "#e4a08c",
      }}
    >
      <div className="exam-container">
        <div className="question-display">
          <Card>
            {data?.map((each) => {
              return (
                <EachQuestion
                  head={each}                 
                />
              );
            })}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
