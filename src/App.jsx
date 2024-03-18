import "./App.css";
import SimpleList from "./components/SimpleList";
import StudentList from "./components/StudentList";
import CourseList from "./components/CourseList";
import ProjectList from "./components/ProjectList";
import Results from "./components/Results";
import MovieList from "./components/MovieList";
//IMPROVE CONDITIONAL
import ImprovedMovieList from './components/ImprovedMovieList';

//CONDITIONALS
import Spinner from './components/Spinner'; 
import { useState } from 'react';

function App() {
  //CONDITIONAL
  //Declare a new state variable, which we'll call "isLoading"
  // const [isLoading, setIsLoading] = useState(true); 
  const [isLoading, setIsLoading] = useState(false); 
  ////IMPROVE CONDITIONAL

    if(isLoading) {
      return <Spinner/>
    } else {
      return (
        <div className="App">
          {/* <MovieList /> */}
          <ImprovedMovieList />
        </div>
      )
    }


  return (
    <div className="App">
      <SimpleList />
      <StudentList />
      <CourseList />
      <ProjectList />
      <Results />
      <MovieList />
      <ImprovedMovieList />
    </div>
  );
}

export default App;
