import React, { useState } from "react";
import Card from "./components/Card";
import axios from "axios";
import Cart from "./pages/Cart"
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Nav from "./components/Nav";
// function App(){
//   var [a, b]=useState(10);
//   return(
//     <div className="main">
//       <h1>number is {a}</h1>
//       <button onClick={()=>{b(++a)}}>click to increment</button>
//       <button onClick={()=>{b(--a)}}>click to decrement</button>
//     </div>
//   )
// }

// function App() {
//   const user = "Deepanshu";

//   const [data, getData] = useState([]);
//   const getResponse = async () => {
//     const response = await axios.get(
//       "https://picsum.photos/v2/list?page=2&limit=5"
//     );
//     getData(response.data)
//     console.log(data);
    
//   };

//   return (
//     <>
//       <button onClick={getResponse}></button>
//       <Card name={"deep"} />
//       <div>
      
//       {data.map((ele)=>{
//         return <h1>hello</h1>
        
//       })}
//       </div>
//     </>
//   );
// }

function App(){
  return(
    <>
    <Nav />
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App;
