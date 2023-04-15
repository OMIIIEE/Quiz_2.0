import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import "./Quiz.css" ; 
import Categories from "../../Data/Categories";
import Question from "../../components/Question/Question";


const Quiz = ({ name, score, setscore, setquestion, questions }) => {
  const [options, setoptions] = useState();
  const [curquestion, setcurquestion] = useState(0);

  useEffect(() => {
    setoptions(
      questions &&
        handleShuffle([
          questions[curquestion]?.correct_answer,
          ...questions[curquestion]?.incorrect_answers,
          //...->spread operator fro optios to spread randomly
        ])
    );
  }, [ curquestion,questions]);

  console.log(options);


  // to shuffle all the functions
  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  return (
  <div className="quiz">
    <span className="subtitle"> Welcome ,{name} </span>
      {
        questions ?(
        <>
        <div className="quizinfo">
        <span>{questions[curquestion].category}</span>
        <span>Score : {score}</span>
        </div>
          

          <Question
            curquestion={curquestion}
            setcurquestion={setcurquestion}
            questions={questions}
            options={options}
            correct={questions[curquestion]?.correct_answer}
            score={score}
            setscore={setscore}
            setquestion={setquestion}
          
          
          />

        </>
        ) : (
        <CircularProgress 
        style={{margin:100}}
        color="inherit"
        size={150}
        thickness={1}
        />
        )       
      }
  </div>
  );
};

export default Quiz;
