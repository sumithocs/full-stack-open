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

const Part = (props) => {
  return (
    <>
      <p>
        {props.title} {props.exercises}
      </p>
    </>
  );
};

const Content = () => {
  return (
    <div>
      <Part
        title={courseContent[0].part}
        exercises={courseContent[0].exercises}
      />
      <Part
        title={courseContent[1].part}
        exercises={courseContent[1].exercises}
      />
      <Part
        title={courseContent[2].part}
        exercises={courseContent[2].exercises}
      />
    </div>
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
