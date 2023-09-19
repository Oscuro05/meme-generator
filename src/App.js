import React from "react"
import Header from "./Header"
import Meme from "./Meme"
import "./App.css"

/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
export default function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}


// import React from "react"

// export default function App() {
//     const [whateverWeWant, func] = React.useState("Yes")  //this uses array destructuring in js. WhateverWeWant and func are variables that are assigned some values by this method of destructuring
//     console.log(whateverWeWant)
//     return (
//         <div className="state">
//             <h1 className="state--title">Is state important to know?</h1>
//             <div className="state--value">
//                 <h1>{result[0]}</h1>
//             </div>
//         </div>
//     )
// }


// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);