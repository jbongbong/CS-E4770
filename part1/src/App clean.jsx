// 3 new components: Header, Content, Total

// Header renders the name of the course
const Header = (props) => {
  return(
    <h1>
      {props.course}
    </h1>
  )
}

// Part renders the name and number of exercises of one part
const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

// Content renders the parts and their number of exercises
const Content = (props) => {
  return(
    <div>
      <Part part={props.part1} exercise={props.exercises1}/>
      <Part part={props.part2} exercise={props.exercises2}/>
      <Part part={props.part3} exercise={props.exercises3}/>
    </div>
  )

}

// Total renders the total number of exercises
const Total = (props) => {
  return(
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return(
    <>
      <Header course={course.name}/>
      <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises}/>
      <Content part2={course.parts[1].name} exercises2={course.parts[1].exercises}/>
      <Content part3={course.parts[2].name} exercises3={course.parts[2].exercises}/>
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/>
    </>
  )
}

export default App