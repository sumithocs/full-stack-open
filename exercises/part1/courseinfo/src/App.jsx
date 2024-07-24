// const course = "Half Stack application development";

const courseContent = [
  { part: "Fundamentals of React", exercises: 10 },
  { part: "Using props to pass data", exercises: 7 },
  { part: "State of a component", exercises: 14 },
];

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = () => {
  return (
    <>
      <p>
        {courseContent[0].part} {courseContent[0].exercises}
      </p>
      <p>
        {courseContent[1].part} {courseContent[1].exercises}
      </p>
      <p>
        {courseContent[2].part} {courseContent[2].exercises}
      </p>
    </>
  );
};

const Total = () => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {courseContent[0].exercises +
          courseContent[1].exercises +
          courseContent[2].exercises}
      </p>
    </>
  );
};

const App = () => {
  return (
    <div>
      <Header course={"Half Stack application development"} />
      <Content />
      <Total />
    </div>
  );
};

export default App;
