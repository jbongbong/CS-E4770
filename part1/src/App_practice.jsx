// // Header takes care of rendering the name of the course
// const Header = (props) => {
//   return (
//     <h1>{props.course}</h1>
//   )
// }

// // exercise 1.1: Content renders the parts and their number of exercises
// // const Content = (props) => {
// //   return (
// //     <div>
// //       <p>
// //         {props.part1} {props.exercises1}
// //       </p>
// //       <p>
// //         {props.part2} {props.exercises2}
// //       </p>
// //       <p>
// //         {props.part3} {props.exercises3}
// //       </p>
// //     </div>
// //   )
// // }

// // exercise 1.2: Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead it only renders three Part components of which each renders the name and number of exercises of one part.

// // Part renders the name and number of exercises of one part
// const Part = (props) => {
//   return (
//     <p>{props.part} {props.exercise}</p>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.part1} exercise={props.exercises1} />
//       <Part part={props.part2} exercise={props.exercises2} />
//       <Part part={props.part3} exercise={props.exercises3} />
//     </div>
//   )
// }

// // Total renders the total number of exercises
// const Total = (props) => {
//   return (
//     <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
//   )
// }

// const App = () => {
//   // const course = 'Half Stack application development'
//   // const part1 = 'Fundamentals of React'
//   // const exercises1 = 10
//   // const part2 = 'Using props to pass data'
//   // const exercises2 = 7
//   // const part3 = 'State of a component'
//   // const exercises3 = 14

//   // const course = 'Half Stack application development'
//   // const part1 = {
//   //   name: 'Fundamentals of React',
//   //   exercises: 10
//   // }
//   // const part2 = {
//   //   name: 'Using props to pass data',
//   //   exercises: 7
//   // }
//   // const part3 = {
//   //   name: 'State of a component',
//   //   exercises: 14
//   // }

//   // const course = 'Half Stack application development'
//   // const parts = [
//   //   {
//   //     name: 'Fundamentals of React',
//   //     exercises: 10
//   //   },
//   //   {
//   //     name: 'Using props to pass data',
//   //     exercises: 7
//   //   },
//   //   {
//   //     name: 'State of a component',
//   //     exercises: 14
//   //   }
//   // ]

//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   // return (
//   //   <div>
//   //     <h1>{course}</h1>
//   //     <p>
//   //       {part1} {exercises1}
//   //     </p>
//   //     <p>
//   //       {part2} {exercises2}
//   //     </p>
//   //     <p>
//   //       {part3} {exercises3}
//   //     </p>
//   //     <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//   //   </div>
//   // )

//   // return (
//   //   <>
//   //     <Header course={course} />
//   //     <Content part1={part1.name} exercises1={part1.exercises} />
//   //     <Content part2={part2.name} exercises2={part2.exercises} />
//   //     <Content part3={part3.name} exercises3={part3.exercises} />
//   //     <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
//   //   </>
//   // )

//   // return(
//   //   <>
//   //     <Header course={course}/>
//   //     <Content part1={parts[0].name} exercises1={parts[0].exercises}/>
//   //     <Content part2={parts[1].name} exercises2={parts[1].exercises}/>
//   //     <Content part3={parts[2].name} exercises3={parts[2].exercises}/>
//   //     <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/>
//   //   </>
//   // )

//   // exercise 1.5: Let's take the changes one step further. Change the course and its parts into a single JavaScript object. Fix everything that breaks.

//   return(
//     <>
//       <Header course={course.name}/>
//       <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises}/>
//       <Content part2={course.parts[1].name} exercises2={course.parts[1].exercises}/>
//       <Content part3={course.parts[2].name} exercises3={course.parts[2].exercises}/>
//       <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/>
//     </>
//   )
// }

// export default App

// -------------------------------------------- //

import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   console.log('rendering with counter value', counter)
//   const increaseByOne = () => {

//     console.log('increasing, value before', counter)
//     setCounter(counter + 1)
//   }

//   const decreaseByOne = () => { 

//     console.log('decreasing, value before', counter)
//     setCounter(counter - 1)
//   }

//   const setToZero = () => {

//     console.log('resetting to zero, value before', counter)
//     setCounter(0)
//   }

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="plus" />
//       <Button onClick={setToZero} text="zero" />
//       <Button onClick={decreaseByOne} text="minus" />
//     </div>
//   )
// } 

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)
  
//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right) 
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(left + updatedRight)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//       <p>total {total}</p>
//     </div>
//   )
// }

// const App = () => {
//   const [value, setValue] = useState(10)


//   const hello = (who) => () => {
//     console.log('hello', who)
//   }

//   return (
//     <div>
//       {value}

//       <button onClick={hello('world')}>world</button>
//       <button onClick={hello('react')}>react</button>
//       <button onClick={hello('function')}>function</button>
//     </div>
//   )
// }

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    // <div>
    //   {value}
    //   <button onClick={() => setToValue(1000)}>
    //     thousand
    //   </button>
    //   <button onClick={() => setToValue(0)}>
    //     reset
    //   </button>
    //   <button onClick={() => setToValue(value + 1)}>
    //     increment
    //   </button>
    // </div>
    <div>
      {value}
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default App