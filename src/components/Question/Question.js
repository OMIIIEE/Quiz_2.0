import React, { useState } from "react";
import ErrorMessage from "../../components/EroorMessage/ErrorMessage";
import "./Question.css";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Question = ({
  curquestion,
  setcurquestion,
  questions,
  options,
  correct,
  score,
  setscore,
  
}) => {
  const [selected, setselected] = useState();
  const [error, seterror] = useState(false);

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setselected(i);
    if (i === correct) setscore(score + 1);
    seterror(false);
  };


  // const handleCheck=(i)=>{
  //   setselected(i)
  //   if(i===correct) setscore(score+1);
  //   seterror(false);
  // };

  const history=useHistory();

  const handleNext=()=>{
    if(curquestion>8)
   { history.push("/result");}
   else if(selected)
   {
      setcurquestion(curquestion+1);
      setselected()
   }
   else
   seterror("Please Select An Option First")
  };

  const handleQuit=()=>{};

  return (
    <div className="question">
      <h1>Question{curquestion + 1} :</h1>
      <div className="singleques">
        <h2>{questions[curquestion].question}</h2>

        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                
                className={`singleOption ${selected && handleSelect(i)}`}
                onClick={()=>handleCheck(i)}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
              <div className="controls">
                <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{width:185}}
                href="/"
                onClick={handleQuit}

                >
                  Quit
                  
                </Button>


                <Button
                variant="contained"
                color="primary"
                size="large"
                style={{width:185}}
                onClick={handleNext}
                >
                  Next Question
                </Button>
              </div>

      </div>
    </div>
  );
};

export default Question;
