// import React from "react";
import "./App.css";
import { useMessageSession } from './hooks/useMessageSession'

function Test() {
  const [message,setMessage] = useMessageSession('hook-key','张三')

  setTimeout(() => {
    setMessage()
  }, 3000);

  return (<div>这是一个 {message}</div>)
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Test>
//           <div>
//                 zheshishihsi
//           </div>
//           </Test>
//       </div>
//     );
//   }
// }

export default Test;
