import { Fragment, useEffect, useState } from "react";
import { Input } from "./components/form/Input";
import { CheckBox } from "./components/form/CheckBox";

function App2() {
  const [duration, setDuration] = useState(5)
  const [secondsLeft, setSecondsLeft] = useState(duration)

  //Je l'ai fais a cause des bonne pratique du useEffect
  const handleChange = (v) => {
    setDuration(v)
    setSecondsLeft(v)
  }

  useEffect(() =>{
    const timer = setInterval(()=>{
      setSecondsLeft(v => {
        if (v <= 1) {
          clearInterval(timer)
          return 0
        }
        return v - 1
      })
    }, 1000)
    return () =>{
      clearInterval(timer)
    }
  }, [duration])

  return (
    <div className="vstack gap-2">
      <Input value={duration} onChange={handleChange} placeholder="Timer..." />
      <p>
        {secondsLeft > 0 ? `Décompte: ${secondsLeft}` : "C'est fini !"}
      </p>
    </div>
  );
  // const [showInput, setShowInput] = useState(true);

  // return (
  //   <div className="container my-3 stack">
  //     <CheckBox
  //       checked={showInput}
  //       label="Afficher le champ titre"
  //       onChange={setShowInput}
  //       id="titleShow"
  //     />

  //     {showInput && <EditTitle />}
  //     <div style={{ height: "300vh" }}></div>
  //   </div>
  // );
}

// function EditTitle() {
//   const [title, setTitle] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [y, setY] = useState(0);

//   useEffect(() => {
//     const originalTitle = document.title;
//     return () => {
//       document.title = originalTitle;
//     };
//   }, []);

//   useEffect(() => {
//     document.title = title
//   }, [title]);

//   useEffect(() => {
//     const handler = (e) => {
//       console.log("scroll");
//       setY(window.scrollY);
//     };
//     window.addEventListener("scroll", handler);
//     return () => {
//       window.removeEventListener("scroll", handler);
//     };
//   }, []);

//   return (
//     <div className="vstack gap-2">
//       <Input
//         placeholder="Modifier le titre"
//         value={title}
//         onChange={setTitle}
//       />
//       <Input placeholder="Prénom" value={firstName} onChange={setFirstName} />
//       <div>Scroll: {y}</div>
//     </div>
//   );
// }

export default App2;
