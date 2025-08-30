import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./organisms/LoginForm";

function App() {
  return (
    <>
    <LoginForm/>
      {/* <BrowserRouter basename="/">
        <Routes>
          <Route path="/login" element={}/>
         </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
