import "./App.css";
import { useEffect, useRef } from "react";

function App() {
  const focus = useRef();
  let array = [
    "school",
    "home",
    "welcom",
    "you",
    "pleas",
    "compile",
    "problems",
    "output",
    "input",
    "levels",
    "change",
    "watching",
    "file",
    "user",
    "computer",
  ];
  let levels = {
    easy: 5,
    medium: 4,
    hard: 3,
  };
  let level = "easy";
  let secand = levels[level];

  const easyclick = () => {
    const level = "easy";
    let secand = levels[level];
    document.querySelector(".title").style.display = "block";
    document.querySelector(".spantitle").innerHTML = level;
    document.querySelector(".spansecands").innerHTML = secand;
    document.querySelector(".timeleft span").innerHTML = secand;
  };
  const midemclick = () => {
    const level = "medium";
    let secand = levels[level];
    document.querySelector(".title").style.display = "block";
    document.querySelector(".spantitle").innerHTML = level;
    document.querySelector(".spansecands").innerHTML = secand;
    document.querySelector(".timeleft span").innerHTML = secand;
  };
  const hardclick = () => {
    const level = "hard";
    let secand = levels[level];
    document.querySelector(".title").style.display = "block";
    document.querySelector(".spantitle").innerHTML = level;
    document.querySelector(".spansecands").innerHTML = secand;
    document.querySelector(".timeleft span").innerHTML = secand;
  };
  const agianclick = () => {
    window.location.reload();
  };
  const btnclick = () => {
    if (document.querySelector(".title").style.display === "block") {
      document.querySelector(".text").style.display = "block";
      document.querySelector(".select").style.display = "none";
      document.querySelector(".agian").style.display = "block";
      document.querySelector(".footertext").style.display = "block";
      document.querySelector(".scoreform").innerHTML = array.length;
      document.querySelector(".btn").remove();
      document.querySelector(".start").remove();
      focus.current.focus();
      arrayshow();
    } else {
      return false;
    }
  };

  const arrayshow = () => {
    let round = array[Math.floor(Math.random(array) * array.length)];
    document.querySelector(".showetext").innerHTML = round;
    let arryindex = array.indexOf(round);
    array.splice(arryindex, 1);
    document.querySelector(".text").innerHTML = "";
    Interval();
  };

  function Interval() {
    let set = setInterval(() => {
      document.querySelector(".timeleft span").innerHTML--;
      if (document.querySelector(".timeleft span").innerHTML === "0") {
        clearInterval(set);
        if (
          document.querySelector(".text").value.toLowerCase() ===
          document.querySelector(".showetext").innerHTML.toLowerCase()
        ) {
          document.querySelector(".text").value = "";
          document.querySelector(".timeleft span").innerHTML = secand;
          document.querySelector(".scoreto").innerHTML++;
          if (array.length > 0) {
            arrayshow();
          } else {
            document.querySelector(".textwinner").style.display = "block";
          }
        } else {
          document.querySelector(".textlose").style.display = "block";
        }
      }
    }, 1000);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="textspeed">
          <div></div>
          <div className="name col-12"> Typing Speed Text Game </div>
          <div className="select">
            <button className="easy btn btn-warning" onClick={easyclick}>
              Easy
            </button>
            <button className="medium btn btn-warning" onClick={midemclick}>
              Medium
            </button>
            <button className="hard btn btn-warning" onClick={hardclick}>
              Hard
            </button>
          </div>
          <div className="agian btn btn-danger" onClick={agianclick}>
            Try Again
          </div>
          <div className="title" style={{ display: "none" }}>
            you playing on <span className="spantitle"></span>level &you have{" "}
            <span className="spansecands"></span>secands to type the word
          </div>
          <button className="btn btn-primary start " onClick={btnclick}>
            start game
          </button>

          <div className="showetext"></div>
          <div className="araytext"></div>
          <div className="inputtext">
            <input
              type="text"
              ref={focus}
              className="input form-control text"
              style={{ display: "none" }}
              // onPaste={onpas}
            />
          </div>
          <div className="footertext">
            <div className="timeleft">
              Time Left : <span></span> seconds
            </div>
            <div className="scorefrom">
              Score:<span className="scoreto">0</span> From{" "}
              <span className="scoreform">0</span>{" "}
            </div>
            <div className="textlose">Loser</div>
            <div className="textwinner">winner</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
