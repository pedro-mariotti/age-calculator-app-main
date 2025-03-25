import React from "react";

function CalculatorOutput({ ageYearResult, ageMonthResult, ageDayResult }) {
  return (
    <div className="calculator-output">
      <p>
        <span className="highlighted-number">{ageYearResult} </span> years
      </p>
      <p>
        <span className="highlighted-number">{ageMonthResult} </span> months
      </p>
      <p>
        <span className="highlighted-number">{ageDayResult}</span> days
      </p>
  </div>
  );
}

export default CalculatorOutput;
