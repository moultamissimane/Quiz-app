import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setScore } from "../../app/features/user/userSlice";

const Result = () => {
  const dispatch = useDispatch();
  const { questions, firstName, score } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (questions?.length > 0) {
      // calculate correct answers
      const correctAnswers = questions?.filter(
        (question) => question.question.correct_answer === question.answer
      ).length;
      // calculate score
      const score = (correctAnswers / questions.length) * 100;
      console.log(score);
      dispatch(setScore(score));
    }
  }, [questions]);

  return (
    <div>
      <h1 className="font-bold text-2xl w-full text-center my-5 p-3">
        Result Of The Test
      </h1>
      <Typography
        variant="h4"
        component="div"
        style={{
          color: score >= 50 ? "green" : "red",
        }}
        className="text-center my-5  text-3xl font-extrabold p-3"
        gutterBottom
      >
        {firstName} Your Score is: {score}%{" "}
        {score >= 50 ? "Passed ❤" : "Failed 💔"}
      </Typography>
      <div className="w-full shadow-md p-3 bg-white">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Question</th>
              <th className="px-4 py-2">Answer</th>
              <th className="px-4 py-2">Correct Answer</th>
            </tr>
          </thead>
          <tbody>
            {questions?.map(({ question, answer }, index) => (
              <tr className="hover:bg-gray-100" key={index}>
                <td className="border px-4 py-2">
                  {question.correct_answer === answer ? "Correct" : "Wrong"}
                </td>
                <td className="border px-4 py-2">{question.question}</td>
                <td className="border px-4 py-2">{answer}</td>
                <td className="border px-4 py-2">{question.correct_answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center p-3">
        <Button
          variant="contained"
          color="primary"
          className="w-1/2 self-center my-5"
          onClick={() => navigate("/Home")}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default Result;
