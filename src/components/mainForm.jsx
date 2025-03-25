import React from "react";
import buttonArrow from "../assets/images/icon-arrow.svg";
import TextInput from "./textInput.jsx";


function MainForm({ setDayHook, setMonthHook, setYearHook }) {
  return (
    <form>
            <div className="text-inputs-container">
              <label>
                D A Y <TextInput setDateHook={setDayHook} />
              </label>
              <label>
                M O N T H <TextInput setDateHook={setMonthHook} />
              </label>
              <label>
                Y E A R <TextInput setDateHook={setYearHook} />
              </label>
            </div>
            <div className="button-line-div">
              <div className="line"></div>
              <button type="submit" value="">
                <img src={buttonArrow} alt="button arrow down" />
              </button>
            </div>
          </form>
  );
}

export default MainForm;
