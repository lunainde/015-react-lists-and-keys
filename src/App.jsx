import "./App.css";
import SimpleList from "./components/SimpleList";
import StudentList from "./components/StudentList";
import CourseList from "./components/CourseList";
import ProjectList from "./components/ProjectList";
import Results from "./components/Results";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <SimpleList />
      <StudentList />
      <CourseList />
      <ProjectList />
      <Results />
      <MovieList />
    </div>
  );
}

export default App;
