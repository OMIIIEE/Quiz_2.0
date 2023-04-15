
import {  BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';

function App() {

const[name,setname]=useState();
const[questions,setquestion]=useState();
const[score,setscore]=useState(0);

const fetchquestion = async(category="",difficulty="")=>{

    const {data} = await axios.get(  
      //curly braces around data for destructuring
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    //if category exist it will category and if dificlty exists the difficulty 
    );
    setquestion(data.results)
};

  return (
    <Router>
   {/* <Routes> */}
    <div className="app" style={{backgroundImage:
    'URL("./question1.png")'}}>
      <Header />
      <Switch>

        <Route path="/" exact>
          <Home name={name} 
          setname={setname} 
          fetchquestion={fetchquestion}/>
        </Route>

        <Route path="/quiz" >
          <Quiz 
          name={name}
          questions={questions}
          score={score}
          setscore={setscore}
          setquestion={setquestion}

          />
        </Route>

        <Route path='/result' >
          <Result name={name} score={score} />
        </Route>
      </Switch>
    </div>
    <Footer />
    {/* </Routes> */}
    </Router>
  );
}

export default App;
