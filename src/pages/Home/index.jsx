import { Button, FormGroup, Input } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../app/features/user/userSlice";
import { setQuestions } from "../../app/features/questions/questionsSlice";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/Fetcher";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const Navigation = useNavigate();
  const url = import.meta.env.VITE_API_ENDPOINT;
  const { response, error, loading } = useAxios(url);

  const RegisterToStore = (e) => {
    e.preventDefault();
    // console.log(e.target)
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    dispatch(setUser({ firstName, lastName, email , questions:[], score:0 }));
    if(response){
      dispatch(setQuestions(response?.results));
      Navigation("/questions/1");
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-100">
      <div>
        {/* <Navbar /> */}
        <h1 className="text-black text-center mb-5  text-3xl font-extrabold p-3">
          Hello {user?.firstName} {user?.lastName} register to start test
        </h1>
        <div className="flex justify-center items-center">
          <div className="w-1/2">
            <form
              onSubmit={RegisterToStore}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <Input
                  className=" appearance-none  mb-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <Input
                  className=" appearance-none  mb-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                />
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  className=" appearance-none  mb-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <Button variant="contained"
                className="w-full"
                type="submit">
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
