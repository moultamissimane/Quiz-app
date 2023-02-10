import axios from "axios";

export const fetchQuestions = async () => {
  const {data} = await axios.get(import.meta.env.VITE_API_ENDPOINT + "/home");
  return data;
};

