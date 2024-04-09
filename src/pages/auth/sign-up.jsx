import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  FormControl,
  Select,
  Option,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import React, { useState } from "react";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNum, setMobileNum] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();


    // if (username.toString().length === 0) {
    //   setError("Username is required");
    // } else if (email.toString().length === 0) {
    //   setError("Email is required");
    // } else if (password.toString().length === 0) {
    //   setError("password is required");
    // } else if (mobileNum.toString().length === 0) {
    //   setError("Mobile Number is required");
    // } else if (selectedOption.toString().length === 0) {
    //   setError("Role is required");
    // }
    //  else {
    //   let newUser = new FormData();
    //   newUser.append("name", name);
    //   newUser.append("email", email);
    //   newUser.append("password2", password2);
    //   newUser.append("role", role);
    //   newUser.append("profileImg", ProfileImg);
    //   newUser.append("phone_number", phone_number);
    //   newUser.append("skills", skills);
    //   newUser.append("password", password);
    //   console.log("append data", newUser);
    //   registerUser(newUser, history);
    //   console.log(newUser);
    // }
  };
  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          style={{ width: "100%", marginTop: "50px", marginLeft: "100px" }}
          src="/img/signup.gif"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" color="black" className="font-bold mb-4">
            Grade AI Sign Up
          </Typography>
          <Typography
            variant="paragraph"
            color="black"
            className="text-lg font-normal"
          >
            Enter your email, username and password to register.
          </Typography>
        </div>
        {/* //noValidate */}
        <form
          onSubmit={onSubmit}
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="black"
              className="-mb-3 font-medium"
            >
              User Name
            </Typography>
            <Input
              size="lg"
              placeholder="UserName"
              value={username}
              required
              style={{ color: "black", fontSize: "18px" }}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="black"
              className="-mb-3 font-medium"
            >
              Your email
            </Typography>
            <Input
              size="lg"
              value={email}
              required
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              style={{ color: "black", fontSize: "18px" }}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="black"
              className="-mb-3 font-medium"
            >
              Password
            </Typography>
            <Input
              size="lg"
              type="password"
              value={password}
              style={{ color: "black", fontSize: "18px" }}
              required
              placeholder="Password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="black"
              className="-mb-3 font-medium"
            >
              Mobile Number
            </Typography>
            <Input
              size="lg"
              type="number"
              value={mobileNum}
              required
              style={{ color: "black", fontSize: "18px" }}
              placeholder="Enter Mobile Number"
              className=" text-black !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setMobileNum(e.target.value)}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="black"
              className="-mb-3 font-medium"
            >
              Teacher/Student
            </Typography>
            <Select
              size="lg"
              placeholder="Select Your Role"
              value={selectedOption}
              style={{ color: "black", fontSize: "18px" }}
              required
              className=" text-black !border-t-blue-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setSelectedOption(e)}
            >
              <Option value="teacher">Teacher</Option>
              <Option value="student">Student</Option>
            </Select>
          </div>
          <Checkbox
            checked={check}
            required
            label={
              <Typography
                variant="small"
                color="black"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-blue-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            onChange={() => setCheck(!check)}
          />
          <Link to="/auth/sign-in" className="text-blue-900 ml-1">
          <Button className="mt-6" color="blue" fullWidth type="submit">
            Register Now
          </Button>
          </Link>
          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Already have an account?
            <Link to="/auth/sign-in" className="text-blue-900 ml-1">
              Sign in
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
