import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const App = () => {
  const [inputUser, setInputUser] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = inputUser.duration >= 1;
  const handleChange = (inputIdentifier, newValue) => {
    setInputUser((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} inputUser={inputUser} />
      {inputIsValid ?<Result input={inputUser} />:<p className="center">Please enter a positive duration</p>}
    </>
  );
};

export default App;
