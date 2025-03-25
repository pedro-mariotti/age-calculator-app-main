import { useState } from "react";
import MainForm from "./components/mainForm.jsx";
import CalculatorOutput from "./components/calculatorOutput.jsx";
import Footer from "./components/footer.jsx";

import "./App.css";

function App() {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const today = new Date();
  const currDay = today.getDate();
  const currMonth = today.getMonth() + 1;
  const currYear = today.getFullYear();
  const [AgeDay, setAgeDay] = useState("--");
  const [AgeMonth, setAgeMonth] = useState("--");
  const [AgeYear, setAgeYear] = useState("--");

  const calculateDate = (e) => {
    e.preventDefault();
    console.log(
      "Dados do formulário:",
      { year, month, day },
      " currYear - year = ",
      currYear,
      " - ",
      year
    );
    console.log("Data atual:", { currDay, currMonth, currYear });
    var intDay = parseInt(day);
    var intYear = parseInt(year);
    var intMonth = parseInt(month);
    var tempAgeYear = currYear - intYear;

    if (
      tempAgeYear > 0 &&
      intDay > 0 &&
      intMonth > 0 &&
      intYear > 0 &&
      intDay <= 31 &&
      intMonth <= 12
    ) {
      var tempAgeDay = currDay - intDay;
      var tempAgeMonth = currMonth - intMonth;
      if (tempAgeDay < 0) {
        tempAgeMonth--;
        tempAgeDay += 31;
      }
      if (tempAgeMonth < 0) {
        tempAgeYear--;
        tempAgeMonth += 12;
      }
    } else {
      tempAgeDay = "--";
      tempAgeMonth = "--";
      tempAgeYear = "--";
      alert("Please enter a valid date!");
    }
    setAgeDay(tempAgeDay);
    setAgeMonth(tempAgeMonth);
    setAgeYear(tempAgeYear);
  };

  return (
    <>
      <main>
        <section>
          <MainForm onSubmit={calculateDate} setDayHook={setDay} setMonthHook={setMonth} setYearHook={setYear} />
          <CalculatorOutput ageDayResult={AgeDay} ageMonthResult={AgeMonth} ageYearResult={AgeYear}/>
        </section>
      <Footer/>
      </main>
    </>
  );
}

export default App;
