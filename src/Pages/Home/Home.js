import { Button, MenuItem, TextField } from "@mui/material";
import "./Home.css";
import Categories from "../../Data/Categories";
import {  useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../../components/EroorMessage/ErrorMessage";
// import Quiz from "../Quiz/Quiz"
// import { render } from "@testing-library/react";

const Home = ({ name, setname, fetchquestion }) => {
  const [category, setcategory] = useState("");
  const [difficulty, setdifficulty] = useState("");
  const [error, seterror] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) 
    {
      seterror(true);
      return;
    } else 
    {
      seterror(false);
      fetchquestion(category, difficulty);
      history.push("/quiz");
    }
  };
   
  // useEffect(()=>{
  //   return <Quiz/>
  // },[history])


    return (

    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz settings</span>
        <div className="settings_select">
          {error && <ErrorMessage>Please Fill All The Fields</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setname(e.target.value)}
          />

          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}           
          >
            {Categories.map((cat) => (
              <MenuItem 
              key={cat.category} 
              value={cat.value}>
                {cat.category}
              </MenuItem>)
          )}
          </TextField>

          <TextField
            select
            label="select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setdifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>

            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>

            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>

      <img src="/quizimage.svg" className="banner" alt="quiz app" />
    </div>
  );
};
export default Home;
