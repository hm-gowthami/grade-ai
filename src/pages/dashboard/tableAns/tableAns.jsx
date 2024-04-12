import { Card } from "@material-tailwind/react";
import React from "react";
import "./pagination.scss";
import { EachQuestion } from "./eachQuestion";

const TableComponent = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div className="exam-container">
        <div className="question-display">
          <Card>
            {data?.map((each) => {
              return <EachQuestion head={each} />;
            })}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
