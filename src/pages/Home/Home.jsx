import DataTeacher from "./components/DataTeacher";
import Legend from "./components/Legend";
import Aside from "../../components/Aside/Aside";
import DataCourse from "./components/DataCourse";
import ListStudents from "./components/ListStudents";
import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Aside />
      <div className="main-content">
        {/* <Header /> */}
        <DataTeacher />
        <DataCourse />
        <Legend />
        <ListStudents />
      </div>
  </div>
  );
};

export default Home;
