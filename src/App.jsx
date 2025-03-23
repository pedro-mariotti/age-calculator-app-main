import { useState } from "react";
import TextInput from "./components/textInput.jsx";
import buttonArrow from "./assets/images/icon-arrow.svg";
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
          <form onSubmit={calculateDate}>
            <div className="text-inputs-container">
              <label>
                D A Y <TextInput setDateHook={setDay} />
              </label>
              <label>
                M O N T H <TextInput setDateHook={setMonth} />
              </label>
              <label>
                Y E A R <TextInput setDateHook={setYear} />
              </label>
            </div>
            <div className="button-line-div">
              <div className="line"></div>
              <button type="submit" value="">
                <img src={buttonArrow} alt="button arrow down" />
              </button>
            </div>
          </form>
          <div className="calculator-output">
            <p>
              <span className="highlighted-number">{AgeYear} </span> years
            </p>
            <p>
              <span className="highlighted-number">{AgeMonth} </span> months
            </p>
            <p>
              <span className="highlighted-number">{AgeDay}</span> days
            </p>
          </div>
        </section>
        <footer className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Pedro Mariotti</a>.
        </footer>
      </main>
    </>
  );
}

export default App;
