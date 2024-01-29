// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [color, setColor] = useState("red");
//   function Click(e){
//     setColor("Blue")

//   }

//     return(
//       <>
//       <h2 style={{ color: color }}>My favorite color  is {color}.</h2>
//       <button onClick={Click}>Click</button>
//       </>
//     )
//   }

// export default App;

// import { useState } from "react";
// import "./App.css";

// function App (){
//   const[name ,setName]=useState('');

//   function Click(e) {
//     setName(e.target.value)
//   }

//   return(
//     <>
//     <h2>Select difficulty:{name}</h2>
//     <button onClick={Click} value="Easy">Easy</button>
//     <button onClick={Click} value="Medium">Medium</button>
//     <button onClick={Click} value="Hard">Hard</button>
//     <button onClick={Click} value="2023">2023</button>

//     </>
//   )
// }

// export default  App;





import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [surname, setFirsName] = useState("");
  const [email, setEmail] = useState("");



  function handleClick (e) {
    e.preventDefault();
    const val = document.querySelector("input[name='input']").value;
    const valone = document.querySelector("input[name='input1']").value;
    const valtwo = document.querySelector("input[name='input2']").value;


    setName(val);
    setFirsName(valone);
    setEmail(valtwo);



  };

  return (
    <>
      <form>
        <input name="input" type="text" />
        <input name="input1" type="text" />
        <input name="input2" type="text" />



        <button onClick={handleClick}>Click</button>
      </form>

      <h2>Input Value: {name}</h2>
      <h2>Input Value: {surname}</h2>
      <h2>Input Value: {email}</h2>

    </>
  );
}

export default App;
