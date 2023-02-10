import { Axios } from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux/es";
import { useParams, useNavigate } from "react-router";
import { setQuestion } from "../../app/features/user/userSlice";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

const Questions = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const [answers, setAnswers] = React.useState([]);
  const colors = ["green", "red", "blue", "gray"]


  const shuffledAnswers = (answersToShuffle) => {
    for (let i = answersToShuffle?.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answersToShuffle[i], answersToShuffle[j]] = [answersToShuffle[j], answersToShuffle[i]];
    }
    return answersToShuffle;
  };

  useEffect(() => {
    if (questions?.questions[+id - 1]) {
      const answersShuffeled = shuffledAnswers( [...questions?.questions[+id - 1].incorrect_answers , 
        questions?.questions[+id - 1].correct_answer
    ]);
      setAnswers(answersShuffeled);
    }
  }, [questions , id]);

  const handleNext = (question, answer) => {
    dispatch(setQuestion({ question, answer }));
    if (+id === 5) {
      navigate("/result");
    } else {
      navigate(`/questions/${+id + 1}`);
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-white  justify-between  items-center flex-col">
      <div className="flex justify-center items-center w-full shadow-md p-3 bg-white">
        <h1 className="font-bold text-2xl w-full text-center">Question N°</h1>
      </div>
      {questions?.questions[+id - 1] && (
        <div
        style={{
            height: '-webkit-fill-available',
        }}
        className="flex flex-1 justify-around flex-col">
          <h1 className=" text-center my-5  text-3xl font-extrabold p-3">
            {questions?.questions[+id - 1].question}
          </h1>
          {questions?.questions[+id - 1].type === "boolean" && (
            <div 
            
            className="grid grid-cols-2 grid-rows-1 gap-4  w-full p-3 min-h-[50vh]">
              <Button
                style={{backgroundColor: 'green' , color: 'white'}}
                className="col-span-1 row-span-1  text-white text-2xl p-3 rounded font-bold"
                onClick={() =>
                  handleNext(questions?.questions[+id - 1], "True")
                }
              >
                True
              </Button>
              <Button
                style={{backgroundColor: 'red' , color: 'white'}}
                className="col-span-1 row-span-1 text-white text-2xl p-3 rounded font-bold"
                onClick={() =>
                  handleNext(questions?.questions[+id - 1], "False")
                }
              >
                False
              </Button>
            </div>
          )}
          {questions?.questions[+id - 1].type === "multiple" && (
            <div className="grid grid-cols-2 gap-4 w-full p-3 min-h-[50vh]">
              {answers?.map((answer ,idx) => (
                <Button
                key={idx}
                style={{backgroundColor: colors[idx], color: 'white' ,
            }}
                  className={`col-span-1  text-white p-3 rounded text-2xl font-bold`}
                  onClick={() =>
                    handleNext(questions?.questions[+id - 1], answer)
                  }
                >
                  {answer}
                </Button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Questions;
